import {
  STATUSES_SUCCESS,
  STATUSES_REQUEST,
  STATUSES_ERROR,
} from "./constants";

export const requestStatuses = () => ({
  type: STATUSES_REQUEST,
});

export const requestStatusesSuccess = (statuses) => ({
  type: STATUSES_SUCCESS,
  payload: statuses,
});

export const requestStatusesError = (error) => ({
  type: STATUSES_ERROR,
  payload: error,
});
