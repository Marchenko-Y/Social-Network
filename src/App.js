import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar state={props.state.navBarPage} />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <Dialogs {...props} state={props.state.dialogsPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              {...props}
              state={props.state.profilePage}
              addPost={props.addPost}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>

      {/* <Profile /> */}
    </div>
  );
};

export default App;
