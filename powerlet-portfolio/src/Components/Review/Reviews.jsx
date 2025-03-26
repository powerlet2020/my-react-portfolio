import React from "react";
import "./Reviews.css"; // Assuming you have a CSS file for styling
import R_male1 from "../../assets/R-male1.jpg";
import R_male2 from "../../assets/R-male2.jpg";
import R_female from "../../assets/R-female.jpg";

const reviews = [
  {
    img: R_male1,
    alt: "John Doe",
    text: "Amazing work! Highly recommended for professional projects.",
    stars: "★★★★★",
    author: "- John Doe, CEO of TechCorp"
  },
  {
    img: R_female,
    alt: "Sarah Smith",
    text: "A truly skilled developer who understands the needs of the client.",
    stars: "★★★★☆",
    author: "- Sarah Smith, Project Manager"
  },
  {
    img: R_male2,
    alt: "Mark Wilson",
    text: "Excellent communication and top-notch coding skills!",
    stars: "★★★★★",
    author: "- Mark Wilson, Freelancer"
  }
];

const Reviews = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <h2>
          What <span className="highlight">Clients say</span>
        </h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <img src={review.img} alt={review.alt} />
              <p>"{review.text}"</p>
              <div className="stars">{review.stars}</div>
              <h4>{review.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
