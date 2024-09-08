import React, { useEffect } from "react";
import Footer from "./Footer";

const MainLayout = (props) => {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element)
        element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <div>{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
