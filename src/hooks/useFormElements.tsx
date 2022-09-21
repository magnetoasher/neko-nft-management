import React, { useState, FocusEvent } from 'react';
import { TimePicker } from 'antd';

export const useInput = (initial: string, required: boolean) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState<string | null>(null);

  return {
    value,
    onBlur: (e: FocusEvent<HTMLInputElement>) => {
      if (!e.target.value && required) setError('Required field');
      else setError(null);
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
    error,
  };
};

export const useTextArea = (initial: string, required: boolean) => {
  const [value, setValue] = useState<string>(initial);
  const [error, setError] = useState<string | null>(null);

  return {
    value,
    onBlur: (e: FocusEvent<HTMLTextAreaElement>) => {
      if (!e.target.value && required) setError('Required field');
      else setError(null);
    },
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setValue(e.target.value),
    error,
  };
};

export const useTimePicker = () => {
  const [time, setTime] = React.useState('');

  const timeHandler = (item: any) => {
    let date = new Date(item._d);
    setTime(`${date.getHours()}:${date.getMinutes()}`);
  };

  const timePickerElement = (
    <div
      style={{ display: 'flex', justifyContent: 'space-between' }}
      className="selectTime-wrapper"
    >
      <TimePicker
        format="HH:mm"
        onSelect={(item) => timeHandler(item)}
        minuteStep={30}
      />
    </div>
  );
  return [{ time }, timePickerElement];
};
