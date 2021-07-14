import Main from './component/main'
import Login from './component/login'
import Auth from './auth/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Main"  component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
