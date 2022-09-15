import React from 'react';

export const useTimePicker = (initialValue: any, required: boolean) => {
  const [timeOption, setTimeValue] = React.useState(initialValue);
  const [error, setError] = React.useState<string | null>(null);

  const timeHandler = (item: string) => {
    setTimeValue(
      `${('0' + new Date(item).getHours()).slice(-2)}:${
        new Date(item).getMinutes() < 10
          ? new Date(item).getMinutes() + '0'
          : new Date(item).getMinutes()
      }`
    );
    if (item === '' && required) setError('Required field');
    else setError(null);
  };

  return {
    timeOption,
    onSelect: (value: any) => timeHandler(value._d),
    error,
  };
};
