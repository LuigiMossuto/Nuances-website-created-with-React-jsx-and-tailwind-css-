import ArrowDown from "../components/icon/ArrowDown";
import VideoProduzione from "../assets/produzione_video.mp4";
import { Button } from "@nextui-org/react";
import NewsletterForm from "../components/NewsletterForm";
import { NavLink } from "react-router-dom";
import { borseProdotti } from "../components/data/BorseProdotti";
import { useShop } from "../providers/ShopProvider";


const HomePage = () => {
  const {handleClick} = useShop();

  return (
    <>
      <div className="w-full h-[100vh] overflow-hidden bg-[url('/foto_homepage_mini_mobile.jpg')] min-[352px]:bg-[url('/foto_homepage_mobile.jpg')] md:bg-[url('/foto_homepage_desktop.jpg')] bg-no-repeat bg-170% min-[540px]:bg-133% sm:bg-110% md:bg-150% xl:bg-110% bg-[center] sm:bg-[center_top_47%]">
        <div className="w-[88%] sm:w-[55%] min-[690px]:w-[50%] text-center relative mx-auto top-[50%] -translate-y-[50%]">
          <div className="max-w-5xl">
            <p className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-white font-light font-['Open_Sans']">
              La nuova collezione
            </p>
            <p className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-white font-['Algerian']">
              Divine comedy
            </p>
          </div>
        </div>
          <ArrowDown
           key="arrow-down"
            value={"/arrowdown.svg"}
            valueHover={"/arrowdown_hover.svg"}
            className={
              "size-10 sm:size-[50px] md:size-14 lg:size-[70px] xl:size-[80px] relative top-[82vh] min-[328px]:top-[85vh] sm:top-[82vh] md:top-[80vh] lg:top-[77vh] xl:top-[73vh] left-[50%] -translate-x-[50%] animate-pulse transition-all duration-700 cursor-pointer"
            }
          />
      </div>
      <div className="max-w-7xl my-0 mx-auto bg-content1">
        <div className="mt-10">
          <p className="text-black text-[19px] sm:text-[23px] md:text-[26px] lg:text-[30px] xl:text-[34px] text-center font-['Algerian']">
            Divine comedy
          </p>
          <NavLink to="/borse">
            <button className="mx-auto block border-2 border-black rounded-xl text-black bg-white hover:bg-gradient-to-r hover:from-red-500 hover:via-orange-500 hover:to-cyan-500 hover:border-none hover:h-[56px] hover:text-white transition-colors ease-linear duration-300 text-sm md:text-base lg:text-lg mt-2 lg:mt-4 xl:mt-5 font-bold px-6 py-3 md:px-7 lg:px-8">
              ESPLORA
            </button>
          </NavLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 px-4">
          {borseProdotti.slice(0, 3).map((item, index) => (
            <>
            <div className={"card w-full bg-base-100 shadow-large " + item.className} key={index}>
              <NavLink to={`/borse/${item.id}`}>
                <figure className={"bg-content1 bg-center bg-no-repeat bg-cover mt-5 lg:mt-6 " + item.bg + " " + item.dark}>
                  <img
                    src={item.img}
                  />
                </figure>
              </NavLink>
              <div className={"card-body p-3"}>
                <div className="flex justify-between lg:py-2">
                  <h2 className={"card-title text-sm lg:text-medium mb-0 " + item.text}>{item.title}</h2>
                  <p className="text-sm text-right lg:text-medium font-bold">{item.price.toLocaleString('it-IT', { minimumFractionDigits: 2 }) + "€"}</p>
                </div>
                <div className="flex justify-between mt-3">
                  <NavLink to={`/borse/${item.id}`}>
                    <Button
                      className="bg-gradient-to-r from-red-500 from-30% to-cyan-500 text-white lg:text-medium xl:text-[0.9rem] min-[1320px]:text-medium"
                      variant="shadow"
                    >
                      Vedi Borsa
                    </Button>
                  </NavLink>
                  <Button onClick={() => handleClick(item)} className="text-white bg-green-500 lg:text-medium xl:text-[0.9rem] min-[1320px]:text-medium" variant="shadow">
                    Aggiungi al Carrello
                  </Button>
                </div>
              </div>
            </div>
            </>
          ))}
          <div className="bg-content1 h-auto">
            <img
              src="/foto_sostenibilita4.jpg"
              className="w-full h-full rounded-lg lg:hidden"
            />
            <img
              src="/foto_sostenibilita3.jpg"
              className="w-full h-full rounded-lg hidden lg:block xl:hidden"
            />
            <img
              src="/foto_sostenibilita2.jpg"
              className="w-full h-full rounded-lg hidden xl:block"
            />
          </div>
          <div className="bg-content1 h-auto">
            <video
              src={VideoProduzione}
              autoPlay
              loop
              muted
              className="object-cover h-full rounded-lg"
            ></video>
          </div>
          <div className="bg-content1 hidden lg:block h-auto">
            <img
              src="/foto_storia_nuances3.jpg"
              className="w-full h-full rounded-lg xl:hidden"
            ></img>
            <img
              src="/foto_storia_nuances2.jpg"
              className="w-full h-full rounded-lg lg:hidden xl:block"
            ></img>
          </div>
        </div>
      </div>
      {/* NEWSLETTER */}
      <NewsletterForm />
    </>
  );
};

export default HomePage;
