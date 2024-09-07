import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import PropTypes from "prop-types";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-item text-center">
      <div className="position-relative mb-5">
        <img
          className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
          src={props.imageUrl}
          alt=""
        />
        <div className="testimonial-icon">
          <FaQuoteLeft className="text-primary" />
        </div>
      </div>
      <p className="fs-5 fst-italic">{props.review}</p>
      <hr className="w-25 mx-auto" />
      <h5>{props.customerName}</h5>
    </div>
  );
};

TestimonialCard.propTypes = {
  imageUrl: PropTypes.string,
  review: PropTypes.string,
  customerName: PropTypes.array,
};

export default TestimonialCard;
