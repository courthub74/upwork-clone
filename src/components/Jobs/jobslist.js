import React from 'react';
import './joblist.css';

//job # 2
import Joblist1 from './joblist1';

//job #2
import Joblist2 from './joblist2';

function Joblist(){
    return(
        <div>
            {/* for jobs in jobslist */}
            {/* print jobs */}
            
            <Joblist1 />
            <Joblist2 />

            
        </div>
    )
}

export default Joblist;