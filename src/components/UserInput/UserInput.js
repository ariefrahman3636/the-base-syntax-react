import React from 'react';
import './UserInput.css';

const userInput = props => {
    return (
        <div>
            <input 
                className="UserInput"
                type="text" 
                placeholder="Enter new uasername"
                onChange={props.changedUsername} 
                value={props.username} />
            <button 
                className="Button"
                onClick={props.switchButton} >Click me to switch</button>
        </div>
        );
    }

export default userInput;