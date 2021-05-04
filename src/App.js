import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Switch>
      <Route path="/" exact>
        <Users/>
      </Route>

      <Route path="/places/new" exact>
        <NewPlace/>
      </Route>

      <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;
