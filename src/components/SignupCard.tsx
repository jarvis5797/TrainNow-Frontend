import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import CardContent from "./CardContent";
import Input from "./Input";

const SignupCard = () => {
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


          <div className="space-y-4">
            <Input placeholder="Full Name" type="text" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Phone Number" type="tel" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
            <Button className="w-full bg-blue-500">Sign Up</Button>
          </div>

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