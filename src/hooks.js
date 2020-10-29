import { useEffect, useRef, useState } from 'react';

export default useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const enter = () => {
    setHovered(true);
  };
  const leave = () => {
    setHovered(false);
  };
  useEffect(() => {
    const refCopy = ref;
    refCopy.current.addEventListener('mouseenter', enter);
    refCopy.current.addEventListener('mouseleave', leave);
    return () => {
      refCopy.current.removeEventListener('mouseenter');
      refCopy.current.removeEventListener('mouseLeave');
    };
  });
  return [ref, hovered];
};
