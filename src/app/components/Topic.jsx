import React from "react";
import PropTypes from "prop-types";

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

Topic.propTypes = {
  match: PropTypes.shape({ params: PropTypes.object }).isRequired
};

export default Topic;
