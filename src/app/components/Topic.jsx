// @flow
import React from "react";
import { Helmet } from "react-helmet";

const renderHelmet = () => (
  <Helmet>
    <title>Helmet Topic</title>
    <meta name="description" content="It's Gandalf" />
  </Helmet>
);

type Props = {
  match: { params: { topicId: string } }
};

const Topic = ({ match }: Props) => (
  <div>
    {renderHelmet()}
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Topic;
