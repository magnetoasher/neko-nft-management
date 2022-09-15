import React from 'react';
import { useSelector } from 'react-redux';

import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import {
  selectWeekDaysName,
  selectCurrentCalendar,
} from '../../../redux/selectors';
import { CalendarHeaderCell } from './CalendarHeaderCell';
import { MonthCalendarCell } from './MonthCalendarCell';
import { DayType } from '../../../ts-generalTypes/propTypes';

interface MonthCalendaProps {
  size: string;
  calendarMatrix?: DayType[][];
}

const Calendar = ({ size, calendarMatrix }: MonthCalendaProps) => {
  const weekDaysName = useSelector(selectWeekDaysName);
  const currentCalendar = useSelector(selectCurrentCalendar);
  const calendar = calendarMatrix ? calendarMatrix : currentCalendar!;

  const renderCalendarWeek = (week: DayType[]) => (
    <div
      key={Math.random() * 1000}
      className="flex w-full h-[calc(100%/7)] relative top-0 left-0 right-0 bottom-0"
    >
      {week.map(({ id, day, isCurrentMonth, isToday }: DayType) => (
        <MonthCalendarCell
          key={id}
          id={id}
          day={day}
          isCurrentMonth={isCurrentMonth}
          isToday={isToday}
          size={size}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full h-full font-[1em] py-6">
      <ErrorBoundary>
        <div
          key={0}
          className="flex w-full h-[calc(100%/7)] relative top-0 left-0 right-0 bottom-0"
        >
          {weekDaysName.map(({ id, day }) => (
            <CalendarHeaderCell key={id} id={id} day={day} size={size} />
          ))}
        </div>
      </ErrorBoundary>
      <ErrorBoundary>{calendar.map(renderCalendarWeek)}</ErrorBoundary>
    </div>
  );
};

export default Calendar;
