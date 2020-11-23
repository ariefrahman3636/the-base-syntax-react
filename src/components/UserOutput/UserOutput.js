import React from 'react';
import UserInput from '../UserInput/UserInput';
import './UserOutput.css';

const userOutput = props => {
    const style = {
        fontWeight: '600'
    }
    return (
        <div className="Output" >
            <p className="Paragraph">Hello There..</p>
            <p>I'm Learning React!</p>
            <p>My name is <span style={style}> {props.name} </span> and my hobbies is {props.hobbies}</p>
            <UserInput 
                changedUsername={props.changed}
                switchButton={props.switchName} />
        </div>
    );
}

export default userOutput;