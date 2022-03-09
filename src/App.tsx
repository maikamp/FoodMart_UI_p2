import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import EnhancedTable from './components/ItemList'
// import Register from './components/Register'
import AddRole from './components/Roles/addNew';
import GetById from './components/Roles/getById';
import LoginMain from './components/login';
import GetAllRoles from './components/Roles/getAll';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     
     {/*<Register/>*/}
      <EnhancedTable></EnhancedTable>
        <AddRole/>
        <GetById/>
        <LoginMain/>
        <GetAllRoles/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit <code>src/App.tsx</code> and save to reload.
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
