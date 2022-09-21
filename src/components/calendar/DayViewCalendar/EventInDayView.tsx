import React from 'react';
import { useDispatch } from 'react-redux';

import { openEventModalPopup } from '../../../redux/actions/actionsUI';
import { setSelectedEventId } from '../../../redux/actions/actionsCalendar';

interface EventInDayViewProps {
  id: string;
  top: number;
  height: number;
  description: string;
}

export const EventInDayView = ({
  top,
  height,
  description,
  id,
}: EventInDayViewProps) => {
  const dispatch = useDispatch();
  const handleOnEventClick = () => {
    dispatch(setSelectedEventId(id));
    dispatch(openEventModalPopup());
  };

  return (
    <div
      style={{ top, height }}
      className="absolute pl-16 pr-[11px] w-full text-black opacity-90 cursor-pointer"
      onClick={handleOnEventClick}
    >
      <div className="bg-[#ffefe3] h-full pl-[12px] leading-[25px] rounded-[5px]">
        {description}
      </div>
    </div>
  );
};
