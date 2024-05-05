import React, { useState } from "react";
import { useShop } from "../providers/ShopProvider";
import { Button, Input, Pagination } from "@nextui-org/react";
import { DatePicker, InputNumber } from 'antd';
import { ArrowLeft } from "../components/icon/ArrowLeft";
import { NavLink, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

const Carrello = () => {
  const { borse, setBorse } = useShop();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [quantities, setQuantities] = useState(Array(borse.length).fill(1)); 
  const buttonSize = window.innerWidth < 768 ? "sm" : window.innerWidth < 1024 ? "md" : "lg";
  const buttonSize2 = window.innerWidth < 1024 ? "md" : "lg";
  const [formData, setFormData] = useState(null);

  const { register, handleSubmit, formState, control } = useForm({
    criteriaMode: "all",
  });

  console.log(formState);

  const onSubmit = (values) => {
    console.log(values);
    setFormData(values);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const inputSize = window.innerWidth < 768 ? 'sm' : (window.innerWidth < 1024 ? 'md' : 'lg');

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Torna alla pagina precedente
  };
  const handleQuantityChange = (value, index) => {
    const newQuantities = [...quantities]; // Copia dell'array delle quantità
    newQuantities[index] = value; // Aggiorna la quantità per l'indice specificato
    setQuantities(newQuantities); // Aggiorna lo stato delle quantità
  };
  const calculateSubtotal = () => {
    let subtotal = 0;
    borse.forEach((item, index) => {
      subtotal += item.price * quantities[index];
    });
    return subtotal.toFixed(2);
  };
  const getDeliveryDate = () => {
    const today = new Date(); // Ottieni la data corrente
    const deliveryDate = new Date(today.getTime() + (2 * 24 * 60 * 60 * 1000)); // Aggiungi due giorni
    const options = { weekday: 'short', day: 'numeric', month: 'numeric' };
    const deliveryDateString = deliveryDate.toLocaleDateString('it-IT', options); // Formatta la data in formato desiderato
    return deliveryDateString;
  };
  const getDeliveryDate2 = () => {
    const today = new Date(); // Ottieni la data corrente
    const deliveryDate = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000)); // Aggiungi due giorni
    const options = { weekday: 'short', day: 'numeric', month: 'numeric' };
    const deliveryDateString = deliveryDate.toLocaleDateString('it-IT', options); // Formatta la data in formato desiderato
    return deliveryDateString;
  };

  if (borse.length === 0) {
    return (
      <div className="text-center h-screen flex flex-col items-center justify-center">
        <p className="text-xl font-bold mb-4 lg:text-3xl lg:mb-6">Il carrello è vuoto</p>
        <NavLink to="/borse"><Button className="bg-green-500 text-white" size={buttonSize2}>ACQUISTA ORA</Button></NavLink>
      </div>
    );
  }

  
  return (
    <>
      <div className="flex flex-col gap-5 mt-20 mx-auto w-full max-w-7xl items-center">
        <div className="flex w-full relative lg:mt-6 lg:mb-3">
          <Button className="me-auto ms-4 w-4 h-7 mt-[2.5px] md:mt-[6.5px] lg:mt-2 bg-transparent" isIconOnly variant="flat" onClick={currentPage == 1 ? goBack : (() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))) }>
            <ArrowLeft className="w-3" />
          </Button>
          <Pagination
            total={3}
            page={currentPage}
            onChange={(newPage) => setCurrentPage(newPage)}
            size={buttonSize}
            radius="full"
            className="absolute top-0 left-[50%] transform -translate-x-1/2 mx-auto -z-50 md:pt-[11px]"
            classNames={{
              wrapper: "gap-6",
              item: "rounded-full bg-gray-300",
              cursor:"bg-green-500",
            }}
          />
        </div>
      </div>
      {/* Carrello smartphone sezione 1 */}
      {currentPage === 1 && (
        <>
          <div className="md:hidden">
            <p className="text-2xl font-bold text-center w-full max-w-7xl my-6">Carrello</p>
            <div className="grid grid-flow-row sm:grid-cols-2 gap-6 border-b-[1.5px] border-gray-300 mx-6 pb-6">
            {borse.map((item,index) => (
              <>
                <div className="card bg-base-100 flex-row max-w-7xl min-[500px]:mx-6 sm:mx-0" key={item.id}>
                  <figure className={"w-1/2 bg-center bg-no-repeat bg-cover p-2 min-[400px]:p-4 min-[500px]:p-8 sm:p-2 " + item.bg + " " + item.dark}>
                    <img
                      src={item.img}
                      alt={item.title}
                    />
                  </figure>
                  <div className="card-body p-4 w-1/2 min-[350px]:h-2/3 min-[350px]:my-auto flex flex-col justify-center items-start gap-4">
                    <h2 className={"card-title text-xs sm:text-sm lg:text-medium leading-5 " + item.text}>{item.title}</h2>
                    <InputNumber min={1} defaultValue={1} onChange={(value) => handleQuantityChange(value, index)}  size="large" changeOnWheel className="my-auto border-2 ps-4 border-black" />
                    <div>
                      <p className="text-xs sm:text-sm lg:text-medium font-bold">{(item.price * quantities[index]).toLocaleString('it-IT', { minimumFractionDigits: 2 })}€</p>
                    </div>
                  </div>
                </div>
              </>))}
            </div>
            <div className="flex justify-between px-6">
                <p className="text-xs sm:text-sm lg:text-medium font-bold my-4">Consegna prevista</p>
                <p className="text-xs sm:text-sm lg:text-medium my-4">{getDeliveryDate()} - {getDeliveryDate2()}</p>
            </div>
            <div className="h-[1.4px] bg-gray-300 mx-6 mb-2"></div>
            <div className="flex flex-col w-full pb-2 px-6">
              <p className="text-sm sm:text-medium lg:text-large my-[6px] mb-[10px] font-bold">Totale</p>
              <div className="flex justify-between">
                <p className="text-xs sm:text-sm lg:text-medium mb-2">Subtotale</p>
                <p className="text-xs sm:text-sm lg:text-medium">{parseFloat(calculateSubtotal()).toLocaleString('it-IT', { minimumFractionDigits: 2 })}€</p>
              </div>
              <div className="flex justify-between">
                <p className="text-xs sm:text-sm lg:text-medium">Spedizione</p>
                <p className="text-xs sm:text-sm lg:text-medium">0,00€</p>
              </div>
            </div>
            <div className="h-[1.4px] bg-gray-300 mx-6 mb-2"></div>
            <div className="flex justify-between w-full px-6">
                <p className="text-xs sm:text-sm lg:text-medium font-bold">Totale</p>
                <p className="text-xs sm:text-sm lg:text-medium font-bold">{parseFloat(calculateSubtotal()).toLocaleString('it-IT', { minimumFractionDigits: 2 })}€</p>
            </div>
            <div className="w-full px-6 mt-4 mb-8">
              <Button
                    variant="flat"
                    onPress={() => setCurrentPage((prev) => (prev < 3 ? prev + 1 : prev))}
                    className="w-full text-white font-bold bg-green-500"
                  >
                    VAI AL PAGAMENTO
              </Button>
            </div>
          </div>
        </>
      )}

      {/* carrello smartphone sezione 2 */}
      {currentPage === 2 && (
        <>
          <div className="max-w-7xl mx-auto">
            <p className="text-2xl font-bold text-center w-full max-w-7xl mt-6 mb-1">Pagamento</p>
            <p className="text-lg text-center w-full max-w-7xl mb-6">Seleziona il metodo di pagamento</p>
            <div className="grid grid-cols-3 gap-8 min-[550px]:gap-20 px-6 -mt-4 mb-4 max">
              <img src="/mastercard.png" className="w-full md:w-[70%] lg:w-[60%] mx-auto"></img>
              <img src="/paypal.png" className="w-full md:w-[70%] lg:w-[60%] mx-auto"></img>
              <img src="/visa.png" className="w-full md:w-[70%] lg:w-[60%] mx-auto"></img>
            </div>
            <div className="h-[1px] bg-gray-200 w-full"></div>
            <div className="mt-4 flex justify-between px-6 max-w-7xl">
              <p className="text-lg font-bold text-left w-full max-w-7xl mb-6">Totale</p>
              <p className="text-lg font-bold text-right w-full max-w-7xl mb-6">{parseFloat(calculateSubtotal()).toLocaleString('it-IT', { minimumFractionDigits: 2 })}€</p>
            </div>
            {/* Form telefono */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 mt-4 rounded-3xl grid grid-cols-2 gap-4 w-full mb-24"
            >
              {/* nome */}
              <div className="flex flex-col col-span-2 gap-4">
                <Input
                  size={inputSize}
                  {...register("nome", {
                    required: "Campo richiesto",
                  })}
                  type="text"
                  className="rounded-lg"
                  label="Nome"
                />
                {formState.errors.nome ? (
                  <p className="text-red-500">{formState.errors.nome.message}</p>
                ) : (<p className="text-red-500 w-full h-[24px]"></p>)}
              </div>
              {/* cognome */}
              <div className="flex flex-col col-span-2 gap-4">
                <Input
                  size={inputSize}
                  {...register("numero", {
                    required: "Campo richiesto",
                  })}
                  type="text"
                  className="rounded-lg"
                  label="Numero Carta"
                />
                {formState.errors.numero ? (
                  <p className="text-red-500">{formState.errors.numero.message}</p>
                ) : (<p className="text-red-500 w-full h-[24px]"></p>)}
              </div>

              {/* data */}
              <div className="flex flex-col col-span-2 min-[550px]:col-span-1 gap-4">
                <Controller
                  control={control}
                  name="data"
                  render={({ field: { onChange } }) => (
                <DatePicker
                  onChange={onChange}
                  size={inputSize}
                  className="rounded-lg border-transparent bg-[#f4f4f5] py-[14px] md:py-[18px] md:rounded-[14px] lg:py-[22px] lg:rounded-2xl"
                  label="Data"
                />
              )}
                />
                {formState.errors.data ? (
                  <p className="text-red-500">{formState.errors.data.message}</p>
                ) : (<p className="text-red-500 w-full h-[24px]"></p>)}
              </div>
      
              {/* CVV */}
              <div className="flex flex-col col-span-2 min-[550px]:col-span-1 gap-4">
                <Input
                  size={inputSize}
                  {...register("cvv", {
                    validate: {
                      cvvValidation: (value) => value.length ? (value.length === 3 && true) : "Il numero inserito non è corretto"
                    }
                  })}
                  type="text"
                  className="rounded-lg"
                  label="CVV"
                />
              {formState.errors.cvv && (
                <p className="text-red-500">{formState.errors.cvv.message}</p>
              )}
              </div>
              <Button onPress={formData && (() => setCurrentPage((prev) => (prev < 3 ? prev + 1 : prev)))} type="submit" className="bg-green-500 p-4 h-[65px] rounded-2xl text-white font-bold text-sm md:text-base lg:text-lg col-span-2">
                PAGA {parseFloat(calculateSubtotal()).toLocaleString('it-IT', { minimumFractionDigits: 2 })}€
              </Button>
            </form>
          </div>
        </>
      )}

      {currentPage === 3 && (
        <div className="h-[80vh] flex justify-center items-center">
          <div className>
            <img src="verified.png" className="size-36 mx-auto"></img>
            <p className="text-2xl lg:text-5xl font-bold">Grazie per il tuo acquisto!</p>
          </div>
        </div>
      )}

      {/* Carrello tablet & computer */}
      {currentPage === 1 && (
        <>
          <div className="hidden md:block bg-gray-300 mb-16">
            <p className="text-2xl md:text-3xl font-bold text-center w-full max-w-7xl mx-auto mt-6 pt-4">Carrello</p>
            <div className="flex w-full max-w-7xl gap-4 mx-auto">
              <div className="grid grid-flow-row grid-cols-1 gap-6 w-[62%] min-[900px]:w-[60%] border-b-[1.5px] ms-6 min-[900px]:me-4 py-6 rounded-lg">
              {borse.map((item,index) => (
                <>
                  <div className="card bg-base-100 flex-row max-w-7xl min-[500px]:mx-6 sm:mx-0" key={index}>
                    <figure className={"w-1/2 bg-center bg-no-repeat bg-cover p-2 min-[400px]:p-4 min-[500px]:p-8 sm:p-2 " + item.bg + " " + item.dark}>
                      <img
                        src={item.img}
                        alt={item.title}
                      />
                    </figure>
                    <div className="card-body p-4 w-1/2 min-[350px]:h-2/3 min-[850px]:h-1/3 min-[350px]:my-auto flex flex-col justify-center items-start gap-4">
                      <h2 className={"card-title text-xs sm:text-sm lg:text-medium leading-5 " + item.text}>{item.title}</h2>
                      <InputNumber min={1} defaultValue={1} onChange={(value) => handleQuantityChange(value, index)}  size="large" changeOnWheel className="my-auto border-2 ps-4 border-black" />
                      <div>
                        <p className="text-xs sm:text-sm lg:text-medium font-bold">{(item.price * quantities[index]).toLocaleString('it-IT', { minimumFractionDigits: 2 })}€</p>
                      </div>
                    </div>
                  </div>
                </>))}
              </div>
              <div className="flex flex-col w-[38%] min-[900px]:w-[40%] h-max mt-6 me-6 rounded-lg px-6 bg-white sticky top-[7rem] z-20">
                <div className="flex justify-between">
                    <p className="text-xs sm:text-sm lg:text-medium font-bold my-4">Consegna prevista</p>
                    <p className="text-xs sm:text-sm lg:text-medium my-4">{getDeliveryDate()} - {getDeliveryDate2()}</p>
                </div>
                <div className="h-[1.4px] bg-gray-300 mb-2"></div>
                <div className="flex flex-col w-full pb-2">
                  <p className="text-sm sm:text-medium lg:text-large my-[6px] mb-[10px] font-bold">Totale</p>
                  <div className="flex justify-between">
                    <p className="text-xs sm:text-sm lg:text-medium mb-2">Subtotale</p>
                    <p className="text-xs sm:text-sm lg:text-medium">{parseFloat(calculateSubtotal()).toLocaleString('it-IT', { minimumFractionDigits: 2 })}€</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs sm:text-sm lg:text-medium">Spedizione</p>
                    <p className="text-xs sm:text-sm lg:text-medium">0,00€</p>
                  </div>
                </div>
                <div className="h-[1.4px] bg-gray-300 mb-2"></div>
                <div className="flex justify-between w-full">
                    <p className="text-xs sm:text-sm lg:text-medium font-bold">Totale</p>
                    <p className="text-xs sm:text-sm lg:text-medium font-bold">{parseFloat(calculateSubtotal()).toLocaleString('it-IT', { minimumFractionDigits: 2 })}€</p>
                </div>
                <div className="w-full mt-6 mb-6">
                  <Button
                        variant="flat"
                        onPress={() => setCurrentPage((prev) => (prev < 3 ? prev + 1 : prev))}
                        className="w-full text-white font-bold bg-green-500"
                      >
                        VAI AL PAGAMENTO
                  </Button>
              </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Carrello;
