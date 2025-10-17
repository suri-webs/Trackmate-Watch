import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function RightWorkout() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div
            className=
            "w-[27%] z-[55] relative h-full bg-[radial-gradient(circle_at_74.11%_94.03%,#222323_0%,rgba(34,35,35,0)_35%),radial-gradient(circle_at_58.97%_66.87%,rgba(22,87,217,0.61)_0%,rgba(22,87,217,0)_30%),radial-gradient(circle_at_0.59%_57.08%,rgba(22,87,217,0.38)_0%,rgba(22,87,217,0)_14%),radial-gradient(circle_at_13.2%_9.21%,rgba(162,56,255,0.24)_0%,rgba(162,56,255,0)_55%),radial-gradient(circle_at_100%_37.31%,rgba(22,87,217,0.51)_0%,rgba(22,87,217,0)_18%),radial-gradient(circle_at_78.61%_57.83%,rgba(162,56,255,0.65)_0%,rgba(162,56,255,0)_35%),radial-gradient(circle_at_1.88%_94.78%,#222323_0%,rgba(34,35,35,0)_20%),radial-gradient(circle_at_48.9%_49.52%,#000000_0%,rgba(0,0,0,0)_100%)] flex justify-center items-center ">

            <div className="w-full h-full bg-[#0000007d] absolute inset-0 z-[9]"></div>

            <img src="/Mobile1.png" className=" w-[350px] z-[99] absolute left-[-150px]" data-aos="fade-left" data-aos-duration="1000"  alt="" />

        </div>
    )
}