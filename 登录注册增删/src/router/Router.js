import React, { Component } from 'react'
import {Redirect,Route,Switch} from "react-router-dom";
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
import Category from '../components/Category/Category';
import List from '../components/List/List';
import My from '../components/My/My';
export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/category" component={Category}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/my" component={My}></Route>
                <Redirect to="/login"></Redirect>
            </Switch>
        )
    }
}
