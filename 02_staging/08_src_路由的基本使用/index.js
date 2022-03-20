//引入react核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
//引入App
import App from './App'

//渲染App到当前页面上
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'))