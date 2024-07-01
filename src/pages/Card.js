const Card = ({ image, title, category }) => (
    <div className="card card-lg card-transition bg-primary-dark" style={{ minHeight: "22rem" }}>
      <div className="card-body">
        <div className="mb-3">
          <h3><span className="badge bg-soft-light">{category}</span></h3>
        </div>
        <h4 className="card-title text-white mb-5">{title}</h4>
        <span className="card-link link-light">
          Learn more <i className="bi-chevron-right small ms-1" />
        </span>
        <div className="position-absolute bottom-0 start-0 end-0">
          <img className="card-img" src={image} alt="Card Image" />
        </div>
      </div>
    </div>
  );
  
  export default Card;