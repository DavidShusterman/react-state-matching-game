import React from 'react';

import Button from '../Button';
import TileSelector from '../TileSelector';

const OptionsPanel = ({ numTiles, playing }) => (
  <div>
    <TileSelector numTiles={numTiles} />
    <Button playing={playing} />
  </div>
);

export default OptionsPanel;
