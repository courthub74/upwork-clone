import React from 'react';
import '../App.css';

//Banner//
import Banner from '../components/Banner/banner';

//Jobs List//
import Joblist from '../components/Jobs/jobslist';

function Main(){
  return(
    <div className='mainbody'>
      <Banner/>
      <Joblist/>
    </div>
  )
}

export default Main;