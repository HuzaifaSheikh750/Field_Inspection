import Image from "next/image";
import HeroBtnGroup from "../home-7/HeroBtnGroup";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="OuLl6YTAQjY"
        // https://www.youtube.com/watch?v=M9CNNbq7AHY
        onClose={() => setOpen(false)}
      />

      <div className="hero-banner-twelve pt-225 pb-120 lg-pb-80 md-pt-200 quote">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="text-wrapper" data-aos="fade-right">
                <h3
                  className="hero-heading fw-500 tx-dark field_title"
                  style={{ fontSize: "50px" }}
                >
                  Take Control of your Business Operations with
                </h3>
                <h3
                  className="hero-heading fw-500 tx-dark field_title"
                  style={{
                    fontSize: "60px",
                    color: "#6A3197",
                    fontWeight: "bold",
                  }}
                >
                  Field Inspection App
                </h3>
                <p className="text-md tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
                  This lightweight app simplifies the process of assigning
                  inspection tasks to field workers, tracking their time spent
                  on the job, and providing field service smart routing to the
                  inspection site using Bing or Google Maps.
                </p>

                {/* <div className="d-lg-flex align-items-center"> */}

                <div
                  className="d-sm-flex align-items-center btns"
                  style={{ marginTop: "50px" }}
                >
                  <div
                    className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
                    onClick={() => setOpen(true)}
                    role="button"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      borderColor: "black",
                      marginTop: "0px",
                    }}
                  >
                    <i
                      className="bi bi-play"
                      style={{
                        border: "1px solid black",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        fontSize: "32px",
                        paddingLeft: "10px",
                      }}
                    />
                    <div className="ps-3">
                      <span
                        className="d-block fs-15 text-uppercase"
                        style={{ textAlign: "start" }}
                      >
                        Watch
                      </span>
                      <strong
                        className="fs-18 fw-normal tx-dark d-block"
                        style={{ color: "black" }}
                      >
                        Intro Video
                      </strong>
                    </div>
                  </div>
                  <a
                    href="https://appsource.microsoft.com/en-us/product/dynamics-365/kaispellc.kspfiapp?tab=Overview"
                    target="_blank"
                    style={{ marginTop: "-20px", marginRight: "20px" }}
                  >
                    <img
                      src="/images/purchase/download.jpg"
                      alt="icon"
                      style={{
                        width: "150px",
                        height: "50px",
                        marginRight: "20px",
                        borderRadius: "5px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* End col-6 */}

            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 ms-auto text-end"
              data-aos="fade-left"
            >
              <div
                className="image-holder zn2 d-inline-block position-relative sm-mt-60"
                //  style={{position:"absolute"}}
              >
                <img
                  src="/images/field/fieldTablet.png"
                  alt="img"
                  className="lazy-img"
                  // style={{ marginLeft: "20px" }}
                  // style={{position:"relative", right:"-230px"}}
                />
              </div>
            </div>
            {/* End col-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;
