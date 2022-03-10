import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import EnhancedTable from './components/ItemList'
// import Register from './components/Register'
import AddRole from './components/Roles/addNew';
import GetById from './components/Roles/getById';
import GetAllRoles from './components/Roles/getAll';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7cea8497ca32ed872c30250ca1da283b8e403cda
import LoginMain from './components/login';
import Logout from './components/logout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
<<<<<<< HEAD

=======
import UserCard from "./components/UserCard";
import Register from './components/Registration';
import AddList from './components/Lists/addNewList';
import GetAllList from './components/Lists/getAlllists';
>>>>>>> 93afb5f5a45ed660bcf1de71ef09e0f5232d4fcb
=======
import UserCard from "./components/UserCard";
>>>>>>> 7cea8497ca32ed872c30250ca1da283b8e403cda

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      

     {/*<Register/>*/}
      {/* <EnhancedTable></EnhancedTable> */}
        {/* <AddRole/>
        <GetById/>
        <LoginMain/>
        <GetAllRoles/>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7cea8497ca32ed872c30250ca1da283b8e403cda
        <RoleMain/> */}
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
     
<<<<<<< HEAD
=======
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
>>>>>>> 93afb5f5a45ed660bcf1de71ef09e0f5232d4fcb
=======
>>>>>>> 7cea8497ca32ed872c30250ca1da283b8e403cda
    </div>
  );
}

export default App;
