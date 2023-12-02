import PropTypes from "prop-types";

export default function AuthorName(props) {
  return (
    <div>
      <p>- {props.authorName}</p>
    </div>
  );
}

AuthorName.propTypes = {
  authorName: PropTypes.string.isRequired,
};
