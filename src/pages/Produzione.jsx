const Produzione = () => {
  return (
    <>
      <section id="hero" className="bg-[url('/foto_pagina_materiali_nuances3.jpg')] sm:bg-[url('/foto_pagina_materiali_nuances2.jpg')] lg:bg-[url('/foto_pagina_materiali_nuances.jpg')] font-['Algerian'] text-white min-h-[100vh] flex justify-center items-center bg-no-repeat bg-190% min-[333px]:bg-170% min-[426px]:bg-133% sm:bg-190% md:bg-150% xl:bg-133% bg-[center] sm:bg-[center_top_47%]">
      <div className="max-w-7xl flex flex-col gap-8 text-center">
        <h1 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[38px]">Produzione</h1>
      </div>
      </section>
      <section className="bg-white min-h-[70vh] grid lg:grid-cols-2 grid-cols-1 px-6 p-8 gap-4">
          <div className={"lg:h-[500px] w-full order-2"}>
                <img src={"/foto_pagina_storia_nuances.jpg"} className="h-full" />
          </div>
          <div className={"lg:h-[500px] w-full flex flex-col justify-center order-1"}>
            <p className="text-2xl md:text-3xl font-bold mb-4">Tradizione Artigianale e Maestria</p>
            <p className="text-base md:text-lg mb-1 lg:mb-0">La produzione presso Nuances è un'esperienza intrisa di tradizione artigianale e maestria senza tempo. Ogni borsa è il risultato di un processo meticoloso che inizia con la selezione delle materie prime più pregiate e si conclude con il tocco finale di abili artigiani. Le tecniche tradizionali si fondono con l'innovazione per creare pezzi unici che incarnano l'eleganza e lo stile distintivo di Nuances, riflettendo un'attenzione al dettaglio senza pari.</p>
          </div>
      </section>
      <section className="bg-white min-h-[70vh] grid lg:grid-cols-2 grid-cols-1 px-6 p-8 gap-4">
          <div className={"lg:h-[500px] w-full order-2 lg:order-1"}>
                <img src={"/foto_pagina_storia_nuances.jpg"} className="h-full" />
          </div>
          <div className={"lg:h-[500px] w-full flex flex-col justify-center order-1 lg:order-2"}>
            <p className="text-2xl md:text-3xl font-bold mb-4">Sostenibilità e Responsabilità Ambientale</p>
            <p className="text-base md:text-lg mb-1 lg:mb-0">In linea con i valori fondamentali di Nuances, la produzione avviene con un forte impegno per la sostenibilità e la responsabilità ambientale. L'azienda adotta pratiche eco-friendly lungo l'intera catena di approvvigionamento, dall'acquisizione delle materie prime alla distribuzione dei prodotti finiti. L'obiettivo è ridurre l'impatto ambientale, promuovere il benessere degli artigiani e contribuire a un futuro più sostenibile per il settore della moda.</p>
          </div>
      </section>
      <section className="bg-white min-h-[70vh] grid lg:grid-cols-2 grid-cols-1 px-6 p-8 gap-4">
          <div className={"lg:h-[500px] w-full order-2"}>
                <img src={"/foto_pagina_storia_nuances.jpg"} className="h-full" />
          </div>
          <div className={"lg:h-[500px] w-full flex flex-col justify-center order-1"}>
            <p className="text-2xl md:text-3xl font-bold mb-4">Innovazione Tecnologica e Creatività</p>
            <p className="text-base md:text-lg mb-1 lg:mb-0">La produzione presso Nuances è anche un crocevia di innovazione tecnologica e creatività senza limiti. L'azienda investe costantemente in tecnologie all'avanguardia e collabora con talenti creativi di fama mondiale per sviluppare nuove tecniche e design rivoluzionari. Questo approccio all'avanguardia si traduce in borse che sono vere opere d'arte, coniugando l'essenza della tradizione con la freschezza dell'innovazione per soddisfare i desideri dei clienti più esigenti.</p>
          </div>
      </section>
    </>
  );
};

export default Produzione;
