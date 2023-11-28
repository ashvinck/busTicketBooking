import React from 'react';

const SeatAvailable = () => {
  return (
    <svg
      width='45'
      height='90'
      viewBox='0 0 45 90'
      fill='#fff'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='39'
        height='69'
        rx='3.5'
        fill='white'
        stroke='green'
      ></rect>
      <rect
        x='5.5'
        y='56.5'
        width='29'
        height='4'
        rx='1.5'
        fill='white'
        stroke='green'
      ></rect>
    </svg>
  );
};

const SelectedSeat = () => {
  return (
    <svg
      width='45'
      height='90'
      viewBox='0 0 45 90'
      fill='green'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='39'
        height='69'
        rx='3.5'
        fill='green'
        stroke='green'
      ></rect>
      <rect
        x='5.5'
        y='56.5'
        width='29'
        height='4'
        rx='1.5'
        fill='green'
        stroke='green'
      ></rect>
    </svg>
  );
};

const ReservedforWomen = () => {
  return (
    <svg
      width='45'
      height='90'
      viewBox='0 0 45 90'
      fill='white'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='39'
        height='69'
        rx='3.5'
        fill='white'
        stroke='pink'
      ></rect>
      <rect
        x='5.5'
        y='56.5'
        width='29'
        height='4'
        rx='1.5'
        fill='white'
        stroke='pink'
      ></rect>
    </svg>
  );
};

const BookedSeat = () => {
  return (
    <svg
      width='45'
      height='90'
      viewBox='0 0 45 90'
      fill='grey'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='39'
        height='69'
        rx='3.5'
        fill='#e5e5e5'
        stroke='#BDBDBD'
      ></rect>
      <rect
        x='5.5'
        y='56.5'
        width='29'
        height='4'
        rx='1.5'
        fill='#e5e5e5'
        stroke='#BDBDBD'
      ></rect>
    </svg>
  );
};

const ReservedByWomen = () => {
  return (
    <svg
      width='45'
      height='90'
      viewBox='0 0 45 90'
      fill='grey'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='39'
        height='69'
        rx='3.5'
        fill='#e5e5e5'
        stroke='pink'
      ></rect>
      <rect
        x='5.5'
        y='56.5'
        width='29'
        height='4'
        rx='1.5'
        fill='#e5e5e5'
        stroke='pink'
      ></rect>
    </svg>
  );
};

export {
  SeatAvailable,
  SelectedSeat,
  ReservedforWomen,
  BookedSeat,
  ReservedByWomen,
};
