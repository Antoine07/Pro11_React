import { Component, Fragment } from "react";

import "./App.css"; // local au composant
import Denomination from "./Denomination";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Denomination />
        <p>Hello React</p>
        <p>Hello React</p>
      </Fragment>
    );
  }
}

export default App;