import Button from "./Button";
import Input from "./Input";

const Hero = () => {
  return (
    <div className="flex-1 flex flex-col justify-center pr-0 md:pr-8 px-4 md:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
        Find & Book Gyms <br />
        <span className="text-blue-500">By The Hour</span>
      </h1>

      <p className="mt-4 text-gray-600 text-base sm:text-lg text-center md:text-left">
        Discover premium gyms in your area and pay only for the time you use.  
        No long-term commitments, just flexible fitness.
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-white rounded-2xl shadow-md p-4 mt-8 w-full max-w-2xl mx-auto md:mx-0">
        <Input placeholder="Enter location" className="flex-1" />
        <Input type="datetime-local" className="flex-1" />
        <Button className="bg-blue-500 px-6 w-full sm:w-auto">Search</Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-8 text-gray-800 justify-center md:justify-start text-center md:text-left">
        <div>
          <p className="text-xl sm:text-2xl font-bold">500+</p>
          <p className="text-sm text-gray-500">Partner Gyms</p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-bold">50K+</p>
          <p className="text-sm text-gray-500">Happy Users</p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-bold">4.9</p>
          <p className="text-sm text-gray-500">Average Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
