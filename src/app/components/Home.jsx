// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import gandalfGif from "../assets/gandalf.gif";

class Home extends Component<{}> {
  renderHelmet = () => (
    <Helmet>
      <title>Helmet homepage</title>
      <meta name="description" content="It's the homepage hallelujah" />
    </Helmet>
  );

  render = () => (
    <div>
      {this.renderHelmet()}
      <img src={gandalfGif} alt="laughing gandalf" />
    </div>
  );
}

export default Home;
