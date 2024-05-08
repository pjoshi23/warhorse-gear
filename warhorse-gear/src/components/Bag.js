import PropTypes from "prop-types";
import React from "react";
import "../style.css";

export const Bag = ({ property1, className }) => {
  return (
    <div className={`bag ${property1} ${className}`}>
      {property1 === "empty" && <img className="shopping-bag" alt="Shopping bag" src="../images/shopping-bag.png" />}

      {property1 === "notempty" && (
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="text-wrapper">0</div>
        </div>
      )}
    </div>
  );
};

Bag.propTypes = {
  property1: PropTypes.oneOf(["notempty", "empty"]),
};