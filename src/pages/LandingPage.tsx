import Footer from "../components/Footer"
import Hero from "../components/Hero";
import LoginCard from "../components/LoginCard";
import Navbar from "../components/Navbar"
import SignupCard from "../components/SignupCard";
import type { LandingPageProps } from "../interfaces/landing";


const LandingPage = ({isLogin} : LandingPageProps) => {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <Navbar/>
            <section className="flex flex-1 bg-gradient-to-r from-blue-50 to-white px-16 py-12">
                <Hero/>
                {isLogin ? <LoginCard/> : <SignupCard/>}
            </section>
           <Footer/>
        </div>
    )
    
}

export default LandingPage;