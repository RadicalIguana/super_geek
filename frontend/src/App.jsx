import React, { useState } from 'react';

import axios from 'axios';

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    axios.post('http://localhost:8000/login', {
      'username': username,
      'password': password
    })
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
