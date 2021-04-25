import './App.css';
import { useState } from 'react';
import Screen from './components/Screen/Screen.js';
import Message from './components/Message/Message.js';
import MsgInput from './components/MsgInput/MsgInput.js';
import SendButton from './components/SendButton/SendButton.js';

const App = () => {
  const [msgs, setMsgs] = useState([]);
  const [currentMsg, setCurrentMsg] = useState('');

  const handleSend = (event) => {
  currentMsg !== '' ? setMsgs(msgs.concat(currentMsg)) : setMsgs(msgs);
  console.log(msgs);
  }

  const handleOnChange = event => {
    setCurrentMsg(event.target.value);
    console.log(currentMsg);
  }

  return (
    <div className="App">
      <Screen messages={msgs} />
      <input onChange={handleOnChange} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;
