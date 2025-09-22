import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import CardContent from "./CardContent";
import Input from "./Input";
import { useEffect, useState } from "react";
import { sendOtp, verifyOtp } from "../services/authservice";

const OtpCard = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const {userId} = location.state || {};

  const[timer,  setTimer] = useState(120);
  const[canResend, setCanResend] = useState(false);

  const[otps, setOtps]= useState({
    userId: userId,
    emailOtp:"",
    phoneOtp:""
  })

  const isVerifyDisabled = otps.emailOtp.length !== 6 || otps.phoneOtp.length !==6;

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const{name, value} = e.target;
    setOtps((prev)=> ({...prev, [name]:value}));
  }

  useEffect(()=>{
    if(timer>0){
      const countdown = setInterval(()=>{
        setTimer((prev)=> prev-1);
      },1000);

      return ()=> clearInterval(countdown);
    }else{
      setCanResend(true);
    }
  },[timer]);

  const formatTime = (seconds: number) =>{
    const m = Math.floor(seconds/60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? `0${s}` : s}`;
  };

  const handleResend = async () =>{
    try{
      await sendOtp(userId);
      setTimer(120);
      setCanResend(false);
    }catch(err){
      console.error("Failed to send otp:", err);
    }
  }

  const handleVerify = async ()=>{
    try{
      await verifyOtp(otps.userId, otps.emailOtp, otps.phoneOtp);
      navigate("/");
    }catch(err){
      console.error("OTP verification failed", err);
    }
  }

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
            <Input placeholder="Email OTP" type="text" name="emailOtp" onChange={handleChange} maxLength={6} />
            <Input placeholder="Phone OTP" type="text" name="phoneOtp" onChange={handleChange} maxLength={6} />
            <Button onClick={handleVerify} className={`w-full mt-4 ${
                isVerifyDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
              }`}
              disabled={isVerifyDisabled}>Verify</Button>
          </div>

          <p className="text-center mt-6 text-sm text-gray-600">
            Didn’t receive the code?{" "}
            <button
              onClick={handleResend}
              disabled={!canResend}
              className={`font-medium ${
                canResend
                  ? "text-blue-500 hover:underline"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              {canResend ? "Resend" : `Resend in ${formatTime(timer)}`}
            </button>
          </p>

        </CardContent>
      </Card>
    </div>
  );
};

export default OtpCard;
