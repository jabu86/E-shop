import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faStarOfDavid,
} from "@fortawesome/free-solid-svg-icons";
const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {value >= 1 ? (
        <span>
          <FontAwesomeIcon icon={faStar} color={color} />
        </span>
      ) : value >= 0.5 ? (
        <span>
          <FontAwesomeIcon icon={faStarHalf} color={color} />
        </span>
      ) : (
        <span>
          <FontAwesomeIcon icon={faStarOfDavid} color={color} />
        </span>
      )}

      {value >= 2 ? (
        <span>
          <FontAwesomeIcon icon={faStar} color={color} />
        </span>
      ) : value >= 1.5 ? (
        <span>
          <FontAwesomeIcon icon={faStarHalf} color={color} />
        </span>
      ) : (
        <span>
          <FontAwesomeIcon icon={faStarOfDavid} color={color} />
        </span>
      )}

      {value >= 3 ? (
        <span>
          <FontAwesomeIcon icon={faStar} color={color} />
        </span>
      ) : value >= 2.5 ? (
        <span>
          <FontAwesomeIcon icon={faStarHalf} color={color} />
        </span>
      ) : (
        <span>
          <FontAwesomeIcon icon={faStarOfDavid} color={color} />
        </span>
      )}

      {value >= 4 ? (
        <span>
          <FontAwesomeIcon icon={faStar} color={color} />
        </span>
      ) : value >= 3.5 ? (
        <span>
          <FontAwesomeIcon icon={faStarHalf} color={color} />
        </span>
      ) : (
        <span>
          <FontAwesomeIcon icon={faStarOfDavid} color={color} />
        </span>
      )}

      {value >= 5 ? (
        <span>
          <FontAwesomeIcon icon={faStar} color={color} />
        </span>
      ) : value >= 4.5 ? (
        <span>
          <FontAwesomeIcon icon={faStarHalf} color={color} />
        </span>
      ) : (
        <span>
          <FontAwesomeIcon icon={faStarOfDavid} color={color} />
        </span>
      )}

      <span>{" "} {text && text} reviews</span>
    </div>
  );
};
Rating.defaultProps = { color: "#f8e825" };
export default Rating;
