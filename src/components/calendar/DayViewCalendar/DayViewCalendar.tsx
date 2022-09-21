import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { HourCell } from './HourCell';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { EventInDayView } from './EventInDayView';
import {
  selectCurrentSelectedDate,
  setListOfEventsInStorage,
} from '../../../redux/selectors';
import { day_hours } from '../../../helpers/fixtures';

export const DayViewCalendar = () => {
  const currentSelectedDate =
    useSelector(selectCurrentSelectedDate) ||
    moment(new Date()).format('YYYY-M-DD');
  const listOfEvents = useSelector(setListOfEventsInStorage) || [];
  const listOfEventsThisDay = listOfEvents.filter(
    (event) => event.date === currentSelectedDate
  );

  const [eventsWithCoordinates, seteventsWithCoordinates] = React.useState<
    {}[]
  >([]);

  useEffect(() => {
    const timeSlots = Array.from(document.querySelectorAll('.half-of-an-hour'));
    const slotWrapper = document.querySelector('.day-events-wrapper');
    const wrapperCoordinates = slotWrapper?.getBoundingClientRect();
    const halfHeight = 25;
    let arr: { id: string; top: number }[] = [];
    for (let t of timeSlots) {
      let coordinates = t.getBoundingClientRect();
      let id = t.id;
      arr.push({
        id,
        top:
          coordinates.bottom - (wrapperCoordinates?.top ?? 0) - halfHeight / 2,
      });
    }
    let newArr: any[] = [];
    if (listOfEventsThisDay.length > 0) {
      listOfEventsThisDay.map((item) => {
        let a = arr.filter((item_a) => item.time === item_a.id);
        newArr.push({ ...item, x1: a[0].top, x2: a[0].top + halfHeight });
        seteventsWithCoordinates(newArr);
        return;
      });
    }
  }, [currentSelectedDate]);

  return (
    <div className="day-view-wrapper relative w-full h-[calc(100%-22px)]">
      <ErrorBoundary>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
          }}
          className="data-day-view-wrapper"
        >
          <span style={{ fontWeight: 'bold', alignSelf: 'center' }}>
            {currentSelectedDate}, {moment(currentSelectedDate).format('dddd')}
          </span>
        </div>
        <div className="relative day-events-wrapper h-[calc(100%-22px)] overflow-y-auto pr-[11px]">
          {day_hours.map((item, index) => (
            <HourCell
              key={index}
              time={item}
              currentSelectedDate={currentSelectedDate}
            />
          ))}
          {listOfEventsThisDay.length > 0
            ? eventsWithCoordinates.map((event: any) => (
                <EventInDayView
                  key={event}
                  top={event.x1}
                  height={event.x2 - event.x1}
                  id={event.uniqueEventId}
                  description={event.description}
                />
              ))
            : null}
        </div>
      </ErrorBoundary>
    </div>
  );
};
