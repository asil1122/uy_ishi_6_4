import { createStore } from "redux";
import { userReducer } from "./user/user-reducer";

export const store = createStore(userReducer);
