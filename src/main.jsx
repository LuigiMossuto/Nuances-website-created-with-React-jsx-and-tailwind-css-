import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import WebsiteLayout from './layouts/WebsiteLayout';
import HomePage from './pages/HomePage';
import {NextUIProvider} from "@nextui-org/react";
import ThemeProviders from './providers/ThemeProviders';
import Borse from './pages/Borse';
import Carrello from './pages/Carrello';
import IlMondoNuances from './pages/IlMondoNuances';
import Sostenibilita from './pages/Sostenibilita';
import Storia from './pages/Storia';
import ShopProvider from './providers/ShopProvider';
import BorsaPage from './providers/BorsaPage';
import SearchResults from './pages/SearchResult';
import Contatti from './pages/Contatti';
import Produzione from './pages/Produzione';

/* const addToCart = (product) => {
  // Implementa la logica per aggiungere il prodotto al carrello
  console.log("Prodotto aggiunto al carrello:", product);
}; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'borse',
        element: <Borse/>,
        children: [
          
        ]
      },
      {
        path: 'carrello',
        element: <Carrello/>,
      },
      {
        path: 'il_mondo_nuances',
        element: <IlMondoNuances/>,
      },
      {
        path: 'sostenibilita',
        element: <Sostenibilita/>,
      },
      {
        path: 'storia',
        element: <Storia/>,
      },
      {
        path: 'produzione',
        element: <Produzione/>,
      },
      {
        path: 'borse/:id',
        element: <BorsaPage />
      },
      {
        path: 'search',
        element: <SearchResults />
      },
      {
        path: 'contatti',
        element: <Contatti />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProviders>
      <ShopProvider>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </ShopProvider>
    </ThemeProviders>
  </React.StrictMode>,
)
