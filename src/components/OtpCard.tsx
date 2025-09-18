import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import CardContent from "./CardContent";
import Input from "./Input";

const OtpCard = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-8">

          <h2 className="text-2xl font-bold text-center mb-2">
            Verify Your Account
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Enter the OTPs sent to your email and phone number
          </p>

          <div className="space-y-4">
            <Input placeholder="Email OTP" type="text" maxLength={6} />
            <Input placeholder="Phone OTP" type="text" maxLength={6} />
            <Link to="/" className="text-blue-500 font-medium">
            <Button className="w-full bg-blue-500 mt-4">Verify</Button>
            </Link>
          </div>

          <p className="text-center mt-6 text-sm text-gray-600">
            Didn’t receive the code?{" "}
            <button className="text-blue-500 font-medium">Resend</button>
          </p>

        </CardContent>
      </Card>
    </div>
  );
};

export default OtpCard;
