import React, { Component } from "react";
import Header from "../Header/Header";
import Banner from "./Banner/Banner";
import BannerText from "./Banner/BannerText";
import Swiper from "swiper";
import Axios from 'axios';
import {Redirect} from "react-router-dom";
import Tab from "../Tab/Tab";
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            title:"首页",
            bannerList:[],
            bannerText:[]
        }
    }
    componentDidMount(){
        Axios.post("/banner").then(res=>{
            this.setState({
                bannerList:res.data.list
            })
        })
        Axios.post("/bannerText").then(res=>{
            this.setState({
                bannerText:res.data.list
            })
        })
    }
    componentDidUpdate(){
       
        new Swiper(".banner-box",{
            autoplay:true,
            loop:true,
            centeredSlides: false, // 选中slide居中显示
            initialSlide: 1, // 默认选中项索引
            slidesPerView: 1, // 自动匹配每次显示的slide个数,loop='auto'模式下，还需要设置loopedSlides
            effect: 'coverflow', // 切换效果-3d
            coverflowEffect: {
             rotate: 0,
             stretch: 10,
             depth: 160,
             modifier: 2,
             slideShadows: true
            },
            pagination: {
             el: '.swiper-pagination'
            }
        })
        new Swiper(".bannerText-box",{
            direction:"vertical",
            autoplay:true,
            loop:true
        })
    }
 
  render() {
    return (
      <div className="home-page">
        {
          localStorage.getItem("logined")&&
          <Redirect to="/home"></Redirect>
        }
        <div className="main">
        <Header back={<span onClick={()=>{this.props.history.go(-1)}}> &lt;返回 </span>} title={this.state.title} handClick={<span>操作</span>}></Header>
        <Banner list={this.state.bannerList}></Banner>
        <BannerText list={this.state.bannerText}></BannerText>
        </div>
        <Tab></Tab>
      </div>
    );
  }
}
