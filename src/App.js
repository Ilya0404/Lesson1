
import { Form } from 'react-bootstrap';
import './App.css';
import Main from './Main'
import Two from './Two'
 
import {
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
<ul>
  <li> <Link to="/"> Main</Link> </li>
  <li> <Link to= "/two">two</Link> </li>
</ul>

<Switch>
  <Route exact path="/" component= {Main} />
  <Route path="/two" component= {Two} />
  <Redirect to="/" />
</Switch>
    </div>
  );
}

export default App;
