import { useState } from "react";
import Child from "../Child/Child";
function Parent({ products, onDeleteProduct, onUpdateProduct }) {
  const [user, setUser] = useState({
    name: "Ali",
    age: 25,
  });

  return (
    <>
      <div className="container">
        <div className="bg-primary p-4">
          <h4 className="text-center">Parent</h4>
          <div className="row g-3">
            {products.map((product, index) => (
              <Child
                productIndex={index}
                onDeleteProduct={onDeleteProduct}
                onUpdateProduct={onUpdateProduct}
                user={user}
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

export default Parent;
