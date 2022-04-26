import {
  USER_PROFILE_ERROR,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from "./constaints";

export const userProfileRequest = () => {
  return {
    type: USER_PROFILE_REQUEST,
  };
};

export const userProfileSuccess = (userPofile) => {
  return {
    type: USER_PROFILE_SUCCESS,
    payload: userPofile,
  };
};

export const userProfileError = () => {
  return {
    type: USER_PROFILE_ERROR,
  };
};
