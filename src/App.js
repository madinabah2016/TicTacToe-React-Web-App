
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from './component/Welcome';
import Board from './component/Board';
import Board_Agent from "./component/Board_Agent";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome}></Route>
          <Route path="/multi" component={Board}></Route>
          <Route path="/single" component={Board_Agent}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
