import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full flex absolute inset-0  items-center justify-between py-[20px] bg-[#02020203] h-[80px] px-[100px]   z-50">
            <span className="flex items-center gap-[10px]">
                <div className="w-[25px] flex items-center justify-center h-[25px] bg-white rounded-[50%]" >
                    <span className="w-[20px] h-[20px]  flex justify-center items-center rounded-[50%] bg-[#1E0A2F]">
                        <span className="w-[12px] h-[12px] bg-white rounded-[50%]"></span>
                    </span>
                </div>
                <a href="/" className="text-[30px] font-[440] text-white">TimePulse</a>
            </span>

            <ul className=" flex items-center gap-[20px] justify-around h-full">
                <a href="" className="text-[19px] hover:text-[#ae75e0] transition-all ease-in text-white flex items-center gap-[20px] "   >FAQ <i className="fa-solid fa-circle-user text-white text-2xl "></i></a>
                <a href="" className="text-[19px] hover:text-[#d1cece] transition-all ease-in text-white flex items-center gap-[20px]"   >Log in <i className="fa-brands fa-shopify text-white text-2xl"></i></a>
                <Link to={'/BuyNow'}>
                    <button className="px-[40px] text-[16px] hover:bg-white hover:text-black transition-all 
                   [ ease-in shadow-[0_0_9px_#A238FF] py-[9px] font-[440] bg-[#A238FF] duration-300 text-white rounded-3xl ">
                        Buy Now
                    </button>
                </Link>

            </ul>

        </nav>

    )
}
