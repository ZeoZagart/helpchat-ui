import { Message } from "../models/Message";

function MessageBox({senderId, content, timestamp}: Message) {
  return (
    <div className={senderId === 'AI' ? 'text-left' : 'text-right'}>
      <div>{content}</div>
      <div>{timestamp}</div>
    </div>
  );
}

export default MessageBox;
