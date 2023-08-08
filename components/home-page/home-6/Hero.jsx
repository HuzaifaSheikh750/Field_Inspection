import Link from "next/link";
import { useState } from "react";
import Main from "../../../components/home-page/home-6/Hero";

const Hero = () => {
  return (
    <>
      <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150 " >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h2 className="tx-dark mb-20" style={{fontWeight:"bold"}}>What is KAISPE <br /><span style={{ color: "#6A3197" }}>Field Inspection App?</span></h2>
              <p className="text-lg tx-dark opacity-75 mb-0 lg-mb-20" style={{ fontSize: "20px", fontStyle: "" }}>
                 Field inspections play a crucial role in maintaining the optimal performance of business assets. These 
                 inspections involve regular activities to ensure compliance with health and safety standards, assess asset 
                 working conditions, and identify critical areas of improvement on-site. With the KAISPE Field Inspection 
                 app, organizations can inspect construction sites, infrastructure, manufacturing plants and machines, field 
                 equipment, roads, and public works, among others. 
              </p>
              </div>
              {/* <div className="bg-wrapper " style={{ marginTop:"70px", width:"70%", textAlign:"center", margin:"auto auto"}}>
              <img
                src="/images/field/dashboard.png"
                alt="media"
                className="lazy-img main-screen w-100"
              />
            </div> */}
          </div>
          {/* <div
            className="illustration-holder position-relative mt-120 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
          </div> */}
        </div>
      </div>

      <div className="hero-banner-two position-relative pt-100 lg-pt-200 md-pt-150 dashboard" >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
               <div className="bg-wrapper " style={{ marginTop:"0px", width:"70%", textAlign:"center", margin:"auto auto"}}>
               <img
                src="/images/field/dashboard.png"
                alt="media"
                className="lazy-img main-screen w-100"
              />
            </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
