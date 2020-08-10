import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  {
    id: "todo-0",
    name: "在上方文本框输入您的待办事项，它将会添加到您的列表中",
    completed: false,
  },
  {
    id: "todo-1",
    name: "您可以打✔标记已完成的事项，它将被添加到完成类目下面",
    completed: true,
  },
  {
    id: "todo-2",
    name: "也可以点击条目下方的按钮选择重新编辑或者删除您的事项",
    completed: false,
  },
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
