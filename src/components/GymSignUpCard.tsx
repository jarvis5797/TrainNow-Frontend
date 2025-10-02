
import Button from "./Button";
import Card from "./Card";
import CardContent from "./CardContent";
import Input from "./Input";
import { useState } from "react";
import { signUp } from "../services/authservice";

interface GymSignUpCardProps {
  onCancel: ()=> void;
  onNext: (userId: string)=> void;
}

const GymSignUpCard = ({onCancel, onNext} : GymSignUpCardProps) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, phoneNumber, password, confirmPassword } = formData;

    if (!name || !email || !phoneNumber || !password || !confirmPassword) {
      return "All fields are required!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    const phoneRegex = /^[0-9]{10,}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return "Please enter a valid phone number (at least 10 digits)";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try{
      const payload={
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        role:'GYM_OWNER',
      };

      await signUp(payload).then((data)=>{
        onNext(data);
      });
    }catch(err: any){
      setError(err.reponse?.data?.messgae || "SignUp failed. Try again.")
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Add Gym Owner</h2>
          <p className="text-gray-600 text-center mb-6">
            Create gym owner account and continue!
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

            <div className="flex justify-between gap-4 mt-6">
              <Button
                type="button"
                className="w-1/2 bg-gray-200 text-gray-700 hover:bg-gray-300"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-blue-500 text-white hover:bg-blue-600"
              >
                Next
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GymSignUpCard;
