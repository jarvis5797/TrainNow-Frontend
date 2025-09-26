import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const DashBoard = () => {
  return <div className="w-screen min-h-screen flex flex-col">
    <Navbar/>
    <Main/>
    <Footer/>
  </div>;
};


export default DashBoard;