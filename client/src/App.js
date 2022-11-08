import React from 'react';
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register'
import Login from './Components/Login';
import Userlist from './Components/Userlist';

function App() {
  return (
    <div className="App">
      <br/>
      <h1>MERN STACK PROJECT</h1>
      <br/>
      <div className='row'>
        <div className='col-md-6'>
          <Register/>
        </div>
        <div className='col-md-6'>
          <Login/>
        </div>
      </div>
      <br/>
      <br/>
      <div className="row justify-content-center">
        <div className='col-md-8'>
          <Userlist/>
        </div>
      </div>
    </div>
  );
}

export default App;
