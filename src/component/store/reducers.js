import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, FETCH_INIT_LIST } from "./action"

const defaultState = {
    inputValue: '',
	list: ['hello']
};

const todoReducer = (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.value
            };
        case ADD_TODO_ITEM:
            return {
                inputValue: '',
                list: [...state.list, state.inputValue]
            };
        case DELETE_TODO_ITEM:
            const newList = state.list.filter((item, index)=>index!==action.index)
            return {
                ...state,
                list: newList
            };
        case FETCH_INIT_LIST:
            return{
                inputValue: '',
                list: action.data
            }
        default:
            return state;
    }
}

export default todoReducer;