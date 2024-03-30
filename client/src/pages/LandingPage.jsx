import React from "react";
import logo from "../assets/images/hero-img.png";
import "../assets/css/index.css";
const LandingPage = () => {
  return (
    <div>
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center ">
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
                <div class="text-center text-lg-start">
                  <a
                    href="/login"
                    class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Login</span>
                  </a>
                  <a
                    href="/register"
                    class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Register</span>
                  </a>
                </div>
                <div class="text-center text-lg-start"></div>
              </div>
            </div>
            <div class="col-lg-6 hero-img">
              <img src={logo} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
