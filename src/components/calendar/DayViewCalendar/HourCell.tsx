import React from 'react';

interface HourCellProps {
  time: string;
  currentSelectedDate: string;
}

export const HourCell = ({ time }: HourCellProps) => {
  const timeForId = time.split(':');
  return (
    <div className="flex flex-col justify-center w-[calc(100% - 50px)] h-[50px] text-left text-[15px] ml-[50px]">
      <span className="inline p-0 ml-[-50px] translate-y-2/4">{time}</span>
      <div
        className="half-of-an-hour p-0 m-0 relative border-solid border-[1px] border-[##c2d6ef]"
        id={time}
      ></div>
      <div
        className="half-of-an-hour p-0 m-0 relative h-[calc((100%/2))]"
        id={`${timeForId[0]}:30`}
      ></div>
    </div>
  );
};
