import React from 'react';
import '../App.css';

//Jobs List//
import Joblist from '../components/Jobs/jobslist';

function Main(){
  return(
    <div className='mainbody'>
      <Joblist/>
    </div>
  )
}

export default Main;