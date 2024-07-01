// components/Slideshow.js
import styles from '../styles/Slideshow.module.css';

const cardsData = [
  { id: 1, category: 'Politics', title: 'State of product analytics report', image: '/ruto.jpg' },
  { id: 2, category: 'Education', title: 'New Curriculum Revolutionizes Learning', image: '/MACHOGU.jpg' },
  { id: 3, category: 'Music', title: 'The Evolution of Music', image: '/Music.jpg' },
  { id: 4, category: 'Sports', title: 'Team Clinches Championship Title', image: '/Mainoo.jpg' },
  { id: 5, category: 'Youth', title: 'Young Innovators Lead the Way in Tech', image: '/African-Youth.jpg' },
  { id: 6, category: 'Environment', title: 'Sustainable Materials: A Guide to Eco-Friendly Choices', image: '/ENV.jpg' },
  // Duplicate the data to make the loop seamless
  { id: 7, category: 'Politics', title: 'State of product analytics report', image: '/ruto.jpg' },
  { id: 8, category: 'Education', title: 'New Curriculum Revolutionizes Learning', image: '/MACHOGU.jpg' },
  { id: 9, category: 'Music', title: 'The Evolution of Music', image: '/Music.jpg' },
  { id: 10, category: 'Sports', title: 'Team Clinches Championship Title', image: '/Mainoo.jpg' },
  { id: 11, category: 'Youth', title: 'Young Innovators Lead the Way in Tech', image: '/African-Youth.jpg' },
  { id: 12, category: 'Environment', title: 'Sustainable Materials: A Guide to Eco-Friendly Choices', image: '/ENV.jpg' },
];

const Slideshow = () => {
  return (
    <div className={styles.slideshow}>
      <div className={styles.slideTrack}>
        {cardsData.map(card => (
          <div className={styles.slide} key={card.id}>
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
              <a className="card card-lg card-transition bg-primary-dark" href="../blog-article.html" style={{ minHeight: "22rem" }}>
                <div className="card-body">
                  <div className="mb-3">
                    <h3><span className="badge bg-soft-light">{card.category}</span></h3>
                  </div>
                  <h4 className="card-title text-white mb-5">{card.title}</h4>
                  <span className="card-link link-light">
                    Learn more <i className="bi-chevron-right small ms-1" />
                  </span>
                  <div className="position-absolute bottom-0 start-0 end-0">
                    <img className="card-img" src={card.image} alt="Card Image" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
