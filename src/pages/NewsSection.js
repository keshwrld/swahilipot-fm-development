
const NewsPages = () => {
  return (
    <>

 <div className="w-lg-65 text-center mx-lg-auto mb-7">
      <h3>Explore all News</h3>
      <p className="fs-6"> </p>
 </div>
<div className="row mb-5 mb-sm-5">
<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
  {/* Card */}
  <a
    className="card card-lg card-transition bg-primary-dark"
    href="../blog-article.html"
    style={{ minHeight: "22rem" }}
  >
    <div className="card-body">
      <div className="mb-3">
      <h3>  <span className="badge bg-soft-light">Politics</span> </h3>
      </div>
      <h4 className="card-title text-white mb-5">
        State of product analytics report
      </h4>
      <span className="card-link link-light">
        Learn more <i className="bi-chevron-right small ms-1" />
      </span>
      <div className="position-absolute bottom-0 start-0 end-0 ">
        <img
          className="card-img "
          src="/ruto.jpg"
          alt="Image Description"
        />
      </div>
    </div>
  </a>
  {/* End Card */}
</div>
<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
  {/* Card */}
  <a
    className="card card-lg card-transition bg-primary-dark"
    href="../blog-article.html"
    style={{ minHeight: "22rem" }}
  >
    <div className="card-body">
      <div className="mb-3">
       <h3> <span className="badge bg-soft-light">Education</span> </h3>
      </div>
      <h4 className="card-title text-white mb-5">
      New Curriculum Revolutionizes Learning
      </h4>
      <span className="card-link link-light">
        Learn more <i className="bi-chevron-right small ms-1" />
      </span>
      <div className="position-absolute bottom-0 start-0 end-0">
        <img
          className="card-img"
          src="/MACHOGU.jpg"
          alt="Image Description"
        />
      </div>
    </div>
  </a>
  {/* End Card */}
</div>
{/* End Col */}
<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
  {/* Card */}
  <a
    className="card card-lg card-transition bg-primary-dark"
    href="../blog-article.html"
    style={{ minHeight: "22rem" }}
  >
    <div className="card-body">
      <div className="mb-3">
      <h3>  <span className="badge bg-soft-light">Music</span> </h3>
      </div>
      <h4 className="card-title text-white mb-5">
      The Evolution of Music
      </h4>
      <span className="card-link link-light">
        Learn more <i className="bi-chevron-right small ms-1" />
      </span>
      <div className="position-absolute bottom-0 start-0 end-0">
        <img
          className="card-img"
          src="/Music.jpg"
          alt="Image Description"
        />
      </div>
    </div>
  </a>
  {/* End Card */}
</div>
{/* End Col */}
<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
  {/* Card */}
  <a
    className="card card-lg card-transition bg-primary-dark"
    href="../blog-article.html"
    style={{ minHeight: "22rem" }}
  >
    <div className="card-body">
      <div className="mb-3">
       <h3> <span className="badge bg-soft-light">Sports</span> </h3>
      </div>
      <h4 className="card-title text-white mb-5">
      Team Clinches Championship Title
      </h4>
      <span className="card-link link-light">
        Learn more <i className="bi-chevron-right small ms-1" />
      </span>
      <div className="position-absolute bottom-0 start-0 end-0">
        <img
          className="card-img"
          src="/Mainoo.jpg"
          alt="Image Description"
        />
      </div>
    </div>
  </a>
  {/* End Card */}
</div>
<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
  {/* Card */}
  <a
    className="card card-lg card-transition bg-primary-dark"
    href="../blog-article.html"
    style={{ minHeight: "22rem" }}
  >
    <div className="card-body">
      <div className="mb-3">
       <h3> <span className="badge bg-soft-light">Youth</span> </h3>
      </div>
      <h4 className="card-title text-white mb-5">
      Young Innovators Lead the Way in Tech
      </h4>
      <span className="card-link link-light">
        Learn more <i className="bi-chevron-right small ms-1" />
      </span>
      <div className="position-absolute bottom-0 start-0 end-0">
        <img
          className="card-img"
          src="/African-Youth.jpg"
          alt="Image Description"
        />
      </div>
    </div>
  </a>
  {/* End Card */}
</div>
<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
  {/* Card */}
  <a
    className="card card-lg card-transition bg-primary-dark"
    href="../blog-article.html"
    style={{ minHeight: "22rem" }}
  >
    <div className="card-body">
      <div className="mb-3">
       <h3> <span className="badge bg-soft-light">Environment</span> </h3>
      </div>
      <h4 className="card-title text-white mb-5 position-bottom">
      Sustainable Materials: A Guide to Eco-Friendly Choices
      </h4>
      <span className="card-link link-light">
        Learn more <i className="bi-chevron-right small ms-1" />
      </span>
      <div className="position-absolute bottom-0 start-0 end-0">
        <img
          className="card-img"
          src="/ENV.jpg"
          alt="Image Description"
        />
      </div>
    </div>
  </a>
  {/* End Card */}
</div>
{/* End Col */}
</div>
<div className="text-center">
      <p className="mb-0">Want to read more?</p>
      <a className="link" href="/news">
        Explore all news here{" "}
        <i className="bi-chevron-right small ms-1" />
      </a>
    </div>
<style jsx>{`

  .card-img{
          position: relative;
          top: 10;
          right: 10;
          bottom: 10;
          left: 10;
          width: 100%;
          height: 42vh;
          object-fit: cover;
          filter: blur(0px); 
          z-index: -1; 
        }
          .card {
          position: relative;
          overflow: hidden;
          height: 300px; /* Adjust the height as needed */
          width: 300px;
        }
           .card-body {
          position: relative;
          z-index: 1; /* Ensure the text stays on top */
          width: 300px;
          
        } 
          .card-img-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Dark overlay to ensure text readability */
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* Align content to the bottom */
          padding: 1rem; /* Adjust padding as needed */
        }
          .fm-frequency {
  background-color: #9c9696;
  padding: 10px;
  border-radius: 5px;
  margin: 20px auto;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 5s ease-in-out infinite alternate;
  position: absolute;
  left: 40%;
  top: 80%;

}
.fm-frequency p span {
  font-weight: bold;
  color: #333333;
}
        `}
        
  </style>
</>

);
};
export default NewsPages;