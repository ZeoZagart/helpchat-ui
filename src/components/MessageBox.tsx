import { useUser } from "../context/UserContext";
import { Message } from "../models/Message";

function MessageBox({senderId, content, timestamp}: Message) {
  const { user } = useUser();

  const isSelfMessage = senderId === user?.id;

  return (
    <div className={isSelfMessage ? 'text-left' : 'text-right'}>
      <div>{content}</div>
      <div>{timestamp.toISOString()}</div>
    </div>
  );
}

export default MessageBox;
