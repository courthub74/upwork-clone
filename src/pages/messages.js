import {React} from 'react';
import '../App.css';

function Messages(){
    return(
        <div className='messagearea'>
            <form className='messageform'>
            <h2>Write Message Here:</h2>
            <input placeholder='Message to: @'></input>
            <textarea></textarea>
            </form>

        </div>
    )
};

export default Messages;