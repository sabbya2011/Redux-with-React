import * as actionReport from '../actions/actionTypes';

const initialState = {
    counter:1
};
const reducer = (state=initialState,action) => {

    switch(action.type){
        case actionReport.INCREMENT:{
            return {
                ...state,
                counter:state.counter+1
            }
        }
        case actionReport.DECREMENT:{
            return {
                ...state,
                counter:state.counter-1
            }
        }
        case actionReport.ADD:{
            return {
                ...state,
                counter:state.counter+action.payload
            }    
        }
        case actionReport.SUBTRACT:{
            return {
                ...state,
                counter:state.counter-action.payload
            }
        }
        default : return state;
    }
}
export default reducer;