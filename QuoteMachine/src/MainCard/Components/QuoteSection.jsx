import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./QuoteSection.css";

export default function QuoteSection(props) {
  return (
    <div>
      <p className="quote">
        <span className="quote__icon">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </span>
        {props.currentQuote}
      </p>
    </div>
  );
}

QuoteSection.propTypes = {
  currentQuote: PropTypes.string.isRequired,
};
