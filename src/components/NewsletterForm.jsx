import { Checkbox, Input } from "@nextui-org/react";
/* import { useState } from "react"; */
import { Controller, useForm } from "react-hook-form";



const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const telefonoValidation = /[0-9]/;

const inputSize = window.innerWidth < 768 ? 'sm' : (window.innerWidth < 1024 ? 'md' : 'lg');

const NewsletterForm = () => {
  const { register, handleSubmit, formState, control } = useForm({
    criteriaMode: "all",
  });

  console.log(formState);

  const onSubmit = (values) => {
    console.log(values);
  };

  /* const [checkbox, setCheckbox] = useState(false); */
  return (
    <div className="bg-[url('/foto_newsletter2.jpg')] md:bg-[url('/foto_newsletter.jpg')] h-auto bg-564% min-[440px]:bg-433% min-[570px]:bg-342% md:bg-197% lg:bg-170% min-[1450px]:bg-167% bg-no-repeat bg-[center_81%] md:bg-[88%_50%] min-[980px]:bg-[88%_48%] lg:bg-[100%_47%] min-[1450px]:bg-[100%_43%] flex flex-col items-center mt-14">
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-[19px] sm:text-[23px] md:text-[26px] lg:text-[30px] xl:text-[34px] font-['Algerian'] text-center text-white mt-2">
          Rimani connesso
        </h1>
        <h2 className="text-center text-white sm:text-[18px] xl:text-[22px]">Ricevi il 5% sconto</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 mt-4 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-24"
        >
          {/* nome */}
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
            <Input
              size={inputSize}
              {...register("cognome", {
              })}
              type="text"
              className="rounded-lg mb-10"
              label="Cognome"
            />
          </div> 
          {/* email */}
          <div className="flex flex-col gap-4">
            <Input
              size={inputSize}
              {...register("email", {
                required: "Campo richiesto",
                validate: {
                  isEmail: (value) =>
                    emailValidation.test(value) || "Email non valida",
                },
              })}
              type="text"
              className="rounded-lg"
              label="Email"
            />
            {formState.errors.email ? (
              <p className="text-red-500">{formState.errors.email.message}</p>
            ) : (<p className="text-red-500 w-full h-[24px]"></p>)}
          </div>
  
          {/* telefono */}
          <div className="flex flex-col gap-4">
            <Input
              size={inputSize}
              {...register("telefono", {
                validate: {
                  telefonoValidation: (value) => value.length ? (telefonoValidation.test(value) || "Il numero di telefono deve essere composto da soli numeri") : true,
                  telefonoValidation2: (value) => value.length ? (value.length < 10 ? "Il numero inserito è inferiore a 10 cifre" : true) : true
                }
              })}
              type="text"
              className="rounded-lg"
              label="Telefono"
            />
          {formState.errors.telefono && (
            <p className="text-red-500">{formState.errors.telefono.message}</p>
          )}
          </div>
          <Controller
        control={control}
        name="privacy"
        rules={{
          required: "Accetta l'utilizzo dei tuoi dati",
        }}
        render={({ field: { onChange, value } }) => (
          <Checkbox
              type="checkbox"
              isSelected={value}
              onChange={onChange}
              >
              Accetta la privacy
          </Checkbox>
        )}
      />
          
          {formState.errors.privacy  ? (
              <p className="text-red-500">{formState.errors.privacy.message}</p>
            ) : (<p className="text-red-500 h-[24px] w-full"></p>)}
          <button type="submit" className="bg-gradient-to-r from-red-500 from-20% to-sky-500 p-4 rounded-xl hover:from-teal-600 hover:to-emerald-500 text-white md:col-span-2 font-bold text-sm md:text-base lg:text-lg">
            ISCRIVITI
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
