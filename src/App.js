import './App.css';
import LoginMain from './components/login';
import GetAllRoles from './components/Roles/getAll';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        
        <LoginMain name="Awaab" />
        <GetAllRoles />

      </header>
      <main>
      {/* <Navbar></Navbar> */}
      </main>
    </div>
  );
}

export default App;
