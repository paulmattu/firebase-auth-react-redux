import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/index.css";
import App from "./components/App";

// SETTING UP REDUX STORE
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import firebase from "./services/firebase";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(reduxThunk))
);

const rrfConfig = {
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
