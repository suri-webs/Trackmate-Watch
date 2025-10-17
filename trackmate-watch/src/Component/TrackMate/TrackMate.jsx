import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import LeftTrack from "./LeftCompo/Left";
import RightTrack from "./RightCompo/right";
export default function TrackMate() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (

        <section className="w-full h-[1500px] bg-[radial-gradient(circle_at_43.97%_52.83%,rgba(126,161,230,0.63)_0%,rgba(126,161,230,0)_35%),radial-gradient(circle_at_5.60%_89.05%,#000000_0%,rgba(0,0,0,0)_35%),radial-gradient(circle_at_95.36%_90.00%,#000000_0%,rgba(0,0,0,0)_40%),radial-gradient(circle_at_56.95%_53.20%,rgba(194,125,255,0.71)_0%,rgba(194,125,255,0)_50%),radial-gradient(circle_at_4.58%_9.80%,#000000_0%,rgba(0,0,0,0)_70%),radial-gradient(circle_at_93.69%_11.43%,#000000_0%,rgba(0,0,0,0)_70%),radial-gradient(circle_at_48.90%_49.52%,#000000_0%,rgba(0,0,0,0)_100%)] bg-black bg-cover relative bg-center bg-no-repeat
         flex justify-center items-center flex-col p-[100px] gap-[140px] ">
            <img src="/shutterstock_watch.avif" className="w-[700px] absolute top-[20%]" alt="" data-aos-duration="900" data-aos="fade-up" />

            <h1 className="text-white text-5xl">0.4 TimePulse XE Specifications</h1>
            <div className="w-full h-full flex justify-center">
                <LeftTrack />
                <RightTrack />
            </div>
            <Link to={'/BuyNow'}>
                <button className="px-[70px] text-[18px] hover:bg-white hover:text-black transition-all 
        [ ease-in shadow-[0_0_9px_#A238FF] py-[12px] font-[440] bg-[#A238FF] duration-300 text-white rounded-3xl ">
                    Buy Now
                </button>
            </Link>

        </section>

    )
}