import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function Chaning() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className=" w-[100%]  h-[55%] flex flex-col justify-top mt-[100px] p-[10px] items-center gap-[20px]  " data-aos="fade-up">
            <ul className=" text-white">
                <img src="/Circle.png" className="w-[70px]" alt="" />

            </ul>
            <p className="text-[#fff] w-[60%] text-[18px] text-center">
                A LIFE CHANGING DEVICE
            </p>
            <h1 className=" text-white text-center text-[50px] font-[400]  w-[100%]">
                Get Your 0.4 TimePulse XE Today
            </h1>
            <Link to={'/BuyNow'}>
                <button className="px-[80px] w-fit text-[16px] hover:bg-white hover:text-black transition-all 
                   [ ease-in shadow-[0_0_9px_#A238FF] py-[9px] font-[440] bg-[#A238FF] duration-300 text-white rounded-3xl mt-[20px] ">
                    Buy Now
                </button>
            </Link>

        </div>
    )
}