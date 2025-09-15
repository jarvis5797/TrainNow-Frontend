import Footer from "../components/Footer"
import Hero from "../components/Hero";
import LoginCard from "../components/LoginCard";
import Navbar from "../components/Navbar"


const LandingPage = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Navbar/>
            <section className="flex flex-1 bg-gradient-to-r from-blue-50 to-white px-16 py-12">
                <Hero/>
                <LoginCard/>
            </section>
           <Footer/>
        </div>
    )
    
}

export default LandingPage;