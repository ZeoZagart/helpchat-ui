import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Card from '../components/Card';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(username, email, password);
    // Add your signup logic here
  };

  return (
    <div className="justify-center items-center">
      <Card>
        <TextField 
          value="Username" 
          name="username" 
          type="text" 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <TextField 
          value="Email" 
          name="email" 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextField 
          value="Password" 
          name="password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button onClick={handleSignup}>Sign Up</Button>
      </Card>
    </div>
  );
};

export default Signup;
