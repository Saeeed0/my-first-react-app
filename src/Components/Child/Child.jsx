import { Component } from "react";
class Child extends Component {
  render() {
    const {
      productDetails: { id, count, code, category, price, sales },
      user,
      productIndex,
    } = this.props;
    return (
      <>
        <div className="col-3 px-3">
          <div className="bg-light position-relative p-2">
            <p>User Name: {user.name}</p>
            <p>User Age: {user.age}</p>
            <p>Id: {id}</p>
            <p>Count: {count}</p>
            <p>Code: {code}</p>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            {sales ? (
              <div className="position-absolute text-light bg-danger top-0 end-0">
                Sales
              </div>
            ) : (
              ""
            )}
            <button
              onClick={() => {
                this.props.onDeleteProduct(id);
              }}
              className="btn btn-outline-danger w-100  btn-sm"
            >
              Delete
            </button>
            <button
              onClick={() => {
                this.props.onUpdateProduct(productIndex, 1);
              }}
              className="btn btn-outline-info w-100  btn-sm"
            >
              +
            </button>
            <button
              onClick={() => {
                this.props.onUpdateProduct(this.props.productIndex, -1);
              }}
              className="btn btn-outline-info w-100  btn-sm"
            >
              -
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Child;
