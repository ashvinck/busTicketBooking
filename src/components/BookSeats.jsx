import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { bookedData } from '../data/seatData';
import SeatInfo from './SeatInfo';

const Seat = ({ seatNumber, onClick, isSelected, bookedData, price }) => {
  // Find the booking information for the current seat number
  const bookingInfo = bookedData.find(
    (booking) => booking.seatNo === seatNumber
  );

  // Determine if the seat is booked
  const isBooked = !!bookingInfo;

  // Determine if the seat is reserved for women
  const isReservedForWomen = ['L3', 'U3', 'L4', 'U4', 'L9', 'U9'].includes(
    seatNumber
  );

  // Determine the stroke and fill colors
  let strokeColor, fillColor;
  if (isBooked) {
    strokeColor = bookingInfo.gender === 'Female' ? 'pink' : 'grey';
    fillColor = '#e5e5e5';
  } else {
    strokeColor = isReservedForWomen ? 'pink' : 'green';
    fillColor = isSelected ? 'green' : 'white';
  }

  // Tooltip content for hovering
  const tooltipContent = (
    <>
      <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
        Seat {seatNumber}
      </Typography>
      <Typography variant='subtitle1'>&#8377;{price}</Typography>
      <Typography variant='body1'>
        {isReservedForWomen ? 'Reserved for Women' : 'General Public'}
      </Typography>
      <Typography variant='body1'>
        {isBooked ? 'Not Available' : 'Available'}
      </Typography>
    </>
  );

  return (
    <>
      <Tooltip title={tooltipContent} arrow>
        <Box
          onClick={onClick}
          style={{
            cursor: isBooked ? 'not-allowed' : 'pointer',
            p: 0,
          }}
        >
          <svg
            width='45'
            height='90'
            viewBox='0 0 45 90'
            fill={fillColor}
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='0.5'
              y='0.5'
              width='39'
              height='69'
              rx='3.5'
              fill={fillColor}
              stroke={strokeColor}
            ></rect>
            <rect
              x='5.5'
              y='56.5'
              width='29'
              height='4'
              rx='1.5'
              fill={fillColor}
              stroke={strokeColor}
            ></rect>
          </svg>
        </Box>
      </Tooltip>
    </>
  );
};

const BerthLayout = ({ title, onSelect, selectedSeats, price }) => {
  const seatPrefix = title === 'Lower Berth' ? 'L' : 'U';
  const numofRows = 5;

  const calculateSeatNumber = (rowIndex, seatIndex) => {
    return `${seatPrefix}${rowIndex * 3 + seatIndex + 1}`;
  };

  return (
    <>
      <Box sx={{ border: '1px solid black', m: 1 }}>
        <Box sx={{ p: 2, borderBottom: '1px solid black' }}>
          <Typography>{title}</Typography>
        </Box>
        {Array.from({ length: numofRows }, (_, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              pt: 1,
              pl: 1,
            }}
          >
            {[0, 1, 2].map((seatIndex) => (
              <Box
                key={seatIndex}
                sx={{
                  display: 'flex',
                  flex: 1,
                  ml: seatIndex === 1 ? 3 : 0,
                }}
              >
                <Seat
                  seatNumber={calculateSeatNumber(rowIndex, seatIndex)}
                  onClick={() =>
                    onSelect(calculateSeatNumber(rowIndex, seatIndex))
                  }
                  isSelected={selectedSeats.includes(
                    calculateSeatNumber(rowIndex, seatIndex)
                  )}
                  bookedData={bookedData}
                  price={price}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};

const BookSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const ticketPrice = 1200;

  const handleSeatClick = (seatNumber) => {
    const isSelected = selectedSeats.includes(seatNumber);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const totalPrice = selectedSeats.length * ticketPrice;

  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'row', m: 2, overflow: 'scroll' }}
      >
        <BerthLayout
          title='Lower Berth'
          onSelect={handleSeatClick}
          selectedSeats={selectedSeats}
          price={ticketPrice}
        />
        <BerthLayout
          title='Upper Berth'
          onSelect={handleSeatClick}
          selectedSeats={selectedSeats}
          price={ticketPrice}
        />
        <SeatInfo />
      </Box>
      <Box sx={{ m: 2, border: '1px solid black' }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                p: 2,
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Typography>{selectedSeats.length} Seats</Typography>
              </Box>
              <Divider
                orientation='vertical'
                sx={{ height: '25px', mx: 1, borderColor: '#000' }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  maxWidth: '100%',
                  overflow: 'hidden',
                }}
              >
                <Typography
                  sx={{
                    maxWidth: '100%',
                    overflow: 'scroll',
                  }}
                >
                  {selectedSeats.join(',')}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Box sx={{ p: 2 }}>
              <Typography>&#8377; {totalPrice}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 2 }}>
        <Button variant='contained' fullWidth>
          Continue
        </Button>
      </Box>
    </>
  );
};

export default BookSeats;
