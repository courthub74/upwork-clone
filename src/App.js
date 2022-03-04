import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Link, Redirect, Route } from 'react-router-dom';
import './index.css';

///////////////NAVBAR IMPORT////////////////
import Navbar from './components/navbar';


///////////////PAGES IMPORTS///////////////

//Login 
import Login from './pages/login';

//Main
import Main from './pages/main';

//Job Deets
import Deets from './pages/deets'

//Milestones
import Miles from './pages/milestones';

//Jobs
import Jobs from './pages/jobs';

//Most Recent
import Recent from './pages/mostrecent';

//Reports
import Reports from './pages/reports';

function App() {

  ReactDOM.render(
    <>
      <Router>
        <Navbar/>
          <Routes>

              {/* LOGIN PAGE */}
              <Route exact path='/login' element={<Login/>}></Route>
    
              {/* MAIN PAGE -- When app is selected in production it will redirect to login page */}
              <Route exact path='/' element={<Main/>}/>
    
              {/* BEST MATCHES - FIND WORK */}
              <Route path='/details' element={<Deets/>}></Route>
    
              {/* MY JOBS */}
              <Route path='/jobs' element={<Jobs/>}></Route>
    
              {/* MOST RECENT */}
              <Route path='/recent' element={<Recent/>}></Route>
    
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
              <Route path='/reports' element={<Reports/>}></Route>
    
              {/* INSTANT MESSAGES */}
              <Route></Route>
    
          </Routes>
        
      </Router>
    </>,
    document.getElementById('root')
  );

}


export default App;
