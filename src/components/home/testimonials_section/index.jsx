import React from "react";
//import styles from "./TestimonialsSection.module.css";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "../../../data/testimonials";
import TestimonialCard from "../../common/TestimonialCard";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fluid bg-light py-5 my-5" id="testimonial">
      <div className="container-fluid py-5">
        <h1
          className="display-5 text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          Testimonial
        </h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-left h-100">
              {testimonials.map((testimonial) => (
                <img
                  key={testimonial.id}
                  className="img-fluid wow fadeIn"
                  data-wow-delay={testimonial.delay}
                  src={testimonial.imgSrc}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="testimonial-item text-center"
                >
                  <div className="position-relative mb-5">
                    <img
                      className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                      src={testimonial.imageUrl}
                      alt=""
                    />
                    <div className="testimonial-icon">
                      <FaQuoteLeft className="text-primary" />
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">{testimonial.review}</p>
                  <hr className="w-25 mx-auto" />
                  <h5>{testimonial.customerName}</h5>
                  <span>{testimonial.profession}</span>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-right h-100">
              {testimonials.map((testimonial) => (
                <img
                  key={testimonial.id}
                  className="img-fluid wow fadeIn"
                  data-wow-delay={testimonial.delay}
                  src={testimonial.imgSrc}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
