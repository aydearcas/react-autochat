import './Screen.css';
import Message from '../Message/Message.js';

const Screen = ({messages}) => {

  return (
    <div className="Screen">
      {messages.map(message => <Message text={message}/>)}
    </div>
  );
}

export default Screen;