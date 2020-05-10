import { SET_WEEK } from "../actionTypes/actionTypes";


export const initialState = 
{
    week:
    {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: []
    }
};



export default (state = initialState, action) => 
{
  switch (action.type) 
  {
    case SET_WEEK:
      return { ...state, ...action.payload };
    default:
        return state;
  }
}    