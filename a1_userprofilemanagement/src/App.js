import './App.css';
import SignUp from './components/SignUp/SignUp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (

    <Router>
      <Switch>
        <Route path= '/signup' exact component= {SignUp}/>
      </Switch>
    </Router>
   
  );
}

export default App;

