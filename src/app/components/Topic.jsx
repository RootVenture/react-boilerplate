// @flow
import React from "react";

type Props = {
  match: { params: { topicId: string } }
};

const Topic = ({ match }: Props) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Topic;
