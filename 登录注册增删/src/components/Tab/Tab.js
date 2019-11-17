import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Tab extends Component {
    render() {
        return (
            <div className="tabBar">
                <Link to="/home">首页</Link>
                <Link to="/category">分类</Link>
                <Link to="/list">列表</Link>
                <Link to="/my">我的</Link>
            </div>
        )
    }
}
