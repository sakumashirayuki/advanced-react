import React, { Fragment } from "react";
import { Input, Button, List } from "antd";

const TodoListUI = function (props) {
  return (
    <Fragment>
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <h1>Hello!</h1>
        <Input
          placeholder="To do info"
          id="insertArea"
          className="input"
          value={props.inputValue}
          onChange={props.handleInputChange}
          style={{ width: "300px" }}
        />
        <Button type="primary" onClick={props.handleBtnClick}>
          提交
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", marginLeft: "10px", width: "300px" }}
        bordered
        dataSource={props.list}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Fragment>
  );
};

export default TodoListUI;