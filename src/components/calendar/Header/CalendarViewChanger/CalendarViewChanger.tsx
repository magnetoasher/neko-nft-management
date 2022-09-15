import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeCalendarView } from '../../../../redux/actions/actionsUI';
import { selectCurrentCalendarView } from '../../../../redux/selectors';

export const CalendarViewChanger = () => {
  const dispatch = useDispatch();
  const currentCalendarView = useSelector(selectCurrentCalendarView);
  const changeViewHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeCalendarView(e.target.value!));
  };
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-black font-bold bg-white border-solid border-2 border-black rounded-md shadow-sm appearance-none"
        style={{ WebkitAppearance: 'listbox' }}
        onChange={changeViewHandler}
        value={currentCalendarView}
      >
        <option value="year">Annually</option>
        <option value="month">Monthly</option>
        <option value="day">Daily</option>
      </select>
    </div>
  );
};
