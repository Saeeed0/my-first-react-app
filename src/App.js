import { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Gallary from "./Components/Gallary/Gallary";
import Contacts from "./Components/Contacts/Contacts";
import Navbar from "./Components/Navbar/Navbar";
import Parent from "./Components/Parent/Parent";

export default class App extends Component {
  state = {
    products: [
      {
        id: 1,
        count: 29,
        code: "samsung",
        category: "mobile",
        price: 2300,
        sales: true,
      },
      {
        id: 2,
        count: 29,
        code: "samsung",
        category: "mobile",
        price: 2300,
        sales: true,
      },
      {
        id: 3,
        count: 29,
        code: "samsung",
        category: "mobile",
        price: 2300,
        sales: true,
      },
      {
        id: 4,
        count: 29,
        code: "samsung",
        category: "mobile",
        price: 2300,
        sales: false,
      },
      {
        id: 5,
        count: 29,
        code: "samsung",
        category: "mobile",
        price: 2300,
        sales: true,
      },
      {
        id: 6,
        count: 29,
        code: "samsung",
        category: "mobile",
        price: 2300,
        sales: false,
      },
      {
        id: 7,
        count: 29,
        code: "samsung",
        category: "mobile",
        price: 2300,
        sales: true,
      },
      {
        id: 8,
        count: 29,
        code: "samsung",
        category: "mobile",
        price: 2300,
        sales: false,
      },
    ],
  };

  deleteProdcut = (prodId) => {
    // console.log(this);

    //Deep Copy
    let products = [...this.state.products];
    //Fileter
    products = products.filter((product) => prodId !== product.id);
    //setState
    this.setState({ products });
  };

  updateProduct = (prodIndx, step) => {
    let products = [...this.state.products];

    if (products[prodIndx].count + step >= 0) {
      products[prodIndx].count += step;
      this.setState({ products });
    }
  };

  render() {
    return (
      <>
        <h1>Hello! This is App</h1>
        <Navbar />
        <Home />
        <About />
        <Gallary />
        <Contacts />
        <Parent
          onDeleteProduct={this.deleteProdcut}
          onUpdateProduct={this.updateProduct}
          products={this.state.products}
        />
      </>
    );
  }
}
