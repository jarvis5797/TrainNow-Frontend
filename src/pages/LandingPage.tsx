import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoginCard from "../components/LoginCard";
import Navbar from "../components/Navbar";
import OtpCard from "../components/OtpCard";
import SignupCard from "../components/SignupCard";
import type { LandingPageProps } from "../interfaces/landing";

const LandingPage = ({ cardString }: LandingPageProps) => {
  const renderCard = () => {
    switch (cardString) {
      case "Login":
        return <LoginCard />;
      case "SignUp":
        return <SignupCard />;
      case "Otp":
        return <OtpCard />;
      default:
        return null;
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-col md:flex-row flex-1 bg-gradient-to-r from-blue-50 to-white px-6 md:px-16 py-8 md:py-12 gap-8">
        <Hero />
        {renderCard()}
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;