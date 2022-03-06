import React from 'react';
import './joblist.css';

//job # 2
import Joblist1 from './joblist1';

//job #2
import Joblist2 from './joblist2';

//job #3
import Joblist3 from './joblist3';

//job #4
import Joblist4 from './joblist4';

//job #5
import Joblist5 from './joblist5';

//job #6
import Joblist6 from './joblist6';

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

            <Joblist4 />

            <Joblist5 />

            <Joblist6 />

        </div>
    )
}

export default Joblist;