import React from 'react';
import moment from 'moment';
export interface CalendarHeaderCellProps {
  id: number;
  day: string;
  size: string;
  children?: JSX.Element;
}

export const CalendarHeaderCell = ({
  id,
  day,
  size,
}: CalendarHeaderCellProps) => {
  const currentDay = moment(new Date()).format('dddd').slice(0, 3);

  return (
    <div
      key={id}
      className={
        size === 'small'
          ? 'w-1/4 flex-1 flex justify-center items-stretch text-[8px] border-solid border-[1px] border-[#cccccc] overflow-auto font-bold border-none w-[34px] h-[34px] overflow-hidden uppercase'
          : day === currentDay
          ? 'w-1/4 flex-1 flex justify-center items-center text-[#a04ef6] border-solid border-t-[1px] border-l-[1px] border-r-[1px] border-[#cccccc] overflow-auto font-bold uppercase'
          : 'w-1/4 flex-1 flex justify-center items-center border-solid border-t-[1px] border-l-[1px] border-r-[1px] border-[#cccccc] overflow-auto font-bold uppercase'
      }
    >
      {day}
    </div>
  );
};
