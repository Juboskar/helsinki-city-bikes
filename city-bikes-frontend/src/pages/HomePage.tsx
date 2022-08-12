import React from 'react';
import { Typography } from '@mui/material';
import PedalBikeIcon from '@mui/icons-material/PedalBike';

const HomePage = () => {
  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <PedalBikeIcon style={{ fontSize: 250 }} />
      <Typography variant="h5"> Welcome to Helsinki City Bikes app </Typography>
    </div>
  );
};

export default HomePage;
