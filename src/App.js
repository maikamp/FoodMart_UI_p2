import './App.css';
import LoginMain from './components/login';
import GetAllRoles from './components/Roles/getAll';
import Navbar from './components/Navbar';
import AddRole from './components/Roles/addNew';
import GetById from './components/Roles/getById'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        
        

      </header>
      <main>
      {/* <Navbar></Navbar> */}
      <LoginMain name="Awaab" />
        <GetAllRoles />
        <AddRole/>
      <GetById/>
      </main>
    </div>
  );
}

export default App;
