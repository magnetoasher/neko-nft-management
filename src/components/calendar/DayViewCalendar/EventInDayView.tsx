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
      className="absolute ml-[50px] w-3/5 bg-black text-white opacity-90 cursor-pointer"
      onClick={handleOnEventClick}
    >
      {description}
    </div>
  );
};
