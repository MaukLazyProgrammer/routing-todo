import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTodos from "./ListTodos";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<ListTodos />} />
        <Route path="/ListTodos/:listID" element={<ListTodos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
