import { Message } from '../models/Message';
import MessageBox from './MessageBox';
import { VStack } from './containers/Stack';

interface MessageListProps {
  messages: Message[];
}

function MessageList({messages}: MessageListProps) {
  return (
    <VStack>
      {messages.map((message) => (
        <MessageBox key={message.id} {...message} />
      ))}
    </VStack>
  );
}

export default MessageList;
