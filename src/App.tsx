import React, {useMemo} from 'react';
import './App.css';
import {Route,  BrowserRouter, useLocation, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home'
import ReactDOM from "react-dom";
import {Col,Row} from 'react-grid-system';

function App() {

  const allRoutes = useMemo(
    () => {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/app" component={Home} />
            <Route component={() => <Redirect to={'/'} />} />
          </Switch>
        </BrowserRouter>
      )
    },
    []
  );

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div className="App-body">
          {allRoutes}
        </div>
      <footer>
       <p>Test Marvel por Alejandro Zú</p>
      </footer>
    </div>  
  );
}

ReactDOM.render(
    <App />,
  document.getElementById("root")
);

export default App;
