import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <section>
      <div className="container py-5">
        <div className="row text-center align-items-end">
          <div
            className="col-lg-4 mb-5 mb-lg-0"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-white rounded-lg shadow customPriceCard1">
              <div className="p-5">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Basic</h1>
                <h2 className="h1 font-weight-bold">
                  ${props.price.price1}
                  <span className="text-small font-weight-normal ml-2">/ {props.price.validity}</span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-primary"></div>

                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Nam libero tempore</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Sed ut perspiciatis</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Sed ut perspiciatis</del>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn shadow rounded-lg"
                  style={{
                    color: "#fff",
                    background: "rgb(2, 0, 36)",
                    background:
                      "linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(60, 121, 9, 0.9756945014333859) 35%,\n    rgba(233, 255, 0, 1) 100%\n  )",
                  }}
                >
                  Select Plan &#8594;
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-white  rounded-lg shadow customPriceCard2">
              <div className="p-5 ">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                <h2 className="h1 font-weight-bold">
                  ${props.price.price2}
                  <span className="text-small font-weight-normal ml-2">/ {props.price.validity}</span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-primary"></div>

                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Nam libero tempore
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Sed ut perspiciatis</del>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn shadow rounded-lg"
                  style={{
                    color: "#fff",
                    background: "rgb(2, 0, 36)",
                    background:
                      "linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)",
                  }}
                >
                  Select Plan &#8594;
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-white rounded-lg shadow customPriceCard3">
              <div className="p-5 ">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Enterprise</h1>
                <h2 className="h1 font-weight-bold">
                  ${props.price.price3}
                  <span className="text-small font-weight-normal ml-2">/ {props.price.validity}</span>
                </h2>

                <div className="custom-separator my-4 mx-auto bg-primary"></div>

                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Nam libero tempore
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn shadow rounded-lg"
                  style={{
                    color: "#fff",
                    background: "rgb(2, 0, 36)",
                    background:
                      "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 121, 112, 1) 35%, rgba(0, 212, 255, 1) 100%)",
                  }}
                >
                  Select Plan &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
