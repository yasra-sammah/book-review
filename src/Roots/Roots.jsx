import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Roots = () => {
  return (
    <div>
       <div>
       <NavBar></NavBar>
       </div>
      <div className="my-6 mx-32">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Roots;