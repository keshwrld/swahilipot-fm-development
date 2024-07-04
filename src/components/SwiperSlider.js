import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
      <div className="swiper-slide d-flex flex-row ">
        <div className="col-md-4">
          {/* Images */}
          <div
            className="d-none d-md-block bg-img-center h-100"
            style={{
              backgroundImage: "url(../assets/img/900x700/img4.jpg)"
            }}
          />
          <div className="d-md-none">
            <img
              className="img-fluid"
              src="../assets/img/900x700/img4.jpg"
              alt="Image Description"
            />
          </div>
          {/* End Images */}
        </div>
        {/* End Col */}
        <div className="col-md-8">
          {/* Blockquote */}
          <figure className="ps-md-5 py-5 content-space-md-3">
            <img
              className="mb-5"
              src="../assets/svg/brands/forbes-primary.svg"
              alt="Logo"
              style={{ maxWidth: "7rem" }}
            />
            <blockquote className="blockquote">
              “ Truly great template and great costumer support. Very precise
              documentation with many features well explained. ”
            </blockquote>
            <figcaption className="blockquote-footer">
              Matt Powers
              <span className="blockquote-footer-source">
                Director of Sales | Forbes
              </span>
            </figcaption>
          </figure>
          {/* End Blockquote */}
        </div>
        {/* End Col */}
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-slide d-flex flex-row">
        <div className="col-md-4">
          {/* Images */}
          <div
            className="d-none d-md-block bg-img-center h-100"
            style={{
              backgroundImage: "url(../assets/img/900x700/img4.jpg)"
            }}
          />
          <div className="d-md-none">
            <img
              className="img-fluid"
              src="../assets/img/900x700/img4.jpg"
              alt="Image Description"
            />
          </div>
          {/* End Images */}
        </div>
        {/* End Col */}
        <div className="col-md-8">
          {/* Blockquote */}
          <figure className="ps-md-5 py-5 content-space-md-3">
            <img
              className="mb-5"
              src="../assets/svg/brands/forbes-primary.svg"
              alt="Logo"
              style={{ maxWidth: "7rem" }}
            />
            <blockquote className="blockquote">
              “ Truly great template and great costumer support. Very precise
              documentation with many features well explained. ”
            </blockquote>
            <figcaption className="blockquote-footer">
              Matt Powers
              <span className="blockquote-footer-source">
                Director of Sales | Forbes
              </span>
            </figcaption>
          </figure>
          {/* End Blockquote */}
        </div>
        {/* End Col */}
      </div>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
     ...
    </Swiper>
    <style>{`
       .mySwiper {
          width: 100%;
          height: 100vh;
        }
       .mySwiper.swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          /* Center slide text vertically */
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: auto;
        }
       .mySwiper.swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>

  );
}