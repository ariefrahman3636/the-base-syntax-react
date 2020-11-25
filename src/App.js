import React, { Component } from 'react';
import UserOutput from './components/UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    listUsername: [
       { id: 'qwe1', username: 'Mark A', hobbies: 'Playing Video Games' },
       { id: 'asd2', username: 'Mark B', hobbies: 'Coding' }
    ],
    showState: true
}

switchHandler = (newName) => {
  this.setState( {
    listUsername: [
      { id: 'qwe1', username: newName, hobbies: 'Coding' },
      { id: 'asd2', username: 'Mark A', hobbies: 'Playing Video Games' }
   ]
  })
}

nameChangeHandler = (event) => {
  this.setState( {
    listUsername: [
      { id: 'qwe1', username: event.target.value, hobbies: 'Playing Video Games' },
      { id: 'asd2', username: 'Mark B', hobbies: 'Coding' }
    ]
  });
}

nameChangeHandlerTwo = (event) => {
  this.setState( {
    listUsername: [
      { id: 'qwe1', username: 'Mark A', hobbies: 'Playing Video Games' },
      { id: 'asd2', username: event.target.value, hobbies: 'Coding' }
    ]
  });
}

HobbiesChangeHandler = (event) => {
  this.setState( {
    listUsername: [
      { id: 'qwe1', username: 'Mark', hobbies: event.target.value },
      { id: 'asd2', username: 'Mark B', hobbies: 'Coding' }
    ]
  });
}

HobbiesChangeHandlerTwo = (event) => {
  this.setState( {
    listUsername: [
      { id: 'qwe1', username: 'Mark', hobbies: 'Playing Video Games' },
      { id: 'asd2', username: 'Mark B', hobbies: event.target.value }
    ]
  })
}

  render() {
    const style = {
      fontWeight: '600'
    }
    const helloStyle = {
      fontFamily: 'sans-serif',
      fontWeight: '600',
      paddingTop: '18px'
    }
    return (
      <div>
        <div className="App">
        <UserOutput
          name={this.state.listUsername[0].username} 
          hobbies={this.state.listUsername[0].hobbies}
          changed={this.nameChangeHandler}
          switchName={this.switchHandler.bind(this, 'Mark C')} />
        <div className="ParagraphTwo" >
          <p style={helloStyle}>Hello There..</p>
          <p>I'm Learning React!</p>
          <p>My name is <span style={style}> {this.state.listUsername[1].username} </span> 
            and my hobbies is {this.state.listUsername[1].hobbies}</p>
          <input 
            className="InputTwo"
            type="text" 
            placeholder="Enter new username"
            onChange={this.nameChangeHandlerTwo}
            value={this.props.username} />
        </div>
        </div>
        <div className="InputHobbies">
        <p style={helloStyle}>Change the hobbies here.</p>
        <input 
          className="Input"
          type="text" 
          placeholder="Enter new Hobbies"
          onChange={this.HobbiesChangeHandler}
          value={this.props.hobbies} />
        <input 
          className="Input"
          type="text" 
          placeholder="Enter new Hobbies"
          onChange={this.HobbiesChangeHandlerTwo}
          value={this.props.hobbies} />
        </div>
        <button 
          className="SwitchButton"
          onClick={this.switchHandler.bind(this, 'Mark B')}>Switch</button>
      </div>
    );
  }
}

export default App;