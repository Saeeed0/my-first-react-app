import { Component } from "react";

export default class Home extends Component {
  state = {
    userName: "Saeed",
    productName: "Samsung N8",
    productPrice: 7000,
    darkStyle: "text-center bg-dark text-light",
  };
  welcome() {
    return `Welcome ${this.state.userName}`;
  }
  render() {
    return (
      <>
        <h2>Home Component</h2>
        <p>{this.welcome()}</p>
        <p className={this.state.darkStyle}>{this.state.productName}</p>
        <button className="btn btn-primary {this.state.darkStyle}">
          <i className="fas fa-download"></i> Download
        </button>
      </>
    );
  }
}
