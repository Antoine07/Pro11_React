import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import firebase from "firebase";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

// Configuration de store global de l'application
import configureStore from "./store/createStore";

const store = configureStore();

console.log(store.getState());

// firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1XUvnWqPTz7A5SOYC5_vQy8HngZ-lgP4",
  authDomain: "calculator-9721d.firebaseapp.com",
  projectId: "calculator-9721d",
  storageBucket: "calculator-9721d.appspot.com",
  messagingSenderId: "573067633359",
  appId: "1:573067633359:web:ae1e845b0240a54d0a0dba",
  measurementId: "G-2DBYYKB1G9"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseDatabaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
