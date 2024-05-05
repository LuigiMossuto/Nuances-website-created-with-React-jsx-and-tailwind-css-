import { NavLink } from "react-router-dom";
import {Facebook} from "../components/icon/Facebook";
import {Instagram} from "../components/icon/Instagram";
import {Threads} from "../components/icon/Threads";
import {Xtwitter} from "../components/icon/Xtwitter";
import {Youtube} from "../components/icon/Youtube";
import { Logo } from "./icon/Logo";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { MdEmail } from 'react-icons/md';

const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const inputSize = window.innerWidth < 768 ? 'sm' : (window.innerWidth < 1024 ? 'md' : 'lg');

const Footer = () => {
  const { register, handleSubmit, formState } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  
  
  return (
    <>
      <footer className="bg-base-200">
        <div className="w-full max-w-7xl mx-auto text-base-content p-10 px-6 gap-4 justify-between hidden sm:flex">
          <div className="flex flex-col gap-8 footer">
            <nav>
              <h6 className="footer-title mb-0 text-[1rem] lg:text-lg">Services</h6>
              <NavLink to="#" className="text-medium lg:text-lg">Borse</NavLink>
            </nav>
            <nav className="text-center min-[400px]:ms-7 sm:ms-0">
              <h6 className="footer-title mb-0 text-[1rem] text-left w-full lg:text-lg">Company</h6>
              <NavLink to="#" className="text-medium text-left w-full lg:text-lg">La nostra storia</NavLink>
              <NavLink to="#" className="text-medium text-left w-full lg:text-lg">Produzione</NavLink>
              <NavLink to="#" className="text-medium text-left w-full lg:text-lg">Sostenibilit&agrave;</NavLink>
            </nav>
            <nav>
              <h6 className="footer-title mb-0 text-[1rem] text-left w-full lg:text-lg">Legal</h6>
              <NavLink to="#" className="text-medium w-full text-left lg:text-lg">Terms of use</NavLink>
              <NavLink to="#" className="text-medium w-full text-left lg:text-lg">Privacy policy</NavLink>
              <NavLink to="#" className="text-medium w-full text-left lg:text-lg">Cookie policy</NavLink>
            </nav>
          </div>
          <form className="flex flex-col gap-2 w-full items-center bg-white p-6 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
            <nav className="w-full my-auto">
              <h6 className="footer-title mb-4 text-[1rem] text-center w-full lg:text-lg">Newsletter</h6>
                  <div className="relative w-full">
                    <Input
                      size={inputSize}
                      {...register("email", {
                        validate: {
                          isEmail: (value) =>
                            emailValidation.test(value) || "Email non valida",
                        },
                      })}
                      type="text"
                      className="rounded-lg bg-transparent shadow-lg !border-none w-full"
                      label="Email"
                    />
                    {formState.errors.email ? (
                      <p className="text-red-500 mb-2">{formState.errors.email.message}</p>
                    ) : (<p className="text-red-500 w-full h-[32px]"></p>)}
                  </div>
                  <Button className="bg-black border-none hover:opacity-80 hover:!bg-black w-full text-white hover:!text-white font-bold flex items-center justify-center gap-2 h-10 lg:h-14" size={inputSize}>
                    <MdEmail />
                    <span>Iscrivimi</span>
                  </Button>
            </nav>
          </form>
        </div>
        <div className="w-full max-w-7xl mx-auto text-base-content footer p-10 px-6 flex flex-col flex-wrap sm:hidden">
          <div className="w-full flex justify-between">
            <nav className="flex flex-col gap-2">
              <h6 className="footer-title mb-0 text-[1rem] lg:text-lg">Services</h6>
              <NavLink to="#" className="text-medium lg:text-lg">Borse</NavLink>
            </nav>
            <nav className="flex flex-col gap-2">
              <h6 className="footer-title mb-0 text-[1rem] text-right w-full lg:text-lg">Company</h6>
              <NavLink to="#" className="text-medium text-right w-full lg:text-lg">La nostra storia</NavLink>
              <NavLink to="#" className="text-medium text-right w-full lg:text-lg">Produzione</NavLink>
              <NavLink to="#" className="text-medium text-right w-full lg:text-lg">Sostenibilit&agrave;</NavLink>
            </nav>
          </div>
          <div className="flex justify-between w-full">
            <nav className="flex flex-col gap-2">
              <h6 className="footer-title mb-0 text-[1rem] text-left w-full lg:text-lg">Legal</h6>
              <NavLink to="#" className="text-medium w-full text-left lg:text-lg">Terms of use</NavLink>
              <NavLink to="#" className="text-medium w-full text-left lg:text-lg">Privacy policy</NavLink>
              <NavLink to="#" className="text-medium w-full text-left lg:text-lg">Cookie policy</NavLink>
            </nav>
            <nav className="flex flex-col gap-2">
              <h6 className="footer-title mb-2 text-[1rem] text-right w-full lg:text-lg">Newsletter</h6>
              <div className="flex flex-col gap-4">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <Input
                      size={inputSize}
                      {...register("email", {
                        validate: {
                          isEmail: (value) =>
                            emailValidation.test(value) || "Email non valida",
                        },
                      })}
                      type="text"
                      className="rounded-lg bg-white shadow-lg border-none"
                      label="Email"
                    />
                    {formState.errors.email ? (
                      <p className="text-red-500">{formState.errors.email.message}</p>
                    ) : (<p className="text-red-500 w-full h-[24px]"></p>)}
                  </div>
                    <Button className="bg-black border-none hover:opacity-80 hover:!bg-black text-white hover:!text-white font-bold flex items-center justify-center gap-2 h-10" size={inputSize}><MdEmail /><span>Iscrivimi</span></Button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </footer>
      <footer className="w-full border-t bg-slate-700 border-base-300">
        <div className="footer px-6 w-full max-w-7xl mx-auto text-base-content py-4">
          <aside className="items-center justify-between grid-flow-col w-full">
            <div className="flex gap-2 mr-2 min-[360px]:mr-0 min-[400px]:gap-4">
                <NavLink to="https://www.facebook.com/">
                  <Facebook className="size-[18px] min-[400px]:w-5 min-[400px]:h-[21px] lg:w-6 lg:h-[24px] lg:mt-[1px] fill-white"/>
                </NavLink>
                <NavLink to="https://www.instagram.com/">
                  <Instagram className="size-[18px] min-[400px]:w-5 min-[400px]:h-[21px] lg:w-6 lg:h-[25px] fill-white"/>
                </NavLink>
                <NavLink to="https://www.threads.net/login">
                  <Threads className="size-[18px] min-[400px]:w-5 min-[400px]:h-[21px] lg:w-6 lg:h-[25px] fill-white"/>
                </NavLink>
                <NavLink to="https://twitter.com/login">
                  <Xtwitter className="size-[18px] min-[400px]:w-5 min-[400px]:h-[21px] lg:w-6 lg:h-[25px] fill-white"/>
                </NavLink>
                <NavLink to="https://www.youtube.com/">
                  <Youtube className="size-[18px] min-[400px]:w-5 min-[400px]:h-[21px] lg:w-6 lg:h-[25px] fill-white"/>
                </NavLink>
              </div>
              <p className="text-white text-right max-w-[160px] text-[0.8rem] lg:text-[0.9rem] md:max-w-max md:text-center md:mr-6 md:flex md:items-center">
              Copyright © 2024 <br />
              All right reserved by Nuances Industries Ltd
              </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end mx-auto md:mr-0">
            <Logo className="fill-white w-[7rem] lg:w-[9rem] mr-2 min-[400px]:w-[8rem] md:mr-1"/>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
