import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav class="navbar navbar-expand ">
      <div class="container-fluid" style={{color: '#2C4a52', display: 'block', alignItems:'center'}}>
      <div class="navbar-nav " style={{display: "flex", justifyContent: 'space-between', width: 'max'}}>
        <div style={{display: 'flex'}}>
            <a class="nav-link active" aria-current="page" href="#" style={{ color: '#F4EBDB' }}>О форуме</a>
            <a class="nav-link active" href="#" style={{ color: '#F4EBDB' }}>Описание</a>
            <a class="nav-link active" href="#" style={{ color: '#F4EBDB' }}>Программа</a>
          </div>
          
        <a id="FontIcon" class="navbar-brand" href="#" style={{ color: '#F4EBDB',display:"flex", justifyContent:'center', alignItems:'center'}}>Super Geek</a>
        <button id="buttonReg" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ color: '#F4EBDB', right:'0' }}>Регистрация</button>
        
      </div>
    
  </div>
</nav>
      </header>
      <div class="Content" style={{ backgroundColor: '#F4EBDB' }}></div>
    </div>
  );
}

export default App;
