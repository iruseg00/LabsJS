import {
    SET_SOME_LESSON ,
    SET_FIO ,
    SET_NAME ,
    SET_ROOM ,
    SET_ODD_WEEK ,
    SET_WEEK
} from "../actionTypes/actionTypes";

export const setSomeLesson = (day) => ({
    type: SET_SOME_LESSON,
    payload: day
  });

export const setFIO = (day) => ({
  type: SET_FIO,
  payload: day
});

export const setName = (day) => ({
  type: SET_NAME,
  payload: day
});

export const setRoom = (day) => ({
  type: SET_ROOM,
  payload: day
});

export const setOddWeek = (oddWeek) => ({
    type: SET_ODD_WEEK,
    payload: oddWeek
  });

export const setWeek = (week) => ({
  type: SET_WEEK,
  payload: week
});  
  
      