
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import ForgotPassword from './Components/ForgotPassword';
import Otp from './Components/Otp';
import ChangePassword from './Components/ChangePassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/Otp' element={<Otp />} />
          <Route path='/change' element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>







    </div>
  );
}

export default App;
