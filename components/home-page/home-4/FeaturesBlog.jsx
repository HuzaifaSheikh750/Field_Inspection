import Link from "next/link";
import articles from "../../../data/blog";

const FeaturesBlog = () => {
  return (
    <>
      {articles.slice(35, 41).map((article) => (
        <div
          className="col-xl-4 col-lg-4 col-md-6"
          key={article.id}
          data-aos="fade-up"
          data-aos-delay={article.delay}
    
        >
          <article
            className="blog-meta-two mt-30  shadow-lg p-3 mb-5 bg-white rounded"
            style={{
              border: "1px solid #eaeaea",
              borderRadius: "10px",
              minHeight: "600px",
              // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            }}
          >
            <div
              style={{
                backgroundColor: "#ECDCF9",
                padding: "30px",
                borderRadius: "10px",
                marginBottom: "10px",
              
              }}
            >
              <div className="icon rounded-circle m-auto d-flex align-items-center justify-content-center">
                <img
                  src={article.icon}
                  alt="icon"
                  className="lazy-img"
                  style={{ width: "30px", height: "30px", marginRight: "10px" }}
                />
                <h5 className="tran3s mt-2" style={{fontSize:"20px"}}>{article.title}</h5>
              </div>
              {/* <img src={article.icon} alt="icon" className="lazy-img" style={{width:"30px", height:"30px"}}/> 
                <h4 className="tran3s">{article.title}</h4>
             */}
            </div>
            <p
              className="fs-17 mb-35"
              style={{ textAlign: "start", paddingTop: "10px" }}
            >
              {article.description}
            </p>
          </article>
        </div>
      ))}
      {/* <div className="text-center xs-mt-40" style={{ marginTop: "50px" }}>
        <Link
          href="/Features"
          className="btn-twentyTwo fw-500 tran3s"
          data-aos="fade-up"
          style={{ backgroundColor: "#6A3195" }}
        >
          View All Features
        </Link>
      </div> */}
    </>
  );
};

export default FeaturesBlog;
