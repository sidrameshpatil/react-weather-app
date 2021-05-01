import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      
      <Router>
          <Nav />
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/weather/:woeid">
              <Weather />
          </Route>
      </Router>
       
    </div>
  );
}

export default App;
