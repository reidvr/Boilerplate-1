import React from "react";

import * as api from "../api/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "React App"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
