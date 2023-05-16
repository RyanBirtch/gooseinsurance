import { SET_USER, Action } from "../constants";

const initialState = {};

const userReducer = (state=initialState, action:Action) =>{
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;