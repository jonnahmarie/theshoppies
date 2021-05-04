import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './components/Index';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={() => <Index />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
