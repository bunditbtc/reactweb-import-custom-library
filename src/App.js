import logo from './logo.svg';
import './App.css';
import { Button } from '@bunditbtc/template-react-component-button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const handleClick =(msg) =>{
    toast(msg, {
      position: "bottom-right",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <p>
        <div>
          <button className='fab-button' onClick={()=>handleClick("Heyyyyyy")}>Click</button>
          <Button onClick={()=>{handleClick("Hellllloooooo")}} className={'fab-button'} label='Call From NPM'/>          
        </div>
        <div>
        <ToastContainer />
        </div>
      </p>
    </div>
  );
}

export default App;
