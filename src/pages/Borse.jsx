import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { ArrowDropdownDown } from "../components/icon/ArrowDropdownDown";
import { borseProdotti } from "../components/data/BorseProdotti";
import { categoriafiltro } from "../components/CategoriaFiltro";
import { lineafiltro } from "../components/LineaFiltro";
import { colorefiltro } from "../components/ColoreFiltro";
import { materialefiltro } from "../components/MaterialeFiltro";
import { prezzocrescentefiltro } from "../components/PrezzoCrecsenteFiltro";
import { useShop } from "../providers/ShopProvider";
import { NavLink } from "react-router-dom";

const Borse = () => {
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const [Linea, setLinea] = useState('Divine');
  const [Colore, setColore] = useState('Tutti');
  const [Materiali, setMateriali] = useState('Tutti');
  const [Ordina, setOrdina] = useState('Generale');
  const [arrowRotate, setArrowRotate] = useState(false);
  const [arrowRotate2, setArrowRotate2] = useState(false);
  const [arrowRotate3, setArrowRotate3] = useState(false);
  const [arrowRotate4, setArrowRotate4] = useState(false);

  const {handleClick} = useShop();

  /* const [activeCategory, setActiveCategory] = useState('tutti'); */

  /* const [search, setSearch] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchFilter(search);
  }
  const handleReset = () => {
    setSearch('');
    setSearchFilter('');
  } */


  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["CATEGORIA"])
  );
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const [selectedKeys2, setSelectedKeys2] = React.useState(new Set(["LINEA"]));
  const selectedValue2 = React.useMemo(
    () => Array.from(selectedKeys2).join(", ").replaceAll("_", " "),
    [selectedKeys2]
  );
  const [selectedKeys4, setSelectedKeys4] = React.useState(new Set(["ORDINA PER:"]));
  const selectedValue4 = React.useMemo(
    () => Array.from(selectedKeys4).join(", ").replaceAll("_", " "),
    [selectedKeys4]
  );
  const buttonSize = window.innerWidth < 768 ? "sm" : window.innerWidth < 1024 ? "md" : "lg";

  /* const Filtro1 = () => {
    setActiveCategory(selectedKeys);
    arrowRotate ? setArrowRotate(false) : setArrowRotate(true);
  } */

  return (
    <>
      <div className="w-full h-[100vh] overflow-hidden bg-[url('/foto_page_borse_mobile.jpg')] md:bg-[url('/foto_page_borse_desktop.jpg')] bg-no-repeat bg-210% min-[350px]:bg-190%% min-[450px]:bg-167% min-[540px]:bg-133% sm:bg-110% md:bg-150% lg:bg-110% bg-[center] sm:bg-[center_top_47%]">
        <div className="w-[88%] sm:w-[50%] text-center relative mx-auto top-[50%] -translate-y-[50%]">
          <div className="max-w-5xl">
            <p className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-white font-light font-['Open_Sans']">
              La nuova collezione
            </p>
            <p className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px] text-white font-['Algerian']">
              Nuances of divine comedy
            </p>
          </div>
        </div>
      </div>
      <div className="sticky top-[4rem] lg:top-[5rem] z-20 bg-white">
        <div className="h-12 md:h-14 lg:h-16 flex items-center w-full max-w-7xl my-0 mx-auto justify-between md:justify-normal min-[350px]:gap-2 px-2 min-[400px]:px-4 md:px-6 md:gap-4 lg:gap-6">
          <div className="hidden md:block flex-none mr-auto text-sm md:text-base lg:text-lg">
            Borse
          </div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                size={buttonSize}
                className="capitalize flex gap-1 font-bold text-xs min-[370px]:text-sm lg:text-base bg-transparent underline underline-offset-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-0"
                onClick={() =>
                  arrowRotate ? setArrowRotate(false) : setArrowRotate(true)
                }
              >
                <p className="mr-1">{selectedValue}</p>
                <ArrowDropdownDown
                  className={
                    "size-2 min-[370px]:size-3 md:size-4 relative top-[2px] " +
                    (arrowRotate ? "rotate-180" : "rotate-0")
                  }
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              {categoriafiltro.map(category => (
                <DropdownItem key={category.value} onClick={() => setActiveCategory(category.name)}>
                  <p className="text-sm lg:text-base">{category.name}</p>
                </DropdownItem>
              ))} 
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button
                size={buttonSize}
                className="capitalize flex gap-1 items-center font-bold text-xs min-[370px]:text-sm lg:text-base bg-transparent underline underline-offset-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-0"
                onClick={() =>
                  arrowRotate2 ? setArrowRotate2(false) : setArrowRotate2(true)
                }
              >
                {selectedValue2}
                <ArrowDropdownDown
                  className={
                    "size-2 min-[370px]:size-3 md:size-4 relative top-[2px] left-1 " +
                    (arrowRotate2 ? "rotate-180" : "rotate-0")
                  }
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys2}
              onSelectionChange={setSelectedKeys2}
            >
                {lineafiltro.map(category => (
                  <DropdownItem key={category.value} onClick={() => setLinea(category.name)}>
                    <p className="text-sm lg:text-base">{category.name}</p>
                  </DropdownItem>
                ))} 
            </DropdownMenu>
          </Dropdown>
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button
                size={buttonSize}
                className="capitalize max-w-max font-bold text-xs min-[370px]:text-sm lg:text-base bg-transparent underline underline-offset-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none p-0"
                onClick={() =>
                  arrowRotate3 ? setArrowRotate3(false) : setArrowRotate3(true)
                }
              >
                FILTRI
                <ArrowDropdownDown
                  className={
                    "size-2 min-[370px]:size-3 md:size-4 relative top-[2px] left-[2px] " +
                    (arrowRotate3 ? "rotate-180" : "rotate-0")
                  }
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <p className="text-lg ps-[3px] pb-2 collapse-title ms-[15px]">
                  COLORE
                </p>
                <div className="form-control grid grid-cols-2 gap-4 collapse-content">
                  {colorefiltro.map((category, index) => (
                    <>
                      <div className="form-control">
                        <label className="label cursor-pointer justify-normal">
                          <input type="radio" name="color" className="radio mx-2 h-5 w-5" key={category.name} defaultChecked={index === 0 && Colore === 'Tutti'} onChange={() => setColore(category.name)} />
                          <span className="label-text">{category.name}</span>
                        </label>
                      </div>
                    </>
                  ))} 
                </div>
              </div>
              <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <p className="text-lg ps-[3px] pb-2 collapse-title ms-[15px]">
                  MATERIALI
                </p>
                <div className="form-control grid grid-cols-2 gap-4 collapse-content text-sm lg:text-base">
                  {materialefiltro.map((category, index) => (
                      <>
                        <div className="form-control">
                          <label className="label cursor-pointer justify-normal">
                            <input type="radio" name="color" className="radio mx-2 h-5 w-5" key={category.name} defaultChecked={index === 0 && Materiali === 'Tutti'} onChange={() => setMateriali(category.name)} />
                            <span className="label-text">{category.name}</span>
                          </label>
                        </div>
                      </>
                    ))} 
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Dropdown>
            <DropdownTrigger>
              <Button
                size={buttonSize}
                className="capitalize flex items-center font-bold underline underline-offset-4 text-xs min-[370px]:text-sm lg:text-base px-0 bg-transparent transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                onClick={() =>
                  arrowRotate4 ? setArrowRotate4(false) : setArrowRotate4(true)
                }
              >
                <p className="p-0 mr-[3px] ml-[4px]">{selectedValue4}</p>
                <ArrowDropdownDown
                  className={
                    "size-2 min-[370px]:size-3 md:size-4 relative top-[2px] " +
                    (arrowRotate4 ? "rotate-180" : "rotate-0")
                  }
                />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys4}
              onSelectionChange={setSelectedKeys4}
            >
                {prezzocrescentefiltro.map(category => (
                  <DropdownItem key={category.value} onClick={() => setOrdina(category.name)}>
                    <p className="text-sm lg:text-base">{category.name}</p>
                  </DropdownItem>
                ))} 
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-3 px-6 bg-content1 mb-8">
        {borseProdotti 
          .filter(borse => {
                    return activeCategory === 'Tutti' || borse.categories.includes(activeCategory);
                  })
          .filter(linea => {
                    return Linea === 'Divine' || linea.categories.includes(Linea);
                  })
          .filter(colore => {
                    return Colore === 'Tutti' || colore.categories.includes(Colore);
                  })
          .filter(materiali => {
                    return Materiali === 'Tutti' || materiali.categories.includes(Materiali);
                  })
          .filter(ordina => {
                    return Ordina === 'Generale' || ordina.categories.includes(Ordina);
                  })
          .sort((a,b) => {
            if(selectedValue4 === "Prezzo-decrescente") {
              return b.price - a.price;
            }
            if(selectedValue4 === "Prezzo-crescente") {
              return a.price - b.price;
            }
            return 0;
          })
          .map((item, index) => (
          <>
              <div className="card w-full bg-base-100 shadow-large" key={index}>
                <NavLink to={`/borse/${item.id}`}>
                  <figure className={"bg-content1 bg-center bg-no-repeat bg-cover mt-5 lg:mt-6 " + item.bg + " " + item.dark}>
                    <img
                    className="w-full"
                      src={item.img}
                      alt={item.title}
                    />
                  </figure>
                </NavLink>
                <div className={"card-body p-3"}>
                  <div className="flex justify-between lg:py-2">
                    <h2 className={"card-title text-xs sm:text-sm lg:text-medium mb-0 " + item.text}>{item.title}</h2>
                    <p className="text-xs sm:text-sm text-right lg:text-medium font-bold ">{item.price.toLocaleString('it-IT', { minimumFractionDigits: 2 }) + "€"}</p>
                  </div>
                  <div className={"flex justify-between mt-3 " + item.class}>
                    <NavLink to={`/borse/${item.id}`}>
                      <Button
                        className="bg-gradient-to-r from-red-500 from-30% to-cyan-500 text-white text-xs sm:text-sm lg:text-medium min-[1320px]:text-medium xl:me-2"
                        variant="shadow"
                      >
                        Vedi Borsa
                      </Button>
                    </NavLink>
                    <Button className="text-white bg-green-500 lg:text-medium min-[1320px]:text-medium text-xs sm:text-sm xl:ms-2 justify-self-end" variant="shadow" onClick={() => {
                      // Aggiungi al carrello
                      handleClick(item);
                    }}>
                      Aggiungi al Carrello
                    </Button>
                  </div>
                </div>
              </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Borse;
