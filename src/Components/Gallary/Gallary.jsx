import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import salad from "../../Assets/Images/صور-تقديم-سلطة-خضراء-3.jpg";
class Gallary extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>Gallary Component</h2>
        <div className="row">
          <div className="col-2 ">
            <Link className=" d-block" to="">
              Web
            </Link>
            <Link className="d-block" to="Mobile">
              Mobile
            </Link>
          </div>
          <div className="col-8 ">
            <Outlet></Outlet>
          </div>
        </div>

        <img src={salad} alt="salad" width={300} />
      </>
    );
  }
}

export default Gallary;
