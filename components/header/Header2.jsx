import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-six ${
        navbar ? "fixed" : ""
      }`}
      // style={{backgroundColor:"white"}}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <img
                src="/images/field/fieldLogo.png"
                alt=""
                width={220}
              />
            </Link>
          </div>
          {/* End logo */}
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="https://kspcs.powerappsportals.com/customer-landing/"
              target="_blank"
              className="start-btn-two fs-18 fw-500 tran3s position-relative d-none d-lg-block"
              style={{ backgroundColor: "#6A3197", color: "white" }}
            >
              Support Portal
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
