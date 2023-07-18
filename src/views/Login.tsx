import React, { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Card from '../components/Card';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(email, password);
    // Add your login logic here
  };

  return (
    <div className="justify-center items-center">
      <Card>
        <TextField 
          label="Email" 
          name="email" 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextField 
          label="Password" 
          name="password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
        />
		<Button onClick={handleLogin}>Login</Button>
      </Card>
    </div>
  );
}

export default Login;
