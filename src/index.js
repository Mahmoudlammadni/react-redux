import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import redux_todo from "./redux/todo/todo_redux";
import App_todos from "./redux/todo/App_todos";

const store = legacy_createStore(redux_todo)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}><App_todos/></Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
