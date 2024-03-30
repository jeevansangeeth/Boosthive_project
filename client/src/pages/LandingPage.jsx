import React from "react";
import logo from "../assets/images/hero-img.png";
import "../assets/css/index.css";
const LandingPage = () => {
  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center ">
              <p className="mb-3 para1">
                We offer modern solutions for growing your business
              </p>
              <br />
              <p className="para2">
                Accelerating startup growth with cutting-edge technological
                solutions tailored to your business needs.
              </p>
              <br />
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <a
                    href="/login"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Login</span>
                  </a>
                  <a
                    href="/register"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Register</span>
                  </a>
                </div>
                <div className="text-center text-lg-start"></div>
              </div>
            </div>
            <div className="col-lg-6 hero-img">
              <img src={logo} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
