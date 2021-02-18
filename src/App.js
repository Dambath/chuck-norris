import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './containers/jokes/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/jokes' component={Main} /> 
      </Switch>
    </Router>
  )
}

export default App;
