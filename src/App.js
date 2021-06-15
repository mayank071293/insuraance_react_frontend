import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from './components/layout/Navbar';
import Policy from './components/pages/Policy';
import Reports from './components/pages/Reports';
import NotFound from './components/pages/NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/policy" component={Policy} />
          <Route exact path="/report" component={Reports} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
