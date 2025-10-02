import { useState } from "react";
import { Link } from "react-router-dom";
import type { NavBarProps } from "../interfaces/User";
import Button from "./Button";

interface Props extends NavBarProps{
  onAddgymClick?: ()=> void;
}

const Navbar = ({isAdmin= false, userImage, onAddgymClick}: Props ) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
        <span className="font-semibold text-lg">TrainNow</span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-gray-700">
        {isAdmin ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/gyms">Gyms</Link>
            <Link to="/users">Users</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/settings">Settings</Link>

            <Button
              className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition"
              onClick={onAddgymClick}
            >
              Add New Gym
              
            </Button>

            <button className="ml-4">
              <img
                src={userImage || "/default-avatar.png"}
                alt="Profile"
                className="w-9 h-9 rounded-full border border-gray-300 object-cover"
              />
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
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
           {isAdmin ? (
            <>
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <Link to="/gyms" onClick={() => setIsOpen(false)}>
                Gyms
              </Link>
              <Link to="/users" onClick={() => setIsOpen(false)}>
                Users
              </Link>
              <Link to="/reviews" onClick={() => setIsOpen(false)}>
                Reviews
              </Link>
              <Link to="/settings" onClick={() => setIsOpen(false)}>
                Settings
              </Link>
              <Link
                to="/gyms/add"
                className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Add New Gym
              </Link>

              <button onClick={() => setIsOpen(false)}>
                <img
                  src={userImage || "/default-avatar.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-gray-300 object-cover"
                />
              </button>
            </>
          ) : (
            <>
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
              <Link to="/" className="font-medium" onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
