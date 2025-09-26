import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
        <span className="font-semibold text-lg">TrainNow</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 text-gray-700">
        <a href="#">How it Works</a>
        <a href="#">Gyms</a>
        <a href="#">Pricing</a>
        <a href="#">Support</a>
        <Link to="/" className="font-medium">
            Sign In
          </Link>
          <Link to="/sign-up" className="font-medium">
            Sign Up
          </Link>
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
        <span className="w-6 h-0.5 bg-gray-800"></span>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-50">
          <a href="#" onClick={() => setIsOpen(false)}>
            How it Works
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            Gyms
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            Pricing
          </a>
          <a href="#" onClick={() => setIsOpen(false)}>
            Support
          </a>
          <Link to="/" className="font-medium">
            Sign In
          </Link>
          <Link to="/sign-up" className="font-medium">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
