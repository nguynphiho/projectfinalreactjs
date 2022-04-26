import {
  USER_PROFILE_ERROR,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from "./constaints";

const initState = {
  fetching: false,
  userProfile: null,
  errMsg: "",
};

const userProfileReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
        userProfile: payload,
      };
    case USER_PROFILE_ERROR:
      return {
        ...state,
        fetching: false,
        errMsg: payload,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
