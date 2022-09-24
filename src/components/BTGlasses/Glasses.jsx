import React, { Component } from "react";
import Body from "./Body";
import Header from "./Header";

// styleSheet
import "./style.css";

export default class Glasses extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}
