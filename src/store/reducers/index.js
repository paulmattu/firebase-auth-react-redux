import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";

export default combineReducers({
  firebaseReducer,
  firestoreReducer,
  authReducer,
  apiStatusReducer
});
