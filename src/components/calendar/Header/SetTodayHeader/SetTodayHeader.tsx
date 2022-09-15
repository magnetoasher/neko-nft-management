import React from 'react';
import { useDispatch } from 'react-redux';

import { setToday } from '../../../../redux/actions/actionsCalendar';

export const SetTodayHeader = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="font-bold border-solid border-2 border-black rounded-md hover:bg-black hover:text-white px-6 py-3"
      onClick={() => dispatch(setToday())}
    >
      Today
    </button>
  );
};
