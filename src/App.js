import './App.scss';
import {NavLink, Route, HashRouter as Router, Switch} from "react-router-dom";
import {mainRoutes} from "./router/routes";
import {MainApp} from "./components/MainApp";
import {Header} from "./components/Header/Header";
import {items, menuItems} from "./localeBD/menuItems";
import HamburgerMenu from "./components/Header/Hamburger";
import React from "react";
import PerfectScrollBar from "./components/PerfectScrollBar/PerfectScrollBar";

function App() {
  return (
      <MainApp>
          <div className='App background-main'>
              <Router>
                  <Header items={menuItems}/>

                  <div className="flex flex-column flex-grow-1 relative" style={{width:'100%', height:'100%'}}>
                      <div className="absolute-full flex flex-column justify-content-center align-items-center overflow-hidden flex-grow-1">
                          <Switch>
                              {mainRoutes.map(({path, Component, exact},index) => {
                                  return <Route key={index}  path={path} exact={exact} component={Component}/>
                              })}
                          </Switch>
                      </div>
                  </div>

              </Router>
          </div>
      </MainApp>

  );
}

export default App;
