import { Button } from "@nextui-org/react";
import { useState } from "react";
import { NavLink } from "react-router-dom"

const IlMondoNuances = () => {
    const [ClickBold, setClickBold] = useState(true);
    const [ClickBold2, setClickBold2] = useState(false);
    const [ClickBold3, setClickBold3] = useState(false);
    const [ClickBold4, setClickBold4] = useState(false);

    const handleMouseEnter = (e) => {
        const underline = e.currentTarget.querySelector('.underline');
        underline.classList.add('scale-x-100');
    };
    
    const handleMouseLeave = (e) => {
        const underline = e.currentTarget.querySelector('.underline');
        underline.classList.remove('scale-x-100');
    };
  return (
    <>
        <div className="w-full text-center max-w-7xl h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 mx-auto flex flex-col justify-end">
            <p className="font-['Algerian'] text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px]">Il Mondo Nuances</p>
        </div>
        <div className="w-full text-center max-w-7xl mx-auto mt-5 sm:mt-7 md:mt-11 lg:mt-9 xl:mt-10 mb-4">
         <ul className="flex gap-4 w-max mx-auto">
            <NavLink className={"relative text-sm md:text-base lg:text-lg " + (ClickBold ? "!font-bold border-b-2 border-black" : "font-normal")}
            to="/il_mondo_nuances" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {return setClickBold(true), setClickBold2(false), setClickBold3(false), setClickBold4(false)}}>
                Tutto
                <div className={"absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 underline origin-center " + (ClickBold ? "-bottom-[2px]" : "bottom-0")}></div>
            </NavLink>
            <NavLink className={"relative text-sm lg:text-base " + (ClickBold2 ? "!font-bold" : "font-normal")} to="/sostenibilita"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {return setClickBold2(true), setClickBold(false), setClickBold3(false), setClickBold4(false)}}>
                Sostenibilit&agrave;
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 underline origin-center"></div>
            </NavLink>
            <NavLink className={"relative text-sm lg:text-base " + (ClickBold3 ? "!font-bold" : "font-normal")} to="/storia"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {return setClickBold3(true), setClickBold2(false), setClickBold(false), setClickBold4(false)}}>
                Storia
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 underline origin-center"></div>
            </NavLink>
            <NavLink className={"relative text-sm lg:text-base " + (ClickBold4 ? "!font-bold" : "font-normal")} to="/produzione"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => {return setClickBold4(true), setClickBold3(false), setClickBold2(false), setClickBold(false)}}>
                Produzione
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 underline origin-center"></div>
            </NavLink>
         </ul>
        </div>
        <div className="w-full max-w-7xl mx-auto grid grid-rows-2 grid-flow-col gap-2 px-6 h-80 sm:h-[420px] md:h-[600px] lg:h-[750px] xl:h-[900px] mb-10 sm:mb-12 md:mb-16 lg:mb-16 xl:mb-16">
            <NavLink to="/produzione" className="row-span-2 h-full">
                <div className="bg-black h-full rounded-s-3xl bg-[url('/foto_materiali_mobile_2.jpg')] lg:bg-[url('/foto_materiali_lg_2.jpg')] xl:bg-[url('/foto_materiali_xl_2.jpg')] bg-no-repeat bg-110% bg-center flex flex-col justify-end">
                    <Button className="w-auto ms-auto me-0 h-7 sm:h-8 md:h-10 lg:h-12 xl:h-14 rounded-s-lg rounded-e-none flex items-center text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg px-0 md:px-6 lg:px-8 xl:px-10 bg-gradient-to-r from-orange-500 to-gray-500 to-80%">Esplora</Button>
                </div>
            </NavLink>
            <NavLink to="/sostenibilita" className="col-span-1 h-full">
                <div className="bg-black h-full rounded-se-3xl bg-[url('/foto_sostenibilita4.jpg')] lg:bg-[url('/foto_sostenibilita3.jpg')] xl:bg-[url('/foto_sostenibilita2.jpg')] bg-no-repeat bg-100% bg-center flex flex-col justify-end">
                    <Button className="w-auto me-auto ms-0 h-7 sm:h-8 md:h-10 lg:h-12 xl:h-14 rounded-e-lg rounded-s-none flex items-center text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg px-0 md:px-6 lg:px-8 xl:px-10 bg-gradient-to-r from-gray-500 from-20% to-green-500">Esplora</Button>
                </div>
            </NavLink>
            <NavLink to="/history" className="col-span-1 h-full">
                <div className="bg-black h-full rounded-ee-3xl bg-[url('/foto_storia_nuances_mobile.jpg')] lg:bg-[url('/foto_storia_nuances3.jpg')] xl:bg-[url('/foto_storia_nuances2.jpg')] bg-no-repeat bg-110% bg-center flex flex-col justify-end">
                    <Button className="w-auto me-auto ms-0 h-7 sm:h-8 md:h-10 lg:h-12 xl:h-14 rounded-e-lg rounded-s-none flex items-center text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg px-0 md:px-6 lg:px-8 xl:px-10 bg-gradient-to-r from-gray-500 from-20% to-black">Esplora</Button>
                </div>
            </NavLink>
        </div>
    </>
  )
}

export default IlMondoNuances