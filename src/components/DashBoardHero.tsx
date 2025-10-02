import type { UserRole } from "../interfaces/User";


const DashBoardHero=({ userType } : UserRole)=>{

    const render=() =>{

        switch(userType){
            case "ADMIN":
                return null;
            case "USER":
                return null;
            case "GYM_OWNER":
                return null;
            default:
               return null;
        }
    }

    return(
        <section className="flex flex-col md:flex-row flex-1 bg-gradient-to-r from-blue-50 to-white px-6 md:px-16 py-8 md:py-12 gap-8">
            {render()}
        </section>
    );
}

export default DashBoardHero;