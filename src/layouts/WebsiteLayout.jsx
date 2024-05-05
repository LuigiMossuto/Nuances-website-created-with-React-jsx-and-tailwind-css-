import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const WebsiteLayout = () => {
  return (
    <>
      <Header />
        <Outlet />
        <ScrollRestoration />
      <Footer />
    </>
  );
};

export default WebsiteLayout;
