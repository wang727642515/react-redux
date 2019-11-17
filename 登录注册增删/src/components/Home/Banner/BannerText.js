import React, { Component } from 'react'

export default class BannerText extends Component {
    
    render() {
        return (
            <div className="swiper-container bannerText-box">
            <div className="swiper-wrapper content-box">
                {
                    this.props.list.map((item,index)=>{
                        return (
                            <div className="swiper-slide text" key={index}>
                               {item.text}
                            </div>
                        )
                    })
                }  
            </div>
        </div>
        )
    }
}
