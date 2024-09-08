import React from "react";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials from "../../../data/testimonials";
import TestimonialCard from "../../common/TestimonialCard";
import styles from "./TestimonialSection.module.css";

const TestimonialsSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.testimonial__section}>
      <div className="container-fluid py-3" id="testimonial">
        <div className="container-fluid py-3">
          <Typography variant="h2" className="section-title">
            Testimonials
          </Typography>
          <div className="row justify-content-center my-4">
            <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.5s">
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    imageUrl={testimonial.imageUrl}
                    review={testimonial.review}
                    customerName={testimonial.customerName}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
