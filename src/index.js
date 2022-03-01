import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Link, Redirect, Route } from 'react-router-dom';
import './index.css';


///////////////PAGES///////////////

//Main
import Main from './pages/main';

//Job Deets
import Deets from './pages/deets'

ReactDOM.render(
  <>
    <Router>
      <Routes>

          {/* MAIN PAGE */}
          <Route exact path='/' element={<Main/>}/>

          {/* BEST MATCHES - FIND WORK */}
          <Route path='/details' element={<Deets/>}></Route>

          {/* MY JOBS */}
          <Route></Route>

          {/* MOST RECENT */}
          <Route></Route>

          {/* SAVED JOBS */}
          <Route></Route>

          {/* JOB DEETS */}
          <Route></Route>

          {/* MILESTONES */}
          <Route></Route>

          {/* PROPOSAL */}
          <Route></Route>

          {/* CONTRACT */}
          <Route></Route>

          {/* REPORTS */}
          <Route></Route>

          {/* MESSAGES */}
          <Route></Route>

          {/* INSTANCES MESSAGES */}
          <Route></Route>

      </Routes>
    </Router>
  </>,
  document.getElementById('root')
);

