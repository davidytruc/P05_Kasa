/* eslint-disable react/prop-types */

import star_active from "../assets/images/star_active.png";
import star_inactive from "../assets/images/star_inactive.png";

export default function Rating({ index, rating }) {

  return (
        <img
          src={index < rating ? star_active : star_inactive}
          alt={index < rating ? "Étoile active" : "Étoile inactive"}
          className="star"
        />
  )
}