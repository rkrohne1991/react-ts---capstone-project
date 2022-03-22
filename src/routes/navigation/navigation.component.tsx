import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import classes from "./navigation.module.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation: React.FC = () => {
  return (
    <Fragment>
      <div className={classes["navigation"]}>
        <Link className={classes["logo-container"]} to="/">
          <CrwnLogo className={classes["logo"]} />
        </Link>
        <div className={classes["nav-links-container"]}>
          <Link className={classes["nav-link"]} to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
