import React from 'react';

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
}: CalendarHeaderCellProps) => (
  <div
    key={id}
    className={
      size === 'small'
        ? 'day-cell flex-1 w-1/4 items-stretch border-solid border-[1px] border-[#cccccc] overflow-auto font-medium text-center border-none w-[34px] h-[34px] overflow-hidden font-normal'
        : 'day-cell flex-1 w-1/4 items-stretch border-solid border-[1px] border-[#cccccc] overflow-auto font-medium text-center'
    }
  >
    {day}
  </div>
);
