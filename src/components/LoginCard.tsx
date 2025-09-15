import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import CardContent from "./CardContent";
import Input from "./Input";

const LoginCard=()=>{
    return (
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-2">
              Welcome
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Sign in to your account
            </p>

            <div className="space-y-4">
              <Input placeholder="Enter your email" type="email" />
              <Input placeholder="Enter your password" type="password" />
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Remember me
                </label>
                <a href="#" className="text-blue-500">
                  Forgot password?
                </a>
              </div>
              <Button className="w-full bg-blue-500">Sign In</Button>
            </div>

            <p className="text-center mt-6 text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link to="/sign-up" className="text-blue-500 font-medium">
                Sign up for free
              </Link>
            </p>

            <div className="flex items-center gap-2 my-6">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-gray-500 text-sm">or continue with</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

export default LoginCard;