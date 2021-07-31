import './App.css';
import Resume from './components/Resume'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/Resume">Resume</Link>
        <Switch>
          <Route exact path="/Resume"><Resume/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
