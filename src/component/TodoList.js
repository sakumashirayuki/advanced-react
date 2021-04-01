import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Input, Button, List } from "antd";
import axios from "axios";

import "../style.css";
import "antd/dist/antd.css";

function TodoList() {
  const [state, setState] = useState({ inputValue: "", list: [] });

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((res) => {
        setState({
          inputValue: "",
          list: res.data,
        });
      })
      .catch(() => alert("error"));
  }, []);

//   const getTodoItem = function () {
//     return state.list.map((item, index) => {
//       return (
//         <CSSTransition
//           timeout={1000}
//           classNames="fade"
//           unmountOnExit
//           onEntered={(el) => {
//             el.style.color = "blue";
//           }}
//           appear={true}
//         >
//           <TodoItem
//             key={index}
//             content={item}
//             index={index}
//             deleteItem={handleItemDelete}
//           />
//         </CSSTransition>
//       );
//     });
//   };

  const handleInputChange = function (e) {
    const value = e.target.value;
    console.log(value);
    setState((preState) => ({
      ...preState,
      inputValue: value,
    }));
  };

  const handleBtnClick = function () {
    setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: "",
    }));
  };

  const handleItemDelete = useCallback(function (index) {
    setState((prevState) => {
      console.log(index);
      const list = [...prevState.list];
      list.splice(index, 1);
      console.log(list);
      return { ...prevState, list };
    });
  });

  return (
    <Fragment>
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <h1>Hello!</h1>
        <Input
          placeholder="To do info"
          id="insertArea"
          className="input"
          value={state.inputValue}
          onChange={handleInputChange}
          style={{ width: "300px" }}
        />
        <Button type="primary" onClick={handleBtnClick}>
          提交
        </Button>
      </div>
      <List style={{ marginTop: "10px", marginLeft: "10px", width: "300px" }}
        bordered
        dataSource={state.list}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Fragment>
  );
}

export default TodoList;
