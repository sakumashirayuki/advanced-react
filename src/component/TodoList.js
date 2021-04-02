import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";

import TodoListUI from "./TodoListUI";
import { changeInput, addItem } from "./store/action"

import "../style.css";
import "antd/dist/antd.css";

const selectInputValue = state=>state.inputValue;
const selectList = state=>state.list;

function TodoList() {
  // const [state, setState] = useState({ inputValue: "", list: [] });
  const inputValue = useSelector(selectInputValue);
  const list = useSelector(selectList);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/items")
  //     .then((res) => {
  //       setState({
  //         inputValue: "",
  //         list: res.data,
  //       });
  //     })
  //     .catch(() => alert("error"));
  // }, []);

  const handleInputChange = function (e) {
    dispatch(changeInput(e));
  };

  const handleBtnClick = function () {
    dispatch(addItem());
  };

  // const handleItemDelete = useCallback(function (index) {
  //   setState((prevState) => {
  //     console.log(index);
  //     const list = [...prevState.list];
  //     list.splice(index, 1);
  //     console.log(list);
  //     return { ...prevState, list };
  //   });
  // });

  return (
    <TodoListUI 
      inputValue={inputValue}
      list={list}
      handleInputChange={handleInputChange}
      handleBtnClick={handleBtnClick}
    />
  );
}

export default TodoList;
