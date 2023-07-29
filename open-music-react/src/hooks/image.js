/* eslint-disable indent */
import React from 'react';

function useInputImage(defaultValue) {
    const [value, setValue] = React.useState(defaultValue);
    const setValueHandler = (event) => setValue(event.target.files[0]);

    return [value, setValueHandler];
}

export default useInputImage;
