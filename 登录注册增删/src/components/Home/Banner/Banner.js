import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import "swiper/css/swiper.css";

class Banner extends Component {
    
    render() {
        return (
            <div className="swiper-container banner-box">
                <div className="swiper-wrapper">
                    {
                        this.props.list.map((item,index)=>{
                            return (
                                <div className="swiper-slide" key={index}>
                                    <img src={item.pic} alt=""/>
                                </div>
                            )
                        })
                    }  
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
export default withRouter(Banner)