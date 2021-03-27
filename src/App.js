import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import MovieDetail from './components/moviedetail';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";


function App() {
  return (
    <Router>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:mname" render={(props) => <MovieDetail {...props} key={Date.now()}/>} />
      </Switch>
   </Router>
  );
}

export default App;
