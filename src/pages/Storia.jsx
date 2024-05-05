const Storia = () => {
  return (
    <>
      <section id="hero" className="bg-[url('/foto_pagina_storia_nuances3.jpg')] sm:bg-[url('/foto_pagina_storia_nuances2.jpg')] lg:bg-[url('/foto_pagina_storia_nuances.jpg')] font-['Algerian'] text-white min-h-[100vh] flex justify-center items-center bg-no-repeat bg-190% min-[333px]:bg-170% min-[426px]:bg-133% sm:bg-190% md:bg-150% xl:bg-133% bg-[center] sm:bg-[center_top_47%]">
      <div className="max-w-7xl flex flex-col gap-8 text-center">
        <h1 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px]">Storia</h1>
      </div>
      </section>
      <section className="bg-white min-h-[70vh] grid lg:grid-cols-2 grid-cols-1 px-6 p-8 gap-4">
          <div className={"lg:h-[500px] w-full order-2"}>
                <img src={"/foto_pagina_storia_nuances.jpg"} className="h-full" />
          </div>
          <div className={"lg:h-[500px] w-full flex flex-col justify-center order-1"}>
            <p className="text-2xl md:text-3xl font-bold mb-4">Fondazione e Ambizione</p>
            <p className="text-base md:text-lg mb-1 lg:mb-0">Fondata nel cuore di Parigi nel 1980 da due audaci visionari, Jeanne Lefèvre e Louis Dubois, Nuances ha sempre incarnato l'eleganza senza tempo e la raffinatezza parigina. L'azienda è nata dalla convinzione ardente che le borse non siano solo accessori, ma veri e propri emblemi di stile e classe. Da allora, Nuances ha costantemente sfidato i confini della moda, abbracciando l'innovazione e l'artigianato di alta qualità per creare borse che incarnano la quintessenza del lusso parigino.</p>
          </div>
      </section>
      <section className="bg-white min-h-[70vh] grid lg:grid-cols-2 grid-cols-1 px-6 p-8 gap-4">
          <div className={"lg:h-[500px] w-full order-2 lg:order-1"}>
                <img src={"/foto_pagina_storia_nuances.jpg"} className="h-full" />
          </div>
          <div className={"lg:h-[500px] w-full flex flex-col justify-center order-1 lg:order-2"}>
            <p className="text-2xl md:text-3xl font-bold mb-4">Espansione Globale e Prestigio</p>
            <p className="text-base md:text-lg mb-1 lg:mb-0">Nel corso degli anni, l'aura di Nuances si è diffusa oltre i confini parigini, conquistando l'ammirazione di celebrità, iconi di stile e fashionista di tutto il mondo. Con collezioni iconiche che incarnano il perfetto equilibrio tra tradizione e modernità, Nuances ha stabilito salde radici nelle capitali della moda globale, da Milano a New York, da Tokyo a Londra. L'azienda è diventata sinonimo di prestigio, con le sue borse indossate con orgoglio sulle passerelle delle sfilate di moda più esclusive e nelle strade delle città più glamour.</p>
          </div>
      </section>
      <section className="bg-white min-h-[70vh] grid lg:grid-cols-2 grid-cols-1 px-6 p-8 gap-4">
          <div className={"lg:h-[500px] w-full order-2"}>
                <img src={"/foto_pagina_storia_nuances.jpg"} className="h-full" />
          </div>
          <div className={"lg:h-[500px] w-full flex flex-col justify-center order-1"}>
            <p className="text-2xl md:text-3xl font-bold mb-4">Impegno per l'Eccellenza e l'Innovazione</p>
            <p className="text-base md:text-lg mb-1 lg:mb-0">Guidata da una costante ricerca della perfezione e dell'eccellenza artigianale, Nuances continua a reinventarsi e a ridefinire gli standard della moda di lusso. La casa di moda investe in tecnologie all'avanguardia e collabora con talenti creativi di fama mondiale per mantenere viva la sua eredità di innovazione e stile senza tempo. Con una dedizione incrollabile alla qualità, all'etica e alla sostenibilità, Nuances si propone di rimanere un faro di eleganza e raffinatezza nel panorama della moda globale per le generazioni a venire.</p>
          </div>
      </section>
    </>
  );
};

export default Storia;
