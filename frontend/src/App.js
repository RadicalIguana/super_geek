import React, { useState, useRef, useEffect} from 'react';
import './App.css';
import { wait } from "@testing-library/user-event/dist/utils"
import axios from "axios"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  const [error, setError] = useState([])
  const formRef = useRef(null);
  const [registrationStatus, setRegistrationStatus] = useState(0); // 0 - регистрация, 1 - успешно, 2 - не успешно
  const [showScroll, setShowScroll] = useState(false);

  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [thirdName, setThirdName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {


    const payload = {
      'first_name': firstName,
      'second_name': secondName,
      'third_name': thirdName,
      'email': email,
      'phone': phone,
      'password': password
    }

    axios.post('http://localhost:8000/register', payload)
    .then(res => {
      if (res.status === 200) {
        setRegistrationStatus(1)
      } else {
        setRegistrationStatus(2)
      }

      console.log(registrationStatus)
    })
  }

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



  // useEffect(() => {
  //   // Здесь должен быть запрос к API для получения информации о регистрации
  //   // Пример запроса к бэкенду
  //   axios.get('/registrationStatus')
  //     .then(response => {
  //       const registrationData = response.data; // Предполагается, что бэкенд возвращает информацию о статусе регистрации
  //       setIsRegistered(registrationData.isRegistered); // Обновляем состояние в соответствии с данными с бэкенда
  //     })
  //     .catch(error => {
  //       console.error("Ошибка при получении статуса регистрации:", error);
  //     });
  // }, []);

  const scrollToRegistration = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const appStyle = {
    fontFamily: "'Dela Gothic One', cursive",
  };

  return (
    <div>
    <div className="App" style={{ fontFamily: "'Dela Gothic One', cursive" }}>
      <header className="App-header">
        <nav className="navbar navbar-expand ">
          <div className="container-fluid" style={{color: '#2C4a52', display: 'block', alignItems:'center'}}>
            <div className="navbar-nav " style={{display: "flex", justifyContent: 'space-between', width: 'max'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', width: '400px', fontSize:'20px'}}>
                <a className="nav-link active" aria-current="page" href="#" style={{ color: '#F4EBDB' }}>О форуме</a>
                <a className="nav-link active" href="#" style={{ color: '#F4EBDB' }}>Описание</a>
                <a className="nav-link active" href="#" style={{ color: '#F4EBDB' }}>Программа</a>
              </div>
                  
              <a className="navbar-brand" href="#" style={{ color: '#F4EBDB', display: "flex", flexDirection: "column", alignItems: 'center' }}>
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
    </div>
      <div className="Content" style={{ backgroundColor: '#F4EBDB' }}>
        <div>
        <div className='2023'>
          <div className='TopContainer' style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <div class='2023' style={{width: '50%'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px', marginRight: '20px'}}>
                <h1 style={{fontFamily: "Dela Gothic One", height: 'fit-content'}}>2023</h1>
                <h1 style={{fontFamily: "Dela Gothic One", height: 'fit-content'}}>15-16 НОЯБРЯ</h1>
              </div>

              <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', margin: '20px', marginLeft: '0px'}}>
                <div style={{border: '3px solid #2C4A52', borderRadius: '40px', height: '70px', display: 'flex', flexDirection: 'column', paddingLeft: '10px', paddingRight: '10px'}}>
                  <h1 style={{fontFamily: "Dela Gothic One", fontSize: '20px', marginTop: '3px'}}>Молодежные форум</h1>
                  <h1 style={{fontFamily: "Dela Gothic One", fontSize: '20px'}}>IT-технологий</h1>
                </div>

                <div style={{border: '3px solid #2C4A52', height: '70px', display: 'flex', flexDirection: 'column', borderRadius: '30px', paddingLeft: '10px', paddingRight: '10px'}}>
                  <h1 style={{fontFamily: "Dela Gothic One", fontSize: '20px', marginTop: '7px', marginBottom: '0px'}}>ИТ Колледж</h1>
                  <h1 style={{fontFamily: "Dela Gothic One", fontSize: '20px'}}>Курган</h1>
                </div>
              </div>

              <div style={{width: '98%', height: '300px', border: '3px solid #2C4A52', borderRadius: '20px', display: 'flex', flexDirection: 'column'}}>
                <div style={{heigth: '100px', display: 'flex', height: '50%'}}>
                  <div style={{margin: 'auto'}}> 
                    <h1 style={{fontFamily: "Dela Gothic One"}}>10+ экспертов</h1>
                  </div>
                  <div style={{borderLeft: '3px solid #2C4A52'}}>

                  </div>
                  <div style={{margin: 'auto'}}>
                    <h1 style={{fontFamily: "Dela Gothic One"}}>5+ спикеров</h1>
                  </div>
                </div>

                <div style={{borderTop: '3px solid #2C4A52', width: '100%', margin: '0px'}}></div>

                <div style={{height: '50%', margin: 'auto'}}>
                    <h2 style={{marginTop: '50px', fontFamily: "Dela Gothic One"}}>Обсуждение актуальных тем</h2>
                </div>
              </div>

              </div>

            </div>

            <div className="Chel" style={{width: '50%'}}>
              <img src='chel.jpg'></img>
              <div class="Chel">
                  <img src='logo_new 1.png' style={{height:'224px', width:'229px'}}></img>
                  <div style={{height:''}}>
                    <span id="FontIcon" style={{ display: "block" }}>Форум</span>
                    <span style={{ display: "block" }}>IT-технологий</span>
                  </div>
              </div>
            </div>
          </div>
          
      <div ref={formRef} className='globalcont'>
      <div className='containerLeft'>
        { 
          registrationStatus === 0 ?
          (
            <p>Погрузитесь в мир IT!</p>
          )
          : registrationStatus === 1 ?
          (
            <p>ждем тебя на Super Geek!</p>
          )
          :
          (
            <p>Что-то пошло не так {'>'}:{'('}</p>
          )
        } 
        <img src='wait_you.png' style={{width: '470px', height:'314px', display:'flex'}} class = 'img1'></img>
        <img src='group.png' style={{width:'175px', height:'256px'}} class='img2'></img>
      </div>
      <div className="containerRight">
      { registrationStatus === 0 ? 
        (
          <div className="row">
            <label htmlFor="exampleFormControlInput1" className="form-label">Заполните форму</label>
          </div>
        ) 
      : registrationStatus === 1 ? 
        (
          <div className="row">
            <label htmlFor="exampleFormControlInput1" className="form-label">Спасибо за регистрацию</label>
          </div>
        )
      :
        (
          <div className="row">
            <label htmlFor="exampleFormControlInput1" className="form-label">Регистрация не прошла</label>
          </div>
        )
      }
      { 
      registrationStatus === 1 ? (
            <><img src="http://www.w3.org/2000/svg" alt="Спасибо за регистрацию" /><i className="bi bi-check-circle"></i><div></div></>
          ) : (
            <><div className="mb-1 mt-3">
                  <input htmlFor="validationCustom01" type="text" className="form-control" id="alidationCustom01" placeholder="Фамилия" onChange={(e) => setFirstName(e.target.value)} required />
                </div><div className="mb-1 mt-3">
                    <input htmlFor="validationCustom01" type="text" className="form-control" id="alidationCustom01" placeholder="Имя" onChange={(e) => setSecondName(e.target.value)} required />
                  </div><div className="mb-2 mt-3">
                    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Отчество" onChange={(e) => setThirdName(e.target.value)}/>
                  </div><div className="mb-3 mt-3">
                    <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="@Email" onChange={(e) => setEmail(e.target.value)}/>
                  </div><div className="mb-4 mt-1">
                    <input type="number" className="form-control" id="exampleFormControlInput4" placeholder="Номер телефона" onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                  <div className="mb-4 mt-1">
                    <input type="password" className="form-control" id="exampleFormControlInput4" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="d-grid gap-2">
                    <button type='button' onClick={handleSubmit} className="btn btn" style={{ backgroundColor: '#2C4A52', color: '#F4EBDB' }}>Отправить</button>
                  </div></>
          )}
          </div>
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
            <i className="bi bi-arrow-up" style={{fontSize: '36px',color:'#2C4A52',display:'flex', alignItems: "center"}}></i>
          </div>
        )}
      <footer style={{ backgroundColor: '#2C4A52', color: '#F4EBDB',  bottom: '0', width: '100%', height:'101px' }}>
        <div style={{ textAlign: 'right' }}>
          <a href="ссылка1" style={{}} ><i className="bi bi-telegram"></i></a>
          <a href="ссылка2" ><i className="bi bi-instagram"></i></a>
          <a href="ссылка3" ><i className="bi bi-whatsapp"></i></a>
        </div>
    </footer>
    </div>
    </div>
  );
}
export default App;
