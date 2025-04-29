import { Component } from "react";
import Child from "../Child/Child";
class Parent extends Component {
  state = {
    user: {
      name: "Ali",
      age: 25,
    },
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="bg-primary p-4">
            <h4 className="text-center">Parent</h4>
            <div className="row g-3">
              {/* <Child
                user={this.state.user}
                productDetails={this.state.products[0]}
              /> */}
              {this.props.products.map((product, index) => (
                <Child
                  productIndex={index}
                  onDeleteProduct={this.props.onDeleteProduct}
                  onUpdateProduct={this.props.onUpdateProduct}
                  user={this.state.user}
                  key={product.id}
                  productDetails={product}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Parent;
