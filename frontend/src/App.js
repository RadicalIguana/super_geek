import React, { useState } from 'react';
import './App.css';
import { wait } from "@testing-library/user-event/dist/utils"
import axios from "axios"

function App() {
  const [name, setName] = useState("")
  const [error, setError] = useState([])
  
  const onSubmit= async (ev) =>{
    ev.preventDefault()
    axios.post(`/createUser`)
      .then(({data})=>{
      })
              
    }


  return (
    <div className="App">
      <header className="App-header">
      <nav class="navbar navbar-expand ">
      <div class="container-fluid" style={{color: '#2C4a52', display: 'block', alignItems:'center'}}>
      <div class="navbar-nav " style={{display: "flex", justifyContent: 'space-between', width: 'max'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '400px'}}>
            <a class="nav-link active" aria-current="page" href="#" style={{ color: '#F4EBDB' }}>О форуме</a>
            <a class="nav-link active" href="#" style={{ color: '#F4EBDB' }}>Описание</a>
            <a class="nav-link active" href="#" style={{ color: '#F4EBDB' }}>Программа</a>
          </div>
          
        <a id="FontIcon" class="navbar-brand" href="#" style={{ color: '#F4EBDB',display:"flex", justifyContent:'center', alignItems:'center'}}>Super Geek</a>
        <div style={{width: '400px', display: 'flex', justifyContent: "flex-end"}}>
          <button id="buttonReg" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ color: '#F4EBDB'}}>Регистрация</button>
        </div>
      </div>
    
  </div>
</nav>
      </header>
      <div class="Content" style={{ backgroundColor: '#F4EBDB' }}>
      <div className='globalcont'>
      <div className='containerLeft'>sad</div>
      <div className="containerRight">
      <div className="row">
      <label htmlFor="exampleFormControlInput1" className="form-label">Заполните форму</label>
      </div>
      <label style={{color:"#f8021e"}}></label>
        <div className="mb-1 mt-3">
          <input htmlFor="validationCustom01" type="text" className="form-control" id="alidationCustom01" placeholder="Фамилия" onChange={(e) => setName(e.target.value)} required/>
        </div>
      <label style={{color:"#f8021e"}}></label>
        <div className="mb-1 mt-3">
          <input htmlFor="validationCustom01" type="text" className="form-control" id="alidationCustom01" placeholder="Имя" onChange={(e) => setName(e.target.value)} required/>
        </div>
        <label style={{color:"#f8021e"}}></label>  
        <div className="mb-2 mt-3">
      <input type="text"  className="form-control" id="exampleFormControlInput2" placeholder="Отчество"/>
          </div>
      <label style={{color:"#f8021e"}}></label>     
          <div className="mb-3 mt-3">
      <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="@Email"/>
        </div>
      <label style={{color:"#f8021e"}}></label>   
        <div className="mb-4 mt-1">
      <input type="number" className="form-control" id="exampleFormControlInput4" placeholder="Номер телефона"/>
      </div>
      <div className="d-grid gap-2">
        <button type='button' class="btn btn" style={{backgroundColor:'#2C4A52',color:'#F4EBDB'}}>Отправить</button>
      </div>
    </div>
    </div>
      </div>
    </div>
  );
}

export default App;
