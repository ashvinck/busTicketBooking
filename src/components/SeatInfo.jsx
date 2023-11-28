import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  SeatAvailable,
  SelectedSeat,
  ReservedforWomen,
  BookedSeat,
  ReservedByWomen,
} from './SeatTypes';

const SeatInfo = () => {
  const seatInfo = [
    {
      icon: <SeatAvailable />,
      title: 'Available Seat',
    },
    {
      icon: <SelectedSeat />,
      title: 'Selected By You',
    },
    {
      icon: <ReservedforWomen />,
      title: 'Available Only For Women',
    },
    {
      icon: <BookedSeat />,
      title: 'Booked by Others',
    },
    {
      icon: <ReservedByWomen />,
      title: 'Booked by Female Passengers',
    },
  ];

  return (
    <Box sx={{ border: '1px solid black', m: 1 }}>
      <Box
        sx={{
          p: 2,
          borderBottom: '1px solid black',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Typography>Know about seat types </Typography>
        <span>
          <InfoIcon />
        </span>
      </Box>

      <Box sx={{ p: 2 }}>
        {seatInfo.map(({ icon, title }) => (
          <>
            <Box sx={{ display: 'flex', marginBottom: 1 }} key={title}>
              <Box sx={{ minWidth: 'fitContent' }}>{icon}</Box>
              <Typography sx={{ marginLeft: 1 }}>{title}</Typography>
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default SeatInfo;
