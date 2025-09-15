import Button from "./Button";

const Navbar=()=>{
    return (
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center gap-8 text-gray-700">
          <a href="#">How it Works</a>
          <a href="#">Gyms</a>
          <a href="#">Pricing</a>
          <a href="#">Support</a>
          <a href="#">Sign In</a>
          <Button className="bg-blue-500">Sign Up</Button>
        </div>
      </nav>
    );
}

export default Navbar;