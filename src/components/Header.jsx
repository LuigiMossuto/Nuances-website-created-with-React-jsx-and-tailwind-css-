import {Navbar,NavbarBrand,NavbarContent,NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, useDisclosure, Modal, ModalContent, ModalHeader, Input, ModalBody, ModalFooter,} from "@nextui-org/react";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {Avatar} from "@nextui-org/react";
import { useTheme } from "../providers/ThemeProviders";
import {Carrello} from "./icon/Carrello";
import { MoonIcon } from "./icon/MoonIcon";
import SearchIcon from "./icon/SearchIcon";
import { SunIcon } from "./icon/SunIcon";
import { Close } from "./icon/Close";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo } from "./icon/Logo";
import { useShop } from "../providers/ShopProvider";
import { Button } from "@nextui-org/react";
import { borseProdotti } from "./data/BorseProdotti";
/* import { useScroll } from "framer-motion"; */

const Header = () => {
    const {darkMode, setDarkMode} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [bgHeader, setBgHeader] = useState(false);
    const { scrollY } = useScroll();
    const {borse} = useShop();
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
    let location = useLocation();
    const buttonSize = window.innerWidth < 768 ? "sm" : window.innerWidth < 1024 ? "md" : "lg";
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [size, setSize] = useState('2xl')
    const navigate = useNavigate();
    const [quantities, setQuantities] = useState(Array(borse.length).fill(1)); 

    const handleOpen = (size) => {
      setSize(size);
      window.innerWidth < 1024 ? setSize('xl') : ('2xl');
      onOpen();
    };

    const [search, setSearch] = useState('');

    const filteredSearch = search.trim() === '' ? [] : borseProdotti.filter((prod) => {
      return prod && prod.title && prod.title.toLowerCase().includes(search.toLowerCase());
    });

    const handleReset = () => {
      setSearch('');
    };
    const variants = ["underlined"];
    

    const handleSearchSubmit = (event) => {
      event.preventDefault();
      navigate(`/search?q=${search}`);
      onClose();
    };
    const handleSubmitAndClose = () => {
      handleSearchSubmit({ preventDefault: () => {} });
      onClose();
    };



    React.useEffect(() => {
      // Google Analytics
      if(location.pathname === '/il_mondo_nuances' || location.pathname === '/storia' || location.pathname === '/materiali' || location.pathname === '/carrello' || location.pathname === '/contatti' || location.pathname.startsWith('/borse/') || location.pathname === '/search') {
        setBgHeader(true);
      }
      else {
        setBgHeader(false);
      }
    }, [location]);
    useMotionValueEvent(scrollY, "change", (latest) => {
      setBgHeader(latest > 0);
      if(location.pathname === '/il_mondo_nuances' || location.pathname === '/storia' || location.pathname === '/materiali' || location.pathname === '/carrello' || location.pathname === '/contatti' || location.pathname.startsWith('/borse/')) {
        setBgHeader(true);
      }
    })

    const pageShouldHide = () => {
      if(location.pathname === '/borse' || location.pathname === '/contatti' || location.pathname.startsWith('/borse/') || location.pathname === '/search') {
        return false;
      }
      if(location.pathname === '/carrello') {
        return false;
      }
      else {
        return true;
      }
    }
    

    const menuItems = [
       {
        name:'Home',
        path: '/',
        onClick: () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
       },
       {
        name:'Borse',
        path: '/borse',
        onClick: () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
       },
       {
        name:'Carrello',
        path: '/carrello',
        onClick: () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
       },
       {
        name:'Il Mondo Nuances',
        path: '/il_mondo_nuances',
        onClick: () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
       },
       {
        name:'Contatti',
        path: '/contatti',
        class:' md:hidden',
        onClick: () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
       },
    ];

  return (
    <Navbar isBlurred={false} shouldHideOnScroll={pageShouldHide()} maxWidth="xl" classNames={{wrapper:"px-2 min-[380px]:px-6"}} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className={"lg:h-20 fixed backdrop-blur-none backdrop-saturate-100 z-50 " + (bgHeader ? "bg-black" : "bg-transparent")}>
      <NavbarContent justify="start" className="hidden md:flex">
        <NavbarItem className="font-bold text-sm lg:text-base text-white">
            <NavLink to={"/contatti"}>Contatti</NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarBrand className="md:hidden">
       <NavLink to="/"><Logo className="w-40 me-auto sm:w-52 md:m-0 fill-white" /></NavLink>
      </NavbarBrand>
      <NavbarBrand className="hidden md:block">
        <NavLink to="/"><Logo className="sm:w-52 md:m-0 md:mx-auto lg:w-60 fill-white" /></NavLink>
      </NavbarBrand>
      <NavbarContent className="flex gap-3 sm:gap-4 lg:gap-5 w-max flex-initial" justify="end">
      <NavbarItem className="max-w-max">
          <div className="bg-transparent bg-none cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <MoonIcon className="size-5 sm:size-6 lg:size-[30px] text-white" /> : <SunIcon className="size-5 sm:size-6 lg:size-[30px] text-white" /> }
          </div>
        </NavbarItem>
        <NavbarItem>
          <div className="dropdown dropdown-end min-[500px]:left-0 max-w-max">
            <div tabIndex={0} role="button" className="btn-ghost btn-circle max-w-max h-2 hover:bg-transparent">
              <div onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)} className="indicator">
                <Carrello className="w-4 sm:w-[18px] lg:w-[22px] mt-1 fill-white hover:bg-transparent"/>
                <span className="badge badge-sm sm:mt-1 indicator-item bg-green-400 border-none text-white">{borse.length}</span>
              </div>
            </div>
            <div tabIndex={0} className={`mt-7 sm:mt-8 lg:mt-9 z-[1] card card-compact dropdown-content !right-[-71px] w-[300px] min-[500px]:w-[360px] bg-base-100 shadow ${isCartDropdownOpen ? 'block' : 'hidden'}`}>
              {isCartDropdownOpen && (
                <div className="card-body">
                  <span className="font-bold text-lg">Prodotti nel carrello</span>
                  <div>
                    {borse.map((prodotto, index) => (
                      <div key={index} className="flex justify-normal min-[500px]:justify-between items-center gap-2 mb-2 -ms-[10px]">
                        <img src={prodotto.img} className="size-20 min-[500px]:size-32"></img>
                        <div className="flex gap-2">
                          <span className={"text-base " + prodotto.text}>{prodotto.title}</span>
                          <span className="font-bold mt-[2.5px]">{prodotto.price.toLocaleString('it-IT', { minimumFractionDigits: 2 }) + "€"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="card-actions">
                    <NavLink to="/carrello"><button className="btn bg-green-500 btn-block mx-auto text-white" onClick={() => setIsCartDropdownOpen(false)}>Vedi carrello</button></NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </NavbarItem>
        <NavbarItem>
          <NavLink>
            <Avatar showFallback className="w-5 sm:w-6 h-5 sm:h-6 lg:w-7 lg:h-7 dark" src='https://images.unsplash.com/broken' />
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <Button size={buttonSize} isIconOnly className="bg-transparent rounded-full -ms-[8px] -me-[4px] sm:-ms-[6px] sm:-me-[5px] lg:-ms-[11px] lg:-me-[12px]" onPress={() => handleOpen(size)}><SearchIcon className="w-[22px] -mt-[1px] sm:w-[24px] sm:-mt-0 lg:w-[28px] fill-white" /></Button>
          <Modal 
            size={size} 
            isOpen={isOpen} 
            onClose={onClose}
            className={window.innerWidth < 640 ? "modal-center" : ""}
            >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col pb-0">
                    <form onSubmit={handleSearchSubmit} className="flex w-full justify-between items-center" >
                      <div className="w-[83%]">
                        <div className="w-full flex">
                          {variants.map((variant) => (
                            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                              <Input  value={search} onChange={(event) => setSearch(event.target.value)} type="text" variant={variant} label="Che cosa cerchi?" />
                            </div>
                          ))}  
                        </div> 
                      </div>
                      <button
                        type="reset"
                        onClick={handleReset}
                        className=" flex text-sm items-center justify-center text-black underline underline-offset-2 md:!mt-[36px] lg:mr-[16px] max-[768px]:mt-[13px] ps-2"
                      >CANCELLA</button>
                    </form>
                  </ModalHeader>
                  <ModalBody>
                    <div className="grid grid-cols-4 gap-4 max-w-lg">           
                    {filteredSearch.length > 0 && filteredSearch.map((filt) => (
                        <NavLink to={`/borse/${filt.id}`} onClick={onClose} key={filt.id}>
                            <div>
                                <img src={filt.img} alt={filt.title}/>
                                <p className="text-center">{filt.title}</p>
                                <hr/>
                            </div>
                        </NavLink>
                    ))}
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={handleSubmitAndClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
        <NavbarItem isActive className="-me-[10px] sm:m-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="w-5 sm:w-6 h-5 sm:h-6 lg:w-7 lg:h-7 text-white"
            size="lg"
          />
        </NavbarItem>
        <NavbarItem className="lg:mt[2px]" >
            <NavbarMenuToggle 
                className="hidden sm:block -ms-2 font-bold w-max mb-[3px] text-sm lg:text-base text-white"
                icon="MENU">
            </NavbarMenuToggle>
        </NavbarItem>
      </NavbarContent>
        <NavbarMenu motionProps={{initial:{opacity: 0}, animate:{opacity:1}, exit:{opacity: 0}}} className="max-full my-0 mx-auto pt-4 text-white mr-0 !h-[100vh] top-0 z-[100] bg-black/60 sticky">
          <motion.div initial={{x:'100%'}} animate={{x:'0'}} exit={{x:'100%'}} transition={{type: 'tween', duration: 0.8}} className="w-full md:max-w-[50%] lg:max-w-[43%] min-[1100px]:max-w-[40%] bg-white absolute h-screen top-0 right-0">
            <div className="btn-circle bg-black size-12 hover:scale-85 duration-300 ease-in-out transition ml-auto flex items-center m-4" onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}><Close className="fill-white size-4 mx-auto"/></div>
              {menuItems.map(menu => (
              <NavbarMenuItem key={menu.name} className="w-full text-black ml-20 lg:text-2xl !leading-[3rem] font-semibold">
                  <NavLink
                  to={menu.path}
                  className={({isActive }) => isActive ? 'font-bold border-b-2 border-black' : '' + menu.class}
                  key={menu.name}
                  onClick={menu.onClick}
                  >
                  {menu.name}
                  </NavLink>
              </NavbarMenuItem>
              ))}
              <NavbarMenuItem className="relative top-[15rem]">
                <ul className="flex flex-col gap-4 ml-20">
                  <NavLink className={"max-w-max"}><li className="border-b border-black text-black text-lg">Effettua il login</li></NavLink>
                  <NavLink className={"max-w-max"}><li className="border-b border-black text-black text-lg">Contattaci</li></NavLink>
                  <NavLink to="tel:+393257659081" className={"max-w-max"}><li className="border-b border-black text-black text-lg">{"+39" + " " + "3257659081"}</li></NavLink>
                </ul>
              </NavbarMenuItem>
          </motion.div>
        </NavbarMenu>
    </Navbar>
  )
}

export default Header