import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Transfer from './components/Transfer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/transfer" component={Transfer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
