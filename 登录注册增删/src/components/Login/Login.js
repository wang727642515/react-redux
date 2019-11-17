import React, { Component } from 'react'
import Axios from 'axios';
import {Redirect} from "react-router-dom";
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    handleUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    handlePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handleKeyUp=(e)=>{
        if(e.keyCode===13){
            Axios.post("/login",this.state).then(res=>{
                if(res.data.status===200){
                    alert(res.data.msg);
                    this.props.history.push("/home")
                }else{
                    alert(res.data.msg);
                    this.setState({
                        username:"",
                        password:""
                    })
                }
            })
        }
    }
    toLogin=(state)=>{
        Axios.post("/login",state).then(res=>{
            if(res.data.status===200){
                alert(res.data.msg);
                this.props.history.push("/home")
                //保存储存状态
                localStorage.setItem("logined",200)
            }else{
                alert(res.data.msg);
                this.setState({
                    username:"",
                    password:""
                })
            }
        })
    }
    render() {
        return (
            <div className="login-box">
                {
                    localStorage.getItem("logined")&&
                    <Redirect to="/home"></Redirect>
                }
                <div className="user-admin">
                    <input type="text" placeholder="请输入用户名" value={this.state.username} onChange={(e)=>{this.handleUsername(e)}}/>
                </div>
                <div className="user-admin">
                    <input type="text" placeholder="请输入密码" value={this.state.password} onKeyUp={(e)=>{this.handleKeyUp(e)}} onChange={(e)=>{this.handlePassword(e)}}/>
                </div>
                <div className="user-admin">
                    <input type="button"  value={"登录"} onClick={()=>{this.toLogin(this.state)}}/>
                </div>
            </div>
        )
    }
}
