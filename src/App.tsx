
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage isLogin={true}/>} />
        <Route path="/sign-up" element={<LandingPage isLogin= {false}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
