import Image from 'next/image';
import { useState, useEffect } from 'react';
import NewsPages from './NewsSection';
import Teams from './Team';



const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [
    '/fm1.jpg',
    '/fm3.jpg',
    '/img3.jpg',
    '/img1.jpg'
    // Add more images as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);
  return (
    <>
   <div
  style={{
    backgroundImage: `url(${backgrounds[bgIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '85vh', 
    width: '180vh',
    position: 'relative',
    borderRadius: '10px',
    border: '10px solid green',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    padding: '10px',
    '@media (max-width: 768px)': {
      height: '50vh', 
    },
    '@media (max-width: 576px)': {
      height: '40vh', 
    },
  }}
/>


      
      <div className="container content-space-1">
    {/* Heading */}

    {/* End Heading */}
       <div className='container'>
          <NewsPages />
        </div>
    {/* End Row */}
    {/* Info */}
    
    {/* End Info */}
  </div>
      {/* Team */}
      <div className='container'>
          <Teams />
        </div>
      
      <div class='fm-frequencies'>
  <div class='fm-frequency'><p><span> Tune in </span>9.7 FM Mombasa || 97.1 Malindi || 91.7 Kilifi </p></div>
</div>
        
      
      {/* End Team */}

  <style jsx>{`
  .card-img{
          position: relative;
          top: 10;
          right: 10;
          bottom: 10;
          left: 10;
          width: 100%;
          height: 37vh;
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
          .fm-frequencies {
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
.fm-frequency{
  font-weight: bold;
  color: #333333;
}
        `}
        
  </style>
    </>

  );
};


export default Home;


