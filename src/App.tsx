import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import EnhancedTable from './components/ItemList'
// import Register from './components/Register'
import AddRole from './components/Roles/addNew';
import GetById from './components/Roles/getById';
import GetAllRoles from './components/Roles/getAll';
import LoginMain from './components/login';
import Logout from './components/logout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import UserCard from "./components/UserCard";
import Register from './components/Registration';
import AddList from './components/Lists/addNewList';
import GetAllList from './components/Lists/getAlllists';

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      

    
        <Router>
            <div>
                {/* <nav>
                    <ul>
                        <Link to="/Roles">Get All Roles</Link><span> </span>
                        <Link to="/AddRole">Add Role</Link><span> </span>
                        <Link to="/GetById">Get By ID</Link><span> </span>
                        <Link to="/EnhancedTable">EnhancedTable</Link><span> </span>
                        <Link to="/Login">Login</Link><span> </span>
                        
                    </ul>
                </nav> */}
                <Routes>
                <Route path='/Roles' element={< GetAllRoles />}></Route>
                <Route path='/AddRole' element={< AddRole />}></Route>
                <Route path='/GetById' element={< GetById />}></Route>
                <Route path='/EnhancedTable' element={< EnhancedTable />}></Route>
                <Route path='/Login' element={< LoginMain />}></Route>
                <Route path='/Logout' element={< Logout />}></Route>
                    <Route path='/Profile' element={< UserCard />}></Route>
                <Route path="" element={<>Welcome to the Food Mart :)</>}></Route>
                </Routes>
                
            </div>
        </Router>
     
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
