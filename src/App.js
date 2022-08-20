import './App.css';
import {NavLink, Route, HashRouter as Router, Switch} from "react-router-dom";
import {mainRoutes} from "./router/routes";

function App() {
  return (
    <div className="App">
        <Router>
            <div className='flex justify-content-center gap-5 m-5'>
                {mainRoutes.map(({path,name}) => <NavLink key={path} to={path}>{name}</NavLink>)}
            </div>

            <Switch>
                {mainRoutes.map(({path, Component, exact},index) => {
                    return <Route key={index}  path={path} exact={exact} component={Component}/>
                })}
            </Switch>
        </Router>
    </div>
  );
}

export default App;
