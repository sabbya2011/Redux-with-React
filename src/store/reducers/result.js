import * as actionReport from '../actions/actionTypes';

const initialState = {
    result:[]
};
const reducer = (state=initialState,action) => {

    switch(action.type){
        case actionReport.STORE_RESULT:{
            return {
                ...state,
                result:state.result.concat({id:new Date(),val:action.payload})
            }
        }
        case actionReport.DELETE_RESULT:{
            const result = state.result.filter(item=>item.id!==action.payload);
            return {
                ...state,
                result
            }
        }
        default : return state;
    }
}
export default reducer;