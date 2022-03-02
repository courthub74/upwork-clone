import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Link, Redirect, Route } from 'react-router-dom';
import './index.css';


///////////////PAGES IMPORTS///////////////

//Main
import Main from './pages/main';

//Job Deets
import Deets from './pages/deets'

//Milestones
import Miles from './pages/milestones';

//Jobs
import Jobs from './pages/jobs';

function App() {

  ReactDOM.render(
    <>
      <Router>
        <Routes>
  
            {/* MAIN PAGE */}
            <Route exact path='/' element={<Main/>}/>
  
            {/* BEST MATCHES - FIND WORK */}
            <Route path='/details' element={<Deets/>}></Route>
  
            {/* MY JOBS */}
            <Route path='/jobs' element={<Jobs/>}></Route>
  
            {/* MOST RECENT */}
            <Route></Route>
  
            {/* SAVED JOBS */}
            <Route></Route>
  
            {/* JOB DEETS */}
            <Route></Route>
  
            {/* MILESTONES */}
            <Route path='/milestones' element={<Miles/>}></Route>
  
            {/* PROPOSAL */}
            <Route></Route>
  
            {/* CONTRACT */}
            <Route></Route>
  
            {/* REPORTS */}
            <Route></Route>
  
            {/* MESSAGES */}
            <Route></Route>
  
            {/* INSTANT MESSAGES */}
            <Route></Route>
  
        </Routes>
      </Router>
    </>,
    document.getElementById('root')
  );

}


export default App;
