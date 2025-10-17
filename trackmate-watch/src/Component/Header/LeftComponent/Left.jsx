import { Link } from "react-router-dom";

export default function LeftHeader() {
    return (

        <div className=" h-[400px] w-[900px] z-[99] shadow-[0_0_70px_#2a2a2af9] p-[40px]  flex  justify-center  bg-[#2a2a2a7c] 
         rounded-[25%] flex-col text-white backdrop-blur-mdxl px-[50px]">
            <p className=" text-2xl "> Own Your Daily Routine</p>
            <h1 className="text-[80px] text-white font-[440]">0.4 TimePulse XE</h1>
            <p className="text-2xl">A health tracker that motivates you every step of the way</p>
            <Link to={'/BuyNow'}>
                <button className="px-[70px] w-fit text-[16px] hover:bg-white hover:text-black transition-all 
                   [ ease-in shadow-[0_0_9px_#A238FF] py-[9px] font-[440] bg-[#A238FF] duration-300 text-white rounded-3xl mt-[20px] ">
                    Buy Now
                </button>
            </Link>

        </div>
    )
}