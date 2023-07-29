import React from 'react';

function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  const setValueHandler = (event) => setValue(event.target.value);

  return [value, setValueHandler];
}

export default useInput;
