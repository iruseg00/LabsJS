import { SET_WEEK , SET_ODD_WEEK } from "../actionTypes/actionTypes";


export const initialState = 
{
  oddWeek:
  {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  },
  week:
  {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  },
  id: null
};


export default (state = initialState, action) => 
{
  switch (action.type) 
  {
    case SET_WEEK:
      let week = state.week;
      state.week = { ...week , ...action.payload }
      return state;
    case SET_ODD_WEEK:
      let oddWeek = state.oddWeek;
      state.oddWeek = { ...oddWeek , ...action.payload }
      return state; 
    default:
      return state;
  }
}    