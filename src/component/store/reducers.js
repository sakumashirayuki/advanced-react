import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM } from "./action"

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
        default:
            return state;
    }
}

export default todoReducer;