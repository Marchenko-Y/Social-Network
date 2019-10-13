import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;
