import React, { useState, useRef, useEffect} from 'react';
import './App.css';
import { wait } from "@testing-library/user-event/dist/utils"
import axios from "axios"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  const [name, setName] = useState("")
  const [error, setError] = useState([])
  const formRef = useRef(null);
  const [isRegistered, setIsRegistered] = useState(false); // Состояние, отражающее успешность регистрации
  const [showScroll, setShowScroll] = useState(false);





  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  useEffect(() => {
    // Здесь должен быть запрос к API для получения информации о регистрации
    // Пример запроса к бэкенду
    axios.get('/registrationStatus')
      .then(response => {
        const registrationData = response.data; // Предполагается, что бэкенд возвращает информацию о статусе регистрации
        setIsRegistered(registrationData.isRegistered); // Обновляем состояние в соответствии с данными с бэкенда
      })
      .catch(error => {
        console.error("Ошибка при получении статуса регистрации:", error);
      });
  }, []);



  const onSubmit= async (ev) =>{
    ev.preventDefault()
    axios.post(`/createUser`)
      .then(({data})=>{
      })
              
    }

  const scrollToRegistration = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const appStyle = {
    fontFamily: "'Dela Gothic One', cursive",
  };

  return (
    <div className="App" style={{ fontFamily: "'Dela Gothic One', cursive" }}>
      <header className="App-header">
      <nav class="navbar navbar-expand ">
      <div class="container-fluid" style={{color: '#2C4a52', display: 'block', alignItems:'center'}}>
      <div class="navbar-nav " style={{display: "flex", justifyContent: 'space-between', width: 'max'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '400px', fontSize:'20px'}}>
            <a class="nav-link active" aria-current="page" href="#" style={{ color: '#F4EBDB' }}>О форуме</a>
            <a class="nav-link active" href="#" style={{ color: '#F4EBDB' }}>Описание</a>
            <a class="nav-link active" href="#" style={{ color: '#F4EBDB' }}>Программа</a>
          </div>
          
          <a class="navbar-brand" href="#" style={{ color: '#F4EBDB', display: "flex", flexDirection: "column", alignItems: 'center' }}>
            <span id="FontIcon" style={{ display: "block", textAlign: "center" }}>Super Geek</span>
            <span style={{ display: "block", textAlign: "center" }}>IT-форум</span>
          </a>

        <div style={{width: '400px', display: 'flex', justifyContent: "flex-end"}}>
          <button onClick={scrollToRegistration} id="buttonReg" style={{ color: '#F4EBDB', padding:'15px'}}>Регистрация</button>
        </div>
      </div>
    
  </div>
</nav>
      </header>
      <div class="Content" style={{ backgroundColor: '#F4EBDB' }}>
        <div>
        <div class='2023' style={{width:'200px'}}>
            <h1 style={{height:'200px',weight:'200px'}}>2023</h1>
            <h1>15-16 НОЯБРЯ</h1>
            <h1 style={{border:'3px solid #2C4A52'}}>ИТ Колледж Курган</h1>
          </div>
          <div class="Chel">
              <img src='logo_new 1.png' style={{height:'224px', width:'229px'}}></img>
              <div style={{height:''}}>
                <span id="FontIcon" style={{ display: "block" }}>Форум</span>
                <span style={{ display: "block" }}>IT-технологий</span>
              </div>
          </div>
        </div>
      <div ref={formRef} className='globalcont'>
      <div className='containerLeft'>
        <img src='wait_you.png' style={{width: '470px', height:'314px', display:'flex'}} class = 'img1'></img>
        <img src='group.png' style={{width:'175px', height:'256px'}} class='img2'></img>
      </div>
      <div className="containerRight">
      {isRegistered ? (
      <div className="row">
      <label htmlFor="exampleFormControlInput1" className="form-label"></label>
      </div>):(<div className="row">
      <label htmlFor="exampleFormControlInput1" className="form-label">Заполните форму</label>
      </div>)}
      {isRegistered ? (
            <><img src="http://www.w3.org/2000/svg" alt="Спасибо за регистрацию" /><i class="bi bi-check-circle"></i><div></div></>
          ) : (
            <><div className="mb-1 mt-3">
                  <input htmlFor="validationCustom01" type="text" className="form-control" id="alidationCustom01" placeholder="Фамилия" onChange={(e) => setName(e.target.value)} required />
                </div><div className="mb-1 mt-3">
                    <input htmlFor="validationCustom01" type="text" className="form-control" id="alidationCustom01" placeholder="Имя" onChange={(e) => setName(e.target.value)} required />
                  </div><div className="mb-2 mt-3">
                    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Отчество" />
                  </div><div className="mb-3 mt-3">
                    <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="@Email" />
                  </div><div className="mb-4 mt-1">
                    <input type="number" className="form-control" id="exampleFormControlInput4" placeholder="Номер телефона" />
                  </div>
                  <div className="mb-4 mt-1">
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Пароль" />
                  </div>
                  <div className="d-grid gap-2">
                    <button type='button' onClick={() => setIsRegistered(true)} class="btn btn" style={{ backgroundColor: '#2C4A52', color: '#F4EBDB' }}>Отправить</button>
                  </div></>
          )}
    </div>
    </div>
      </div>
      {showScroll && (
          <div
            onClick={scrollTop}
            style={{ position: 'fixed',
            bottom: '30px',
            left: '30px',
            cursor: 'pointer',
            borderRadius: '30%',
            border:'',
            backgroundColor: '#F4EBDB',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #2C4A52' }}
          >
            <i class="bi bi-arrow-up" style={{fontSize: '36px',color:'#2C4A52',display:'flex', alignItems: "center"}}></i>
          </div>
        )}
      <footer style={{ backgroundColor: '#2C4A52', color: '#F4EBDB',  bottom: '0', width: '100%', height:'101px' }}>
        <div style={{ textAlign: 'right' }}>
          <a href="ссылка1" style={{}} ><i class="bi bi-telegram"></i></a>
          <a href="ссылка2" ><i class="bi bi-instagram"></i></a>
          <a href="ссылка3" ><i class="bi bi-whatsapp"></i></a>
        </div>
    </footer>
    </div>
  );
}

export default App;
