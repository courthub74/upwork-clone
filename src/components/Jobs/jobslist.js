import React from 'react';
import './joblist.css';

//job # 2
import Joblist1 from './joblist1';

//job #2
import Joblist2 from './joblist2';

//job #3
import Joblist3 from './joblist3';

//JOBLIST is on the same page as the main page

//Descript ----[leads to]---- jobnum ----[leads to]---- joblist

function Joblist(){
    return(
        <div>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            
            <Joblist1 />
            <Joblist2 />
            <Joblist3 />

        </div>
    )
}

export default Joblist;