import Main from '../Main/Main';
import Contact from '../Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Router>
        <Switch>
         <Route path='/contact' component={Contact}/>
         <Route path='/' component={Main}/>
       </Switch>
     </Router>
    </>
  );
}

export default App;