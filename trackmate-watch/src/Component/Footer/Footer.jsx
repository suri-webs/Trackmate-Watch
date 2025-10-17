import FirstFooter from "./FirstFooter/FirstFooter";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col gap-4 justify-center items-center h-[200px] bg-gradient-to-b from-[#222323]  via-[#361355b1] to-[#361355]">
            <FirstFooter />
            <hr className="w-[85%] bg-white h-[1.5px] border-white " />
            <p className="text-[22px] text-white tracking-widest  ">© 2035 by TimePulse. Powered and secured by </p>

        </footer>

    )
}