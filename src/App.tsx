
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DashBoard from './pages/DashBoard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage cardString={"Login"}/>} />
        <Route path="/sign-up" element={<LandingPage cardString= {"SignUp"}/>} />
        <Route path="/otp-verification" element={<LandingPage cardString= {"Otp"}/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
