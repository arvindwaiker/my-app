import React from 'react';
import './App.css';
import Welcome from './Welcome.js';
import Clock from './Clock.js'

function App() {
  let user = {
    firstname: "Arvind",
    lastname: 'Waiker'
  };

  return (
    <div className="App">
      <header className="App-header">
        <Welcome name={user.firstname}/>
        <Clock />
        <p>
          Built by {user.firstname + ' ' + user.lastname}!
        </p>
      </header>
    </div>
  );
}

export default App;
