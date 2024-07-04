import React from 'react';

const Music = () => {
  return (
    <div className="bg-soft-warning">
      <div className="container content-space-1 content-space-md-3">
        <h3 className="text-center mb-7">Explore Music Categories</h3>
        <div className="js-swiper swiper swiper-equal-height">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="card">
                <div className="card-body">
                  <img src="/img1" alt="Gospel Music" />
                  <h5>Gospel Music</h5>
                  <p>Uplifting and inspiring music for the soul</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card">
                <div className="card-body">
                  <img src="/img1" alt="Hip Hop Music" />
                  <h5>Hip Hop Music</h5>
                  <p>High-energy beats and rhymes that get you moving</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card">
                <div className="card-body">
                  <img src="/img1" alt="Pop Music" />
                  <h5>Pop Music</h5>
                  <p>Catchy melodies and hooks that stick in your head</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card">
                <div className="card-body">
                  <img src="/img1" alt="Rock Music" />
                  <h5>Rock Music</h5>
                  <p>High-energy riffs and powerful vocals that rock your world</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card">
                <div className="card-body">
                  <img src="/img1" alt="Classical Music" />
                  <h5>Classical Music</h5>
                  <p>Sophisticated and elegant music for the refined ear</p>
                </div>
              </div>
            </div>
          </div>
          <div className="js-swiper-pagination swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Music;