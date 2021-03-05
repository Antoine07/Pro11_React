import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Denomination from './components/Denomination';

import denomination from './reducers/denomination'

const store = createStore(denomination);

export default class App extends Component {

  render() {
    return (
        <Provider store={store} >
          <Denomination />
        </Provider>
    );
  }
}