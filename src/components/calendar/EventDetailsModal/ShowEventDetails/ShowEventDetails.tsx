import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TimePicker } from 'antd';
import moment from 'moment';
import { toast } from 'react-toastify';

import { EventDetailsModalLayout } from '../EventDetailsModalLayout';
import {
  selectCurrentSelectedEventId,
  setIsEventModalEditable,
  selectCurrentCalendarView,
} from '../../../../redux/selectors';
import {
  closeEventModalPopup,
  makeEventDetailsModalEditable,
  changeCalendarView,
} from '../../../../redux/actions/actionsUI';
import { updateEventData } from '../../../../redux/actions/actionsCalendar';
import { CalendarEventData } from '../../../../ts-generalTypes/InitialStateInterfaces';
import { useInput } from '../../../../hooks/useInput';
import { useTextArea } from '../../../../hooks/useTextArea';
import { useTimePicker } from '../../../../hooks/useTimePicker';
import {
  getLocalStorageData,
  setLocalStorageData,
} from '../../../../helpers/local-storage-utils';

export const EventDetailsPopup = () => {
  const dispatch = useDispatch();
  const id = useSelector(selectCurrentSelectedEventId);
  const isEventModalEditable = useSelector(setIsEventModalEditable);
  const currentCalendarView = useSelector(selectCurrentCalendarView);

  const events = getLocalStorageData('events') || [];
  const filteredEventData = events.filter(
    (item: CalendarEventData) => item.uniqueEventId === id
  );
  const eventTitleValue = useInput(filteredEventData[0].title, false);
  const eventDescriptionValue = useTextArea(
    filteredEventData[0].description,
    false
  );
  const timeFrom = useTimePicker(filteredEventData[0].timeFrom, false);
  const timeTo = useTimePicker(filteredEventData[0].timeTo, false);

  const updateEventHandler = () => {
    const updatedEventObject = {
      ...filteredEventData[0],
      title: eventTitleValue.value,
      description: eventDescriptionValue.value,
      timeFrom: timeFrom.timeOption,
      timeTo: timeTo.timeOption,
    };
    dispatch(updateEventData(updatedEventObject));
    dispatch(makeEventDetailsModalEditable());
    dispatch(closeEventModalPopup());
    if (currentCalendarView === 'day') {
      dispatch(changeCalendarView('month'));
    }

    const updateIndex = events
      .map((item: CalendarEventData) => item.uniqueEventId)
      .indexOf(id);

    setLocalStorageData(
      'events',
      JSON.stringify([
        ...events.slice(0, updateIndex),
        updatedEventObject,
        ...events.slice(updateIndex + 1),
      ])
    );

    toast.success('Event succefully updated!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
  };

  return (
    <EventDetailsModalLayout>
      <input
        className="w-4/5 outline-none border-none m-2.5 ml-0 text-[27px] font-medium"
        disabled={!isEventModalEditable}
        {...eventTitleValue}
      />
      <div className="flex flex-wrap gap-2.5">
        <TimePicker
          defaultValue={moment(timeFrom.timeOption, 'HH:mm')}
          disabled={!isEventModalEditable}
          format="HH:mm"
          minuteStep={15}
          {...timeFrom}
        />
        <TimePicker
          defaultValue={moment(timeTo.timeOption, 'HH:mm')}
          disabled={!isEventModalEditable}
          format="HH:mm"
          {...timeTo}
          minuteStep={15}
        />
      </div>
      <textarea
        {...eventDescriptionValue}
        className="w-4/5 h-20 outline-none border-none m-2.5 ml-0"
        disabled={!isEventModalEditable}
      ></textarea>
      <div className="w-full flex justify-end mb-[15px] gap-5 cursor-move control-buttons">
        <Button
          type="primary"
          onClick={updateEventHandler}
          disabled={!isEventModalEditable}
        >
          Update event
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => dispatch(makeEventDetailsModalEditable())}
          disabled={!isEventModalEditable}
        >
          Cancel
        </Button>
      </div>
    </EventDetailsModalLayout>
  );
};
