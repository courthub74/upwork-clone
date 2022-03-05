import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Link, Redirect, Route } from 'react-router-dom';
import './index.css';

///////////////NAVBAR IMPORT////////////////
import Navbar from './components/Nav/navbar';


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

//Messages
import Messages from './pages/messages';

//Footer
import Footer from './components/Footer/footer';

//Job Description 1
import Jobdescrip1 from './components/Jobs/jobdescript1';

import Jobone from './components/Jobs/jobone';
import Jobtwo from './components/Jobs/jobtwo';
import Jobdescrip2 from './components/Jobs/jobdescript2';

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
              <Route path='/jobdescrip' element={<Jobdescrip1/>}></Route>
              <Route path='/jobone' element={<Jobone/>}></Route>
              <Route path='/jobtwo' element={<Jobdescrip2/>}></Route>

    
              {/* MILESTONES */}
              <Route path='/milestones' element={<Miles/>}></Route>
    
              {/* PROPOSAL */}
              <Route></Route>
    
              {/* CONTRACT */}
              <Route></Route>
    
              {/* MESSAGES */}
              <Route path='/messages' element={<Messages/>}></Route>
    
              {/* REPORTS */}
              <Route path='/reports' element={<Reports/>}></Route>
    
              {/* INSTANT MESSAGES */}
              <Route></Route>
    
          </Routes>

          <Footer/>
        
      </Router>
    </>,
    document.getElementById('root')
  );

}


export default App;
