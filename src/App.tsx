import { Switch, Route } from '@modern-js/runtime/router';

import './App.css';
import Exception404 from './pages/exception/exception-404';
import Home from './pages/home/home';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <Home />
    </Route>
    <Route path="*">
      <Exception404 />
    </Route>
  </Switch>
);

export default App;
