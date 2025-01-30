/* eslint-disable react/prop-types */

import starActive from "../assets/images/star-active.png";
import starInactive from "../assets/images/star-inactive.png";

export default function Rating({ rating }) {
  const totalStars = 5

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? starActive : starInactive}
          alt={index < rating ? "Étoile active" : "Étoile inactive"}
          className="star"
        />
      ))}
    </div>
  );
}