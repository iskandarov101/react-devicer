
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react';

import Servislar from "./pages/Servislar/Servislar";
import Company from "./pages/Compony/Compony";
import Portfolio from "./pages/Portfolio/Portfolio";

import Header from './container/Header/Header';
// import Sidebar from './container/Sidebar/Sidebar';

import './assets/styles/main.scss'
function App() {

  const [sidebarState, setSidebarState ] = useState(false);

  return (
    <Router>
      <Header isOpened={sidebarState} sidebarState={sidebarState} setSidebarState={setSidebarState} />
      {/* <Sidebar  /> */}
      <Switch>
        <Route exact path='/' component={Servislar} />
        <Route path='/compony' component={Company} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
    </Router>

  );
}

export default App;
