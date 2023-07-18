import React, { useState } from 'react';
import Button from '../components/Button';
import TextField from '../components/TextField';

interface InputAreaProps {
  onSend: (message: string) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Pass the message to the parent component
    onSend(message);
    setMessage('');
  };

  return (
    <div className="flex">
      <TextField 
        name="message" 
        type="text" 
        value={message}
        onChange={(e) => setMessage(e.target.value)} 
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
};

export default InputArea;
