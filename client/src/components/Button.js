import PropTypes from "prop-types";

const Button = ({ color, text, onAdd, showAdd }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onAdd}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "add",
  color: "steelblue",
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
