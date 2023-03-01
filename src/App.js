import './App.css';
import { HomePage } from './components/Homepage/HomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div >
     <HomePage/>
      {/* <Register/> */}
      <Login/>
    </div>
  );
}

export default App;
