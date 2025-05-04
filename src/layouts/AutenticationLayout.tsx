import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const AutenticationLayout = () => {
  document.body.classList.add("login-img");
  return (
    <Fragment>
      <div className="page">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default AutenticationLayout;
