export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';

export const changeInput = (e) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value
    };
}

export const addItem = () => {
    return {
        type: ADD_TODO_ITEM
    };
}