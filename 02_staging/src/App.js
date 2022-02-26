//创建“外壳”组件App
//{Component}不是解构赋值，而是引入分别暴露的模块
import React,{Component} from "react";
import Hello from "./Components/Hello/Hello";
import Welcome from "./Components/Welcome/Welcome";

//创建并暴露App组件
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
           </div>
        )
    }
}