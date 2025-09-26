import GymSignUpCard from "./GymSignUpCard";


const Main=()=>{

    return(
        <section className="flex flex-col md:flex-row flex-1 bg-gradient-to-r from-blue-50 to-white px-6 md:px-16 py-8 md:py-12 gap-8">
            <GymSignUpCard/>
        </section>
    );
}

export default Main;