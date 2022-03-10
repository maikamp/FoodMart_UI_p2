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
import UserCard from "./components/UserCard";
import Register from './components/Registration';
import AddList from './components/Lists/addNewList';
import GetAllList from './components/Lists/getAlllists';

function App() {
  return (
    <div className="App">

        <UserCard/>
      <Navbar></Navbar>

      <Register/>
      

     {/*<Register/>*/}
      <EnhancedTable></EnhancedTable>
        <AddRole/>
        <GetById/>
        <LoginMain/>
        <GetAllRoles/>
        <AddList/>
        <GetAllList/>


  
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
