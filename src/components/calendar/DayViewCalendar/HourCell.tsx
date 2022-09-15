import React from 'react';

interface HourCellProps {
  time: string;
  currentSelectedDate: string;
}

export const HourCell = ({ time }: HourCellProps) => {
  const timeForId = time.split(':');
  return (
    <div className="w-[calc(100% - 50px)] border-solid border-[1px] border-[#d3d3d3] h-[28px] text-left text-[15px] ml-[50px]">
      <span className="inline absolute p-0 ml-[-50px]">{time}</span>
      <div
        className="quarter-of-an-hour p-0 m-0 relative h-[calc((100% / 4))] hover:border-solid hover:border-[1px] hover:border-[##c2d6ef]"
        id={time}
      ></div>
      <div
        className="quarter-of-an-hour p-0 m-0 relative h-[calc((100% / 4))] hover:border-solid hover:border-[1px] hover:border-[##c2d6ef]"
        id={`${timeForId[0]}:15`}
      ></div>
      <div
        className="quarter-of-an-hour p-0 m-0 relative h-[calc((100% / 4))] hover:border-solid hover:border-[1px] hover:border-[##c2d6ef]"
        id={`${timeForId[0]}:30`}
      ></div>
      <div
        className="quarter-of-an-hour p-0 m-0 relative h-[calc((100% / 4))] hover:border-solid hover:border-[1px] hover:border-[##c2d6ef]"
        id={`${timeForId[0]}:45`}
      ></div>
    </div>
  );
};
