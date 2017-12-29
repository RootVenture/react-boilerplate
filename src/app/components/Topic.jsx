// @flow
import React from "react";
import { Helmet } from "react-helmet";

type Props = {
  match: { params: { topicId: string } }
};

const Topic = ({ match }: Props) => (
  <div>
    <Helmet>
      <title>Helmet Topic</title>
    </Helmet>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Topic;
