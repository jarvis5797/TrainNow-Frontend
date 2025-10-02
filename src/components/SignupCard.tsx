import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import CardContent from "./CardContent";
import Input from "./Input";
import { useState } from "react";
import { signUp } from "../services/authservice";

const SignupCard = () => {

  const navigate = useNavigate();

  const[formData, setFormData] = useState({
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:""
  })

  const[error, setError] = useState<string | null>(null);

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const{name, value} = e.target;
    setFormData((prev)=> ({...prev, [name]:value}));
  }

  const validateForm = () =>{
    const{ name, email, phoneNumber, password, confirmPassword} = formData;

    if(!name || !email || !phoneNumber || !password || !confirmPassword){
      return "All fields are required!"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      return "Please enter a valid email address";
    }

    const phoneRegex = /^[0-9]{10,}$/;
    if(!phoneRegex.test(phoneNumber)){
      return "Please enter a valid phone number (at least 10 digits)";
    }

    if(password.length < 6){
      return "Password must be at least 6 characters long";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    return null;

  }

  const handleSubmit = async(e: React.FormEvent)=>{
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if(validationError){
      setError(validationError);
      return;
    }

    try{
      const payload={
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        role:'user',
      };

      await signUp(payload).then((data)=>{
        navigate("/otp-verification" , {
          state:{
            userId: data,
          }
        });
      });
    }catch(err: any){
      setError(err.reponse?.data?.messgae || "SignUp failed. Try again.")
    }
  }


  return (
    <div className="flex-1 flex items-center justify-center">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Sign up to get started with GymFinder
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              placeholder="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
              <Button type="submit" className="w-full bg-blue-500 mt-4">Sign Up</Button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-blue-500 font-medium">
              Sign In
            </Link>
          </p>

          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-500 text-sm">or continue with</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <div className="flex justify-center gap-4">
            <Button className="bg-red-500 text-white">Google</Button>
            <Button className="bg-blue-600 text-white">Facebook</Button>
            <Button className="bg-black text-white">Apple</Button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            By signing up, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupCard;