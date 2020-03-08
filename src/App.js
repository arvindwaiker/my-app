import React from 'react';
import './App.css';
import Welcome from './Welcome.js';
import Clock from './Clock.js'
import Toggle from './Toggle.js'
import Mailbox from './Mailbox.js'

function App() {
  let user = {
    firstname: "Arvind",
    lastname: 'Waiker'
  };
  const messages = ['React', 'Re: React', 'Re:Re: React'];

  return (
    <div className="App">
      <header className="App-header">
        <Welcome name={user.firstname}/>
        <Clock/>
        <Mailbox unreadMessages={messages} />
        <p>
          Built by {user.firstname + ' ' + user.lastname}!
        </p>
      </header>
    </div>
  );
}

export default App;
