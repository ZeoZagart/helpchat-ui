import { useState } from 'react';
import MessageList from '../components/MessageList';
import InputArea from '../components/InputArea';
import { Message } from '../models/Message';

const dummyMessages = [
  { id: '1', conversationId: '123', senderId: 'AI', content: 'Hello, how can I assist you?', timestamp: '10:00' },
  { id: '2', conversationId: '123', senderId: 'User', content: 'I need some help.', timestamp: '10:01' },
];

function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);

  const sendMessage = (messageText: string) => {
    setMessages(prevMessages => [
      ...prevMessages, 
      {
        id: Math.random().toString(),
        senderId: 'User',
        conversationId: '123',
        content: messageText,
        timestamp: new Date().toISOString(),
        sent: false,
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full">
      <MessageList messages={messages}/>
      <InputArea onSend={sendMessage}/>
    </div>
  );
}

export default ChatScreen;
