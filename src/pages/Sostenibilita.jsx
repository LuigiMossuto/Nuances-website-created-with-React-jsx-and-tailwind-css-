import { useState, useRef } from "react";
import VideoSostenibilita from "../assets/video_sostenibilita.mp4";
import { NavLink } from "react-router-dom";

const Sostenibilita = () => {
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef(null);

    const handleTogglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPaused(false);
        } else {
            videoRef.current.pause();
            setIsPaused(true);
        }
    };

    const handleMouseEnter = (e) => {
        const underline = e.currentTarget.querySelector('.underline');
        underline.classList.add('scale-x-100');
    };
    
    const handleMouseLeave = (e) => {
        const underline = e.currentTarget.querySelector('.underline');
        underline.classList.remove('scale-x-100');
    };

    const sizeImg = window.innerWidth > 1280 ? "/foto-sostenibilita3-xl.jpg" : window.innerWidth > 768 ? "/foto-sostenibilita3-md.jpg" : window.innerWidth > 480 ? "/foto-sostenibilita3-xl.jpg" : "/foto-sostenibilita3-xl.jpg";
    const sizeImg2 = window.innerWidth > 1280 ? "/foto-sostenibilita4-xl.jpg" : window.innerWidth > 768 ? "/foto-sostenibilita4-md.jpg" : window.innerWidth > 480 ? "/foto-sostenibilita4-xl.jpg" : "/foto-sostenibilita4-xl.jpg";
    const sizeImg3 = window.innerWidth > 1280 ? "/foto-sostenibilita5-xl.jpg" : window.innerWidth > 768 ? "/foto-sostenibilita5-md.jpg" : window.innerWidth > 480 ? "/foto-sostenibilita5-xl.jpg" : "/foto-sostenibilita5-xl.jpg";
    const sizeImg4 = window.innerWidth > 1280 ? "/foto-sostenibilita6-xl.jpg" : window.innerWidth > 768 ? "/foto-sostenibilita6-md.jpg" : window.innerWidth > 480 ? "/foto-sostenibilita6-xl.jpg" : "/foto-sostenibilita6-xl.jpg";
    const sizeImg5 = window.innerWidth > 1280 ? "/foto-sostenibilita7-xl.jpg" : window.innerWidth > 768 ? "/foto-sostenibilita7-md.jpg" : window.innerWidth > 480 ? "/foto-sostenibilita7-xl.jpg" : "/foto-sostenibilita7-xl.jpg";
    const sizeImg6 = window.innerWidth > 1280 ? "/foto-sostenibilita8-xl.jpg" : window.innerWidth > 768 ? "/foto-sostenibilita8-md.jpg" : window.innerWidth > 480 ? "/foto-sostenibilita8-xl.jpg" : "/foto-sostenibilita8-xl.jpg";

    return (
        <>
            <div className="bg-content1 relative h-screen">
                <video
                    ref={videoRef}
                    src={VideoSostenibilita}
                    autoPlay
                    loop
                    muted
                    className="object-cover h-full w-full"
                ></video>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px] font-['Algerian'] mb-2">Nuances</h1>
                    <h1 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px] font-['Algerian'] mb-2">X</h1>
                    <h1 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px] font-['Algerian']">Sustainability</h1>
                </div>
                <img
                    src={isPaused ? "/play.svg" : "/pausa.svg"}
                    className="absolute bottom-0 left-0 transform w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 m-4"
                    onClick={handleTogglePlay}
                    alt="Toggle Play"
                ></img>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white">
                    <img src="/logo-ns.svg" className="w-6 h-6 sm:w-7 sm:h-7 mx-auto"></img>
                    <p className="text-sm md:text-base lg:text-lg">Scorri per scoprire</p>
                    <img src="/icona-giu.svg" className="animate-bounce mt-4 w-6 h-6 lg:w-8 lg:h-8 mx-auto" alt="Scroll Down" />
                </div>
            </div>
            <div className="bg-content1 relative h-auto">
                <img src="/foto-sostenibilita2.jpg" className="w-full h-auto brightness-[65%]"></img>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left text-white w-[95%] min-[340px]:w-[90%] min-[373px]:w-[80%] md:w-[540px] lg:w-[620px] xl:w-[580px]">
                    <h1 className="mx-auto text-2xl lg:text-4xl mb-2 min-[373px]:mb-4">  
                        Il Nostro Impegno
                    </h1>
                    <h2 className="text-lg lg:text-2xl mb-1 min-[373px]:mb-2"> Preservare le Risorse Naturali & Avere un Impatto Positivo sulla Società</h2>
                    <h2 className="text-sm lg:text-base">
                        Dalle idee alle azioni. Promossa nel 2020, la roadmap per lo sviluppo sostenibile di Louis Vuitton " Il Nostro Viaggio d'Impegno" stabilisce obiettivi ambiziosi e quantificati da raggiungere entro il 2025. In seguito,
                        abbiamo lanciato un'ampia gamma di iniziative in tutto il mondo, al fine di ottimizzare costantemente l'impronta ambientale e sociale delle nostre attività.
                    </h2>
                </div>
            </div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 !overflow-hidden ">
                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-[55%] md:-translate-x-1/2 -translate-y-[20%] md:-translate-y-1/2 text-left text-white w-[80%] sm:w-[90%] sm:ms-4 min-[694px]:w-[80%] min-[694px]:ms-0 text-lg md:text-xl lg:text-2xl min-[1386px]:text-4xl z-10 mb-4">
                        <NavLink
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                            <h1 className="mb-2">Approvvigionamento Responsabile</h1>
                            <div className={"absolute w-[80%] sm:w-[90%] min-[694px]:w-[80%] bottom-0 left-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 underline origin-center "}></div>
                        </NavLink>
                    </div>
                    <img src={sizeImg} className="w-full h-full brightness-[70%] transition-transform duration-200 ease-in-out transform hover:scale-105"></img>
                </div>
                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-[55%] md:-translate-x-1/2 -translate-y-[20%] md:-translate-y-1/2 text-left text-white w-[80%] sm:w-[90%] sm:ms-4 min-[694px]:w-[80%] min-[694px]:ms-0 text-lg md:text-xl lg:text-2xl min-[1386px]:text-4xl z-10 mb-4">
                        <NavLink
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                            <h1 className="mb-2">Promuovere diversità e inclusione</h1>
                            <div className={"absolute w-[80%] sm:w-[90%] min-[694px]:w-[80%] bottom-0 left-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 underline origin-center "}></div>
                        </NavLink>
                    </div>
                    <img src={sizeImg2} className="w-full h-full brightness-[70%] transition-transform duration-200 ease-in-out transform hover:scale-105"></img>
                </div>
                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-[55%] md:-translate-x-1/2 -translate-y-[20%] md:-translate-y-1/2 text-left text-white w-[80%] sm:w-[90%] sm:ms-4 min-[694px]:w-[80%] min-[694px]:ms-0 text-lg md:text-xl lg:text-2xl min-[1386px]:text-4xl z-10 mb-4">
                        <NavLink
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                            <h1 className="mb-2">Agire sul cambiamento climatico</h1>
                            <div className={"absolute w-[80%] sm:w-[90%] min-[694px]:w-[80%] bottom-0 left-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 underline origin-center "}></div>
                        </NavLink>
                    </div>
                    <img src={sizeImg3} className="w-full h-full brightness-[70%] transition-transform duration-200 ease-in-out transform hover:scale-105"></img>
                </div>
                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-[55%] md:-translate-x-1/2 -translate-y-[20%] md:-translate-y-1/2 text-left text-white w-[80%] sm:w-[90%] sm:ms-4 min-[694px]:w-[80%] min-[694px]:ms-0 text-lg md:text-xl lg:text-2xl min-[1386px]:text-4xl z-10 mb-4">
                        <NavLink
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                            <h1 className="mb-2">Sostegno alle comunità locali</h1>
                            <div className={"absolute w-[80%] sm:w-[90%] min-[694px]:w-[80%] bottom-0 left-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 underline origin-center "}></div>
                        </NavLink>
                    </div>
                    <img src={sizeImg4} className="w-full h-full brightness-[70%] transition-transform duration-200 ease-in-out transform hover:scale-105"></img>
                </div>
                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-[55%] md:-translate-x-1/2 -translate-y-[20%] md:-translate-y-1/2 text-left text-white w-[80%] sm:w-[90%] sm:ms-4 min-[694px]:w-[80%] min-[694px]:ms-0 text-lg md:text-xl lg:text-2xl min-[1386px]:text-4xl z-10 mb-4">
                        <NavLink
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                            <h1 className="mb-2">Impegno per la creatività circolare</h1>
                            <div className={"absolute w-[80%] sm:w-[90%] min-[694px]:w-[80%] bottom-0 left-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 underline origin-center "}></div>
                        </NavLink>
                    </div>
                    <img src={sizeImg5} className="w-full h-full brightness-[70%] transition-transform duration-200 ease-in-out transform hover:scale-105"></img>
                </div>
                <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-[55%] md:-translate-x-1/2 -translate-y-[20%] md:-translate-y-1/2 text-left text-white w-[80%] sm:w-[90%] sm:ms-4 min-[694px]:w-[80%] min-[694px]:ms-0 text-lg md:text-xl lg:text-2xl min-[1386px]:text-4xl z-10 mb-4">
                        <NavLink
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                            <h1 className="mb-2">Valorizzare il Savoir-Faire</h1>
                            <div className={"absolute w-[80%] sm:w-[90%] min-[694px]:w-[80%] bottom-0 left-0 h-0.5 bg-white transform scale-x-0 transition-transform duration-300 underline origin-center "}></div>
                        </NavLink>
                    </div>
                    <img src={sizeImg6} className="w-full h-full brightness-[70%] transition-transform duration-200 ease-in-out transform hover:scale-105"></img>
                </div>
            </div>
        </>
    );
};

export default Sostenibilita;
