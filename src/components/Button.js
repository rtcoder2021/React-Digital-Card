import React from "react";
import PropTypes from "prop-types";

const Button = ({ icon, label, primary }) => {
  const buttonClasses = `button ${primary ? "primary" : ""}`;

  return (
    <button className={buttonClasses}>
      {icon}
      {label}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool
};

export default Button;
