import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="container mb-5">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card bg-transparent border-info mt-4">
              <img
                src="https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398849/guitars/g6_oiizun.png"
                className="card-img-top p-4"
                alt="Stratocaster"
              />
              <div className="card-body m-auto">
                <Link to="/stratocaster" className="btn btn-primary">
                  Stratocaster
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-transparent border-info mt-4">
              <img
                src="https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398857/guitars/g7_gllkm5.png"
                className="card-img-top"
                alt="Flying V"
              />
              <div className="card-body m-auto">
                <Link to="/flying-v" className="btn btn-primary">
                  Flying V
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-transparent border-info mt-4">
              <img
                src="https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398799/guitars/g2_dddvtf.png"
                className="card-img-top p-3"
                alt="Les Paul"
              />
              <div className="card-body m-auto">
                <Link to="/les-paul" className="btn btn-primary">
                  Les Paul
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-transparent border-info mt-4">
              <img
                src="https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398778/guitars/g1_onfxwh.png"
                className="card-img-top p-1"
                alt="Les Paul"
              />
              <div className="card-body m-auto">
                <Link to="/explorer" className="btn btn-primary">
                  Explorer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
