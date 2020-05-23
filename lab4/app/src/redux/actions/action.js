import {
  SET_ODD_WEEK ,
  SET_WEEK ,
  SET_WEEKS ,
  READY_TO_SEND
} from "../actionTypes/actionTypes";

export const setOddWeek = (oddWeek) => ({
  type: SET_ODD_WEEK,
  payload: oddWeek
});

export const setWeek = (week) => ({
  type: SET_WEEK,
  payload: week
});

export const readyToSend = (ready) => ({
  type: READY_TO_SEND,
  payload: ready
});       