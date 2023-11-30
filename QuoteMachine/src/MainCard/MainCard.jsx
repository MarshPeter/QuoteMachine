import PropTypes from "prop-types";
import "./MainCard.css";

export default function MainCard(props) {
  return (
    <div className="main_card">
      <button onClick={props.handleColourChange}>Click me!</button>
    </div>
  );
}

MainCard.propTypes = {
  handleColourChange: PropTypes.func,
};
