import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import TodoListUI from "./TodoListUI";
import { changeInput, addItem, deleteItem, getList } from "./store/action"

import "../style.css";
import "antd/dist/antd.css";

const selectInputValue = state=>state.inputValue;
const selectList = state=>state.list;

function TodoList() {
  const inputValue = useSelector(selectInputValue);
  const list = useSelector(selectList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);// only fetch once

  const handleInputChange = function (e) {
    dispatch(changeInput(e));
  };

  const handleBtnClick = function () {
    dispatch(addItem());
  };

  const handleItemDelete = function (index) {
    dispatch(deleteItem(index));
  };

  return (
    <TodoListUI 
      inputValue={inputValue}
      list={list}
      handleInputChange={handleInputChange}
      handleBtnClick={handleBtnClick}
      handleItemDelete={handleItemDelete}
    />
  );
}

export default TodoList;
