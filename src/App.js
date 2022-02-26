// import logo from './logo.svg';
import './App.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <span className="App-logo">

        <i className="icon ico-reactjs App-logo-spin ico-9x"></i>
        </span>
        <p>
          Edit <code>src/App.js</code> and save to reload. <br />
          Tecnologías
        <i className="icon ico-html5"></i>
        <i className="icon ico-css3"></i>
        <i className="icon ico-js"></i>
        <i className="icon ico-sass"></i>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
