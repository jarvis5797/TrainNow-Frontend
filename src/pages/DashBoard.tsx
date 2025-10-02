import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DashBoardHero from "../components/DashBoardHero";
import type { UserRole } from "../interfaces/User";
import { useState } from "react";
import GymSignUpCard from "../components/GymSignUpCard";
import AddGymForm from "../components/AddGymForm";

const DashBoard = ({ userType } : UserRole) => {

  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isGymFormOpen, setIsGymFormOpen] = useState(false);
  const [ownerId, setOwnerId] = useState<string | null>(null);

  const handleGymFormPopUp = (userId: string) =>{
    setIsAddUserOpen(false);
    setOwnerId(userId);
    setIsGymFormOpen(true);
  }
    
  const handleAddGymPopUp = () => {
    setIsAddUserOpen(true);
  }

  const handleClose = () =>{
    setIsGymFormOpen(false);
    setIsAddUserOpen(false);
  }

  const render = () => {
    switch (userType) {
      case "ADMIN":
        return true;
      case "USER":
        return false;
      case "GYM_OWNER":
        return false;
      default:
        return false;
    }
  };

  return <div className="w-screen min-h-screen flex flex-col">
    <Navbar isAdmin={render()} onAddgymClick={handleAddGymPopUp}/>
    <DashBoardHero userType={userType}/>
    { isAddUserOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <GymSignUpCard onCancel={handleClose} onNext={handleGymFormPopUp}/>
        </div>
    )

    }

    { isGymFormOpen && ownerId && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <AddGymForm onCancel={handleClose} ownerId={ownerId}/>
        </div>
    )
    }
    <Footer/>
  </div>;
};


export default DashBoard;