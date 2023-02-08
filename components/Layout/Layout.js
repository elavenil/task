import React, { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
