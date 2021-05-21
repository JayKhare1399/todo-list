import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Todo from './components/Todo';

const App = () => (
  <Router>
    <Route path="/todo">
      <Todo />
    </Route>
  </Router>
);

export default App;
