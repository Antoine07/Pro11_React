import { Component } from "react";
// import Denomination from "./components/Denomination_Map";
import Denomination from "./components/Denomination";

import Container from "./Styles/Container";

class App extends Component {
  render() {
    return (
      <Container>
        <Denomination />
      </Container>
    );
  }
}

export default App;
