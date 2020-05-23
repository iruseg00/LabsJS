import { READY_TO_SEND } from "../actionTypes/actionTypes";


export const initialState = 
{
    send: false
};



export default (state = initialState, action) => 
{
  switch (action.type) 
  {
    case READY_TO_SEND:
      return { send: true };
    default:
      return state;
  }
}    