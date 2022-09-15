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
    const timeSlots = Array.from(
      document.querySelectorAll('.quarter-of-an-hour')
    );
    let arr: { id: string; top: number }[] = [];
    for (let t of timeSlots) {
      let coordinates = t.getBoundingClientRect();
      let id = t.id;
      arr.push({ id, top: coordinates.top });
    }

    let newArr: any[] = [];
    if (listOfEventsThisDay.length > 0) {
      listOfEventsThisDay.map((item) => {
        let a = arr.filter((item_a) => item.timeFrom === item_a.id);
        let b = arr.filter((item_b) => item.timeTo === item_b.id);
        newArr.push({ ...item, x1: a[0].top, x2: b[0].top });
        seteventsWithCoordinates(newArr);

        return;
      });
    }
  }, [currentSelectedDate]);

  return (
    <div className="day-view-wrapper w-full h-full">
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
      </ErrorBoundary>
    </div>
  );
};
