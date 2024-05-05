import { useParams } from "react-router-dom";
import { borseProdotti } from "../components/data/BorseProdotti";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';
import { ArrowDropdownDown } from "../components/icon/ArrowDropdownDown";
import { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import { useShop } from "./ShopProvider";

const BorsaPage = () => {
  const {id} = useParams();
  const prod = borseProdotti.find((prod) => prod.id.toString() === id);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperVerticalRef = useRef(null);
  const swiperHorizontalRef = useRef(null);
  const {handleClick} = useShop();
  useEffect(() => {
    if (swiperVerticalRef.current && !swiperVerticalRef.current.swiper) {
      swiperVerticalRef.current.swiper = swiperVerticalRef.current.swiperRef.current;
    }
    if (swiperHorizontalRef.current && !swiperHorizontalRef.current.swiper) {
      swiperHorizontalRef.current.swiper = swiperHorizontalRef.current.swiperRef.current;
    }
  }, []);
  const handleVerticalArrowClick = () => {
    // Avanza lo slider verticale allo step successivo
    if (swiperVerticalRef.current && swiperVerticalRef.current.swiper) {
      swiperVerticalRef.current.swiper.slideNext();
    }
  };

  const handleHorizontalArrowClick = () => {
    // Avanza lo slider orizzontale allo step successivo
    if (swiperHorizontalRef.current && swiperHorizontalRef.current.swiper) {
      swiperHorizontalRef.current.swiper.slideNext();
    }
  };
  return (
    <>
         <div className="max-w-7xl mx-auto hidden md:flex justify-between ps-6">
            <div className="h-[80vh] lg:h-[650px] w-1/2 md:mt-16 lg:mt-20 md:mb-[95px] lg:mb-[69px]">
              <Swiper
                ref={swiperVerticalRef}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination, Navigation]}
                onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
                className="mySwiper"
              >
                {prod.imgBorsa && (
                  <SwiperSlide className="!flex !items-center !bg-content2">
                    <img
                      src={prod.imgBorsa}
                      className="md:!w-[90%] md:!h-[60%] lg:!w-[80%] lg:!h-[68%] me-4"
                      alt="Product"
                    />
                  </SwiperSlide>
                )}
                {prod.imgBorsa2 && (
                  <SwiperSlide className="!flex !items-center !bg-content2">
                    <img
                      src={prod.imgBorsa2}
                      className="md:!w-full md:!h-full -mt-2"
                      alt="Product"
                    />
                  </SwiperSlide>
                )}
                {prod.imgBorsa3 && (
                  <SwiperSlide className="!flex !items-center !bg-content2">
                    <img
                      src={prod.imgBorsa3}
                      className="md:!w-[90%] md:!h-[50%] lg:!w-[80%] lg:!h-[68%] me-4"
                      alt="Product"
                    />
                  </SwiperSlide>
                )}
                {prod.imgBorsa4 && (
                  <SwiperSlide className="!flex !items-center !bg-content2">
                    <img
                      src={prod.imgBorsa4}
                      className="md:!w-[90%] md:!h-[50%] lg:!w-[80%] lg:!h-[68%] me-4"
                      alt="Product"
                    />
                  </SwiperSlide>
                )}
              </Swiper>
              <div className="w-full md:mt-11 lg:mt-8 relative">
                {currentSlideIndex < 3 ? (<ArrowDropdownDown className="w-6 cursor-pointer mx-auto" onClick={handleVerticalArrowClick} />) : <div className="relative bottom-4 left-[17rem] h-[13px]"></div>}
              </div>
            </div>
          <div className="w-[40%] pe-6 md:mt-16 lg:mt-20 md:mb-16 lg:mb-[68px]">
            <div className="w-full flex flex-col justify-center my-[68px]">
              <p className={"md:text-xl lg:text-2xl text-left font-bold uppercase border-b-5 border-black pb-1 ps-[2px] tracking-wider " + prod.text}>{prod.title}</p>
              <p className="w-[90%] md:text-sm lg:text-base mt-4">{prod.description}</p>
              <p className="font-bold md:text-sm lg:text-base mt-4">€{prod.price}</p>
              <div className="bg-gray-200 h-[1px] mt-4"></div>
              <p className="font-semibold md:text-sm lg:text-base mt-4">SPECIFICHE</p>
              <div className="flex flex-col gap-2 mt-2">
                {prod.info1 && <p className="text-sm lg:text-base">- {prod.info1}</p>}
                {prod.info2 && <p className="text-sm lg:text-base">- {prod.info2}</p>}
                {prod.info3 && <p className="text-sm lg:text-base">- {prod.info3}</p>}
                {prod.info4 && <p className="text-sm lg:text-base">- {prod.info4}</p>}
                {prod.info5 ? <p className="text-sm lg:text-base">- {prod.info5}</p> : <p className="h-[20px] lg:h-[24px]"></p>}
                {prod.info6 ? <p className="text-sm lg:text-base">- {prod.info6}</p> : <p className="h-[20px] lg:h-[24px]"></p>}
                {prod.info7 ? <p className="text-sm lg:text-base">- {prod.info7}</p> : <p className="h-[20px] lg:h-[24px]"></p>}
                {prod.info8 ? <p className="text-sm lg:text-base">- {prod.info8}</p> : <p className="h-[20px] lg:h-[24px]"></p>}
              </div>
              <div className="w-full px-6 mt-4">
                <p>
                  <Button
                        variant="flat"
                        className="w-full text-white font-bold bg-green-500"
                        onClick={() => handleClick(prod)}
                      >
                        AGGIUNGI AL CARRELLO
                  </Button>
                </p>
              </div>
            </div>
          </div>
         </div>


         <div className="max-w-7xl mx-auto flex flex-col px-6 md:hidden">
            <div className="w-full h-[50vh] min-[390px]:h-[60vh] min-[550px]:h-[65vh] min-[700px]:h-[70vh]">
              <Swiper
                ref={swiperHorizontalRef}
                direction={'horizontal'}
                slidesPerView={1}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination, Navigation]}
                onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
                className="mySwiper"
              >
                
                {prod.imgBorsa && (
                  <SwiperSlide className="!flex !items-center !bg-content2">
                    <img
                      src={prod.imgBorsa}
                      className="!w-full !h-[60%] min-[330px]:!h-[65%] min-[350px]:!h-[75%] min-[450px]:!w-[90%] min-[510px]:!w-[80%] min-[610px]:!w-[70%] min-[700px]:!w-[68%] mt-2"
                      alt="Product"
                    ></img>
                  </SwiperSlide>
                )}
                {prod.imgBorsa2 && (
                  <SwiperSlide className="!flex !items-center !bg-content2">
                    <img
                      src={prod.imgBorsa2}
                      className="!w-[80%] !h-[70%] min-[380px]:!h-[68%] min-[380px]:!w-[70%] min-[490px]:!w-[60%] min-[610px]:!h-[72%] min-[640px]:!h-[76%] min-[640px]:!w-[55%] min-[700px]:!w-[58%] min-[700px]:!h-[78%] mt-6"
                      alt="Product"
                    ></img>
                  </SwiperSlide>
                )}
                {prod.imgBorsa3 && (
                  <SwiperSlide className="!flex !items-center !bg-content2">
                    <img
                      src={prod.imgBorsa3}
                      className="!w-full !h-[60%] min-[330px]:!h-[65%] min-[350px]:!h-[75%] min-[450px]:!w-[90%] min-[510px]:!w-[80%] min-[610px]:!w-[70%] min-[700px]:!w-[68%] mt-6"
                      alt="Product"
                    ></img>
                  </SwiperSlide>
                )}
                {prod.imgBorsa4 && (
                  <SwiperSlide className="!flex !items-center !bg-content2">
                    <img
                      src={prod.imgBorsa4}
                      className="!w-full !h-[60%] min-[330px]:!h-[65%] min-[350px]:!h-[75%] min-[450px]:!w-[90%] min-[510px]:!w-[80%] min-[610px]:!w-[70%] min-[700px]:!w-[68%] mt-6"
                      alt="Product"
                    ></img>
                  </SwiperSlide>
                )}
              </Swiper>
              <div className="w-full relative !z-50 !-top-[50%] !translate-y-[50%]">
                {currentSlideIndex < 3 ? (<ArrowDropdownDown className="w-5 min-[360px]:w-6 min-[640px]:w-7 cursor-pointer me-2 min-[400px]:me-4 min-[640px]:me-6 ms-auto -rotate-90" onClick={handleHorizontalArrowClick} />) : <div className="relative bottom-4 left-[17rem] h-[13px]"></div>}
              </div>
            </div>
            <div className="w-full md:mt-16 lg:mt-20 md:mb-16 lg:mb-[68px]">
            <div className="w-full flex flex-col justify-center my-[68px]">
              <p className={"text-xl sm:text-2xl text-center font-bold uppercase border-b-5 border-black pb-1 ps-[2px] tracking-wider " + prod.text}>{prod.title}</p>
              <p className="w-[90%] mx-auto text-center text-sm sm:text-base mt-4">{prod.description}</p>
              <p className="font-bold text-sm sm:text-base mt-4">€{prod.price}</p>
              <div className="bg-gray-200 h-[1px] mt-4"></div>
              <p className="font-semibold text-sm sm:text-base mt-4">SPECIFICHE</p>
              <div className="flex flex-col gap-2 mt-2">
                {prod.info1 && <p className="text-sm sm:text-base">- {prod.info1}</p>}
                {prod.info2 && <p className="text-sm sm:text-base">- {prod.info2}</p>}
                {prod.info3 && <p className="text-sm sm:text-base">- {prod.info3}</p>}
                {prod.info4 && <p className="text-sm sm:text-base">- {prod.info4}</p>}
                {prod.info5 ? <p className="text-sm sm:text-base">- {prod.info5}</p> : <p className="h-[20px] sm:h-[24px]"></p>}
                {prod.info6 ? <p className="text-sm sm:text-base">- {prod.info6}</p> : <p className="h-[20px] sm:h-[24px]"></p>}
                {prod.info7 ? <p className="text-sm sm:text-base">- {prod.info7}</p> : <p className="h-[20px] sm:h-[24px]"></p>}
                {prod.info8 ? <p className="text-sm sm:text-base">- {prod.info8}</p> : <p className="h-[20px] sm:h-[24px]"></p>}
              </div>
              <div className="w-full mt-4">
                <p>
                  <Button
                        variant="flat"
                        className="w-full text-white font-bold bg-green-500"
                        onClick={() => handleClick(prod)}
                      >
                        AGGIUNGI AL CARRELLO
                  </Button>
                </p>
              </div>
            </div>
          </div>
         </div>
         
    </>
  )
}

export default BorsaPage

