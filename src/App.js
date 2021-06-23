import Login from './Login';
import Evantea from './Evantea';
import { HashRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="Login">
      <Switch>
     
     <Route exact path="/" component={Login}/>
     <Route exact path="/Evantea" component={Evantea}/>
     </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
