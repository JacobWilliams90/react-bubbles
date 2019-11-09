import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage"

function App() {

  const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={props => {
      if (localStorage.getItem('token')) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login" />;
      }
    }} />;
  };

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubble-Page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;