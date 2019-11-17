import React, { Component } from 'react'
import Axios from 'axios';
import Tab from "../Tab/Tab";
import BScroll from "better-scroll";
export default class List extends Component {
    constructor(){
        super();
        this.state={
            currentPage:1,
            list:[]
        }
    }
    componentDidMount(){
        Axios.post("/pagination",{page:this.state.currentPage,count:10}).then(res=>{
            /* console.log(res.data) */
            this.setState({
                list:res.data.list
            })
        })
        let bs=new BScroll(".wrapper",{
            pullDownRefresh:true,
            pullUpLoad:true
        })
        bs.on("pullingDown",()=>{
            Axios.post("/pagination",{page:this.state.currentPage+1,count:10}).then(res=>{
                this.setState({
                    list:res.data.list,
                    currentPage:this.state.currentPage+1
                },()=>{
                    bs.finishPullDown()
                    bs.refresh()
                })
            })
           
        })
        bs.on("pullingUp",()=>{
            Axios.post("/pagination",{page:this.state.currentPage+1,count:10}).then(res=>{
                this.setState({
                    list:[...this.state.list,...res.data.list],
                    currentPage:this.state.currentPage+1
                },()=>{
                    bs.finishPullUp()
                    bs.refresh()
                })
            })
            bs.finishPullDown()
            bs.refresh()
    })
    }
    render() {
        return (
            <div className="list-box">
                <div className="main">
                    <div className="wrapper">
                    <div className="content">
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <div className="scroll-item-box" key={index}>
                                        <div className="imgs">
                                            <img src={item.pic} alt=""/>
                                        </div>
                                        <div className="content">
                                            <p className="title">{item.title}</p>
                                            <p className="text">{item.text}</p>
                                            <p className="time">{item.time}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
                <Tab></Tab>
            </div>
        )
    }
}
