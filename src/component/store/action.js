export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';
export const GET_INIT_LIST = 'get_init_list';
export const FETCH_INIT_LIST = 'fetch_init_list';

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

export const deleteItem = (index) => {
    return {
        type: DELETE_TODO_ITEM,
        index
    };
}

export const getList = () => {
    return {
        type: GET_INIT_LIST
    };
}

export const fetchInitList = (data) => {
    return {
        type: FETCH_INIT_LIST,
        data
    };    
}