import { Component } from "react";
import Style from "./About.module.css";
export default class About extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 style={{ textAlign: "center" }} className={`${Style.red} ${Style.size}`}>
          About Component
        </h2>
        <h2 className="dark">About Component</h2>
        
      </>
    );
  }
}
