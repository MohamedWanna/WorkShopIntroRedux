import { createStore } from "redux";
import counterReducer from "./reducer/counterReducer";

const dvt= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(counterReducer,dvt)