import { useState } from "react";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      99,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

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
    onChange: async (event) => {
      try {
        const file = event.target.files[0];
        const image = await resizeFile(file);
        setValue(image);
        console.log(image);
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default useInput;
