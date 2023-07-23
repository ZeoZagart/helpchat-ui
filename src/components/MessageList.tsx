import { Message } from '../models/Message';
import MessageBox from './MessageBox';
import { VStack } from './containers/Stack';
import { StackItem } from './containers/StackItem';

interface MessageListProps {
  messages: Message[];
}

function MessageList({messages}: MessageListProps) {
  return (
    <VStack overflow='scroll'>
      {messages.map((message) => (
        <StackItem flexType='shrink'>
          <MessageBox key={message.id} {...message} />
        </StackItem>
      ))}
    </VStack>
  );
}

export default MessageList;
