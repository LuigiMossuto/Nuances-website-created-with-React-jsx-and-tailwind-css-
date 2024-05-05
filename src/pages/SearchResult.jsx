import { NavLink, useLocation } from 'react-router-dom';
import { borseProdotti } from '../components/data/BorseProdotti';
import { useShop } from '../providers/ShopProvider';
import { Button } from '@nextui-org/react';

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';

  const filteredResults = borseProdotti.filter(borsa => {
    const titleLower = borsa.title.toLowerCase();
    const descriptionLower = borsa.description.toLowerCase();
    const categoriesLower = Array.isArray(borsa.categories)
        ? borsa.categories.some(category => category.toLowerCase().includes(query.toLowerCase()))
        : false;

    // Dividi la query in singole parole
    const queryWords = query.toLowerCase().split(' ');

    // Verifica se ogni parola della query è inclusa nella descrizione
    const descriptionMatches = queryWords.every(word => descriptionLower.includes(word));

    return titleLower.includes(query.toLowerCase()) || descriptionMatches || categoriesLower;
});


  const {handleClick} = useShop();

  return (
    <>
        <div className="w-full h-[100vh] overflow-hidden bg-[url('/foto_page_borse_mobile.jpg')] md:bg-[url('/foto_page_borse_desktop.jpg')] bg-no-repeat bg-210% min-[350px]:bg-190%% min-[450px]:bg-167% min-[540px]:bg-133% sm:bg-110% md:bg-150% lg:bg-110% bg-[center] sm:bg-[center_top_47%]">
            <div className="w-[88%] sm:w-[50%] text-center relative mx-auto top-[50%] -translate-y-[50%]">
            <div className="max-w-5xl">
                <p className="text-[28px] sm:text-[33px] md:text-[36px] lg:text-[39px] xl:text-[45px] text-white font-['Algerian']">
                {query}
                </p>
            </div>
            </div>
        </div>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 bg-content1 mb-8 mt-[34px]">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
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
                        <Button className="text-white bg-green-500 lg:text-medium min-[1320px]:text-medium text-xs sm:text-sm xl:ms-2 justify-self-end" variant="shadow" onClick={() => handleClick(item)}>
                            Aggiungi al Carrello
                        </Button>
                        </div>
                    </div>
                </div>
              </>
            ))
          ) : (
            <p>Nessuna borsa trovata</p>
          )}
        </div>
    </>
  );
};

export default SearchResults;
