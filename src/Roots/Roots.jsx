import { Outlet } from "react-router-dom";


const Roots = () => {
  return (
    <div>
      <div className="my-6 mx-20">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Roots;