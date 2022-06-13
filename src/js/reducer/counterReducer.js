import {  DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actionTypes/actionTypes";

const initialeState = {
    counter:0
};

const counterReducer = (state=initialeState,action) => { 
        switch(action.type){
            case INCREMENT_COUNTER: return {...state,counter:state.counter+1};
            case DECREMENT_COUNTER: return {...state,counter:state.counter&&state.counter-1};
            default : return state;
        }
 }



export default counterReducer;
