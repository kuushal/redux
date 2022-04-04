import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import evenCounterReducer from "./reducers/evenCounterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    evenCounter: evenCounterReducer
})

export const store = createStore(rootReducer);



