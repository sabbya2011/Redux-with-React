import * as actionTypes from './actionTypes';
export const saveResult = (payload)=>{
    return {
        type:actionTypes.STORE_RESULT,
        payload
    }
}
export const storeResult = (payload)=>{
    return (dispatch,getState)=>{
        setTimeout(()=>{
            console.log("Get the current state before any modification "+getState().counter.counter);
            dispatch(saveResult(payload));
        },2000);
    }
}
export const deleteResult = (payload)=>{
    return {
        type:actionTypes.DELETE_RESULT,
        payload
    }
}