import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useState } from "react";
export default function LeftPart() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [Count,SetCount] = useState(0)


    return (
        <div className="w-[35%] h-full  text-white p-[70px] flex gap-[30px] flex-col " data-aos-duration="1000" data-aos="fade-left" >
            <h1 className="text-4xl flex flex-col gap-[5px]"> 0.4 TimePulse XE<span className="text-[15px] text-gray-50">SKU: 0001</span></h1>
            <span className="text-2xl">$85.00</span>
            <ul className="flex flex-col gap-[5px]">
                color *
                <span className="flex gap-[5px]">
                    <div className="w-[20px] h-[20px] bg-white rounded-[50%] border-2 border-white  " ></div>
                    <div className="w-[20px] h-[20px] bg-black rounded-[50%] border-2 border-white " ></div>
                    <div className="w-[20px] h-[20px] bg-blue-700 rounded-[50%] border-2 border-white " ></div>
                    <div className="w-[20px] h-[20px] bg-purple-500 rounded-[50%] border-2 border-white " ></div>
                    <div className="w-[20px] h-[20px] bg-green-400 rounded-[50%] border-2 border-white " ></div>
                </span>
            </ul>
            <ul className="flex flex-col gap-[5px]">
                Quantity*
                <span className="w-[120px] items-center py-[8px] flex gap-[20px] justify-around bg-white  text-black"  ><i class="fa-solid fa-minus "  onClick={()=>{
                    SetCount(Count - 1)
                }} ></i>{Count}<i class="fa-solid fa-plus" onClick={()=>{
                    SetCount(Count + 1)
                }} ></i></span>
            </ul>
            <button className="px-[40px] text-[16px] hover:bg-white hover:text-black transition-all 
                   [ ease-in shadow-[0_0_9px_#A238FF] py-[9px] font-[440] bg-[#A238FF] duration-300 text-white rounded-3xl ">
                Add to Card
            </button>

            <ul className="w-full flex flex-col gap-[20px]">
                <h1 className="w-full flex justify-between px-[20px]">PRODUCT INFO <i class="fa-solid fa-plus"></i></h1>
                <hr />
                <h1 className="w-full flex justify-between px-[20px]">RETURN & REFUND POLICY<i class="fa-solid fa-plus"></i></h1>
                <hr />
                <h1 className="w-full flex justify-between px-[20px]">SHIPPING INFO<i class="fa-solid fa-plus"></i></h1>
                <hr />
            </ul>
            <ul>
                <span className="w-full flex gap-[10px] text-[20px]">
                    <i class="fa-brands fa-facebook text-blue-400"></i>
                    <i class="fa-brands fa-pinterest text-red-500"></i>
                    <i class="fa-brands fa-whatsapp text-lime-500"></i>
                    <i class="fa-brands fa-x-twitter text-white"></i>
                </span>
            </ul>

        </div>

        

    )
}