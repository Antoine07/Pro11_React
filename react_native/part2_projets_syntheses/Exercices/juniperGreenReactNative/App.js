import React from 'react';
import Nav from './navigation/Nav';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import index from './reducers/index';
import thunk from 'redux-thunk'; // asynchrone pour le reset ou pour tout autre action asynchrone avec Redux

import { computerChoice } from './actions/action-type'; // middleware perso qui gère le jeu 
 
const store = createStore(
  index, applyMiddleware( thunk, computerChoice)
);



export default class App extends React.Component {
  render() {

    return (
      <Provider store={store} >
        <Nav />
      </Provider>
    )
  }
}