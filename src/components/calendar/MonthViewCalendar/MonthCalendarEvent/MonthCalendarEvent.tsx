import React from 'react';
import { useDispatch } from 'react-redux';

import { CalendarEventData } from '../../../../ts-generalTypes/InitialStateInterfaces';
import { openEventModalPopup } from '../../../../redux/actions/actionsUI';
import { setSelectedEventId } from '../../../../redux/actions/actionsCalendar';

interface MonthCalendarEventProps {
  events: CalendarEventData;
  size?: string;
}

export const MonthCalendarEvent = (props: MonthCalendarEventProps) => {
  const dispatch = useDispatch();
  const handleOnEventClick = () => {
    dispatch(setSelectedEventId(`${uniqueEventId}`));
    dispatch(openEventModalPopup());
  };

  const { uniqueEventId, title } = props.events;

  return (
    <div
      id={`${uniqueEventId}`}
      className="w-auto bg-black m-[5px] text-left box-border overflow-hidden h-10 py-0 px-[5px] font-bold flex items-center justify-center text-white rounded-md hover:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.4)] ease-in-out duration-150"
      onClick={handleOnEventClick}
    >
      <p className="m-0">{title}</p>
    </div>
  );
};
