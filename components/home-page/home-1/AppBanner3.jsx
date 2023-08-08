import Link from "next/link";

const AppBanner = () => {
    const features = [
      "Real-time Collaboration",
      "Project and Job Management ",
      "Location Tracking and Smart Routing ",
      "Time Logging for Jobs ",
      "Report Generation",
      "Report Distribution",
    ];
  
    const buttons = [
      {
        // platform: "Google play",
        icon: "images/field/app_store.png",
        className: "windows-button",
      },
      {
        // platform: "App store",
        icon: "images/field/google_play.png",
        className: "ios-button",
      },
    ];
  
    return (
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="block-style-seven wow fadeInLeft">
            <div className="title-style-one">
              {/* <div className="sc-title text-uppercase">MOBILE APP</div> */}
              <h3 className=" fw-500 tx-dark m0" style={{fontSize:"40px"}}>
              Experience the key Features of
              <span style={{color:"#6A3195", fontWeight:"bold"}}> KAISPE </span> Field Inspection App
              </h3>
            </div>
            <p className="fs-20 pt-30 pb-30 lg-pb-20">
            Simplify your field inspections with KAISPE's user-friendly app 
            </p>
            <ul className="style-none list-item">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {/* End list */}
  
           
            <div className="ms-auto text-center text-lg-start">
            <Link
              href="/Features"
              className="btn-twentyTwo fw-500 tran3s"
              style={{ backgroundColor: "#6A3197", marginTop: "40px" }}
            >
              Read More
            </Link>
          </div>
            {/* /.platform-button-group-three */}
          </div>
          {/* /.block-style-seven */}
        </div>
        {/* End col-6 */}
  
        <div className="col-lg-6 wow fadeInRight">
          <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80" style={{width:"100%"}}>
            <img
              src="images/field/inspection.png"
              alt=""
              width={600}
              className="lazy-img main-img ms-auto"
            />
            {/* <img
              src="images/final_image_3.png"
              alt=""
              className="lazy-img screen-two"
            /> */}
            {/* <img
              src="images/shape/shape_139.svg"
              alt=""
              className="lazy-img shapes shape-one"
            />
            <img
              src="images/shape/shape_140.svg"
              alt=""
              className="lazy-img shapes shape-two"
            /> */}
          </div>
          {/* /.illustration-holder */}
        </div>
      </div>
    );
  };
  
  export default AppBanner;
  