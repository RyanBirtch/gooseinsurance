import { SET_PRODUCTS, Action } from "../constants";

const initialState = {};

const productReducer = (state=initialState, action:Action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}

export default productReducer;