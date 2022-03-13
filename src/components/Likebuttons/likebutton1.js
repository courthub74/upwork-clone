import React from 'react';
import './likebuttons.css';


class Like1 extends React.Component {
    
    state = {
        display: false
    }

    toggle = () => {
        const currentStatus = this.state.display;
        this.setState({
            display: !currentStatus
        })
    }

    render() {
        let content = null;
        if(this.state.display){
            content=<h2>Liked!</h2>
        }
        return(
            <div>
                <button className='biggreen' onClick={this.toggle}>Like This Job{content}</button>
            </div>
        )
    }
}

export default Like1;