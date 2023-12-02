import PropTypes from "prop-types";
import "./MainCard.css";
import QuoteSection from "./Components/QuoteSection";
import AuthorName from "./Components/AuthorName/AuthorName";

export default function MainCard(props) {
  return (
    <div className="main_card">
      <QuoteSection currentQuote={props.currentQuote} />
      <AuthorName authorName={"Peter Farmer"} />
      <button
        className="btn"
        onClick={props.handleButtonClick}
        style={{ backgroundColor: props.currentColour }}
      >
        Click me!
      </button>
    </div>
  );
}

MainCard.propTypes = {
  currentColour: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  currentQuote: PropTypes.string.isRequired,
};
