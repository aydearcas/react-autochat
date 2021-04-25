import './MsgInput.css';

const MsgInput = ({value}) => {

  return (
      <input className="message-box" type="text" value={value} />
  )
}
export default MsgInput