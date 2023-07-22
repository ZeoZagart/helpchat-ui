import { Message } from '../models/Message';
import MessageBox from './MessageBox';

interface MessageListProps {
  messages: Message[];
}

function MessageList({messages}: MessageListProps) {
  return (
      <div className="flex flex-col flex-grow overflow-y-auto">
      {messages.map((message) => (
        <MessageBox key={message.id} {...message} />
      ))}
    </div>
  );
}

export default MessageList;
