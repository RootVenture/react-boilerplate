// @flow
import React, { Component } from "react";
import gandalfGif from "../assets/gandalf.gif";

class Home extends Component<{}> {
  render = () => (
    <div>
      <img src={gandalfGif} alt="laughing gandalf" />
    </div>
  );
}

export default Home;
