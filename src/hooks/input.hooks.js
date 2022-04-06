import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    onChange: (e) => {
      setValue(e.target.value);
    },
    reset: () => {
      setValue("");
    },
  };
};

export const useCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    onChange: (e) => {
      setValue(e.target.checked);
    },
    reset: () => {
      setValue(false);
    },
  };
};

export const useAvatar = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    onChange: (event) => {
      const file = event.target.files[0];
      file.preview = URL.createObjectURL(file);
      setValue(file);
    },
  };
};

export default useInput;
