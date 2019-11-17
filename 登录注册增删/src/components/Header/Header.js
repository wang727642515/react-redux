import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
        
    };
  }
  render() {
    return (
      <div className="header-box">
        <div className="back-box">{this.props.back}</div>
        <div className="title-box">{this.props.title}</div>
        <div className="more-box">{this.props.handClick}</div>
      </div>
    );
  }
}
