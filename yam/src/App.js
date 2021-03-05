import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Container from "./Styles/Container";
import GlobalStyle from "./Styles/Global";

import Yam from './components/Yam';
import Stat from './components/Stat';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Styles/Nav";

const App = () => {
  const dispatch = useDispatch();

  return (
    <Router>
      <GlobalStyle />
      <Nav>
        <ul>
          <li>
            <Link to="/">Yam</Link>
          </li>
          <li>
            <Link to="/stat">Stat</Link>
          </li>
        </ul>
      </Nav>
      <Container>
        <Switch>
          <Route exact path="/">
            <Yam />
          </Route>
          <Route path="/stat">
            <Stat />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
