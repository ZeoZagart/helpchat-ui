import { useEffect, useState } from 'react';
import MessageList from '../components/MessageList';
import InputArea from '../components/InputArea';
import { Message } from '../models/Message';
import { useUser } from '../context/UserContext';
import {VStack} from "../components/containers/Stack.tsx";
import {Screen} from "../components/containers/Screen.tsx";

const dummyMessages = [
  { id: '1', conversationId: '123', senderId: 'AI', content: 'Hello, how can I assist you?', timestamp: new Date(Date.now()) },
  { id: '2', conversationId: '123', senderId: 'User', content: 'I need some help.', timestamp: new Date(Date.now() + 1000) },
];

function ChatScreen() {
  const {setUser} = useUser();

  useEffect(() => {
    setUser({id: 'User', name: 'User name', email: 'user@google.com'});
  });

  const [messages, setMessages] = useState<Message[]>(dummyMessages);

  const sendMessage = (messageText: string) => {
    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: Math.random().toString(),
        senderId: 'User',
        conversationId: '123',
        content: messageText,
        timestamp: new Date(Date.now()),
        sent: false,
      },
    ]);
  };

  return (
    <Screen>
      <VStack>
        <MessageList messages={messages}/>
        <InputArea onSend={sendMessage}/>
      </VStack>
    </Screen>
  );
}

export default ChatScreen;
