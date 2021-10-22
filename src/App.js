import React from "react";
import Navbar from "./components/navbar";
import MyImages from "./pages/myImages";
import Upload from "./pages/upload";
import PublicImages from "./pages/publicImages";
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Switch>
          <Route path="/myimages">
            <MyImages />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/">
            <PublicImages />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
