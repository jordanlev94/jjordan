import React from 'react' ;
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js'
import PageA from './components/PageA'
import PageB from './components/PageB'
import PageC from './components/PageC'
import PageD from './components/PageD'
import PageE from './components/PageE'
import PageF from './components/PageF'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pageview } from '@material-ui/icons';



function App() {
  

  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/PageA" exact component={PageA} />
        <Route path="/PageB" exact component={PageB} />
        <Route path="/PageC" exact component={PageC} />
        <Route path="/PageD" exact component={PageD} />
        <Route path="/PageE" exact component={PageE} />
        <Route path="/PageF" exact component={PageF} />

        <Route path="/*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
  }

export default App;
