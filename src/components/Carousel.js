import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide w-75 m-auto"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398866/guitars/g8_x5uebd.png"
            className="d-block w-75 m-auto"
            alt="Imagen 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398857/guitars/g7_gllkm5.png"
            className="d-block w-75 m-auto"
            alt="Imagen 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398872/guitars/g9_bqwiro.png"
            className="d-block w-75 m-auto"
            alt="Imagen 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398778/guitars/g1_onfxwh.png"
            className="d-block w-75 m-auto"
            alt="Imagen 4"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
