import React, { useState } from 'react';

import axios from 'axios';

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {

    let formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    axios.post('http://localhost:8000/login', 
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data"
        }
      }
    )
    .then(res => {
      console.log("Success" + res)
    })
    .catch(err => {
      console.log("Error" + err);
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
