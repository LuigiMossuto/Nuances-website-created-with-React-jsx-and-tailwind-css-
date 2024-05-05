import { useEffect } from 'react';

const Contatti = () => {
  useEffect(() => {
    // Funzione per caricare la libreria di Google Maps
    const loadGoogleMaps = () => {
      // Verifica che google.maps sia definito
      if (!window.google || !window.google.maps) {
        // Se non è definito, carica la libreria
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBD7yebRDMHHJbuSEKLkc9-6UMhuiyAkmc`;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        // Se è già definito, inizializza la mappa direttamente
        initMap();
      }
    };

    // Funzione per inizializzare la mappa
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.9028, lng: 12.4964 },
        zoom: 6,
        zoomcontrol: true,
      });

      const cities = [
        { name: 'Firenze', coordinates: { lat: 43.7696, lng: 11.2558 } },
        { name: 'Milano', coordinates: { lat: 45.4642, lng: 9.1900 } },
        { name: 'Napoli', coordinates: { lat: 40.8518, lng: 14.2681 } },
        { name: 'Foggia', coordinates: { lat: 41.4622, lng: 15.5436 } },
        { name: 'Palermo', coordinates: { lat: 38.1157, lng: 13.3615 } },
        { name: 'Cagliari', coordinates: { lat: 39.2238, lng: 9.1217 } },
        { name: 'Torino', coordinates: { lat: 45.0703, lng: 7.6869 } },
        { name: 'Roma', coordinates: { lat: 41.9028, lng: 12.4964 } },
        { name: 'Venezia', coordinates: { lat: 45.434, lng: 12.3392 } }
      ];

      cities.forEach(city => {
        new window.google.maps.Marker({
          position: city.coordinates,
          map: map,
          title: city.name
        });
      });
    };

    // Carica la libreria di Google Maps quando il componente viene montato
    loadGoogleMaps();
  }, []);

  return (
    <div id="contatti-container" className='mt-[4rem] lg:mt-[5rem] flex justify-between'>
      <div id="map" className='w-[59%] sm:w-[62%] h-[800px] sm:h-[800px]'></div>
      <div id="info" className='flex flex-col h-[800px] overflow-y-auto w-[38%] sm:w-[35%] mb-6'>
        <p className="text-xl lg:text-2xl border-y-1 border-gray-200 py-6 mt-6">Le nostre boutique</p>
        <div className='flex flex-col border-b-1 border-gray-200 py-6'>
        <p className='font-bold text-sm lg:text-base mb-[2px] lg:mb-0'>Nuances Milano Bagutta</p>
        <p className='text-sm lg:text-base mb-[2px] lg:mb-0'>Via Bagutta, 2</p>
        <p className='text-sm lg:text-base'>20121 Milano, Italia</p>
        <p className='mt-2 text-sm lg:text-base'>+39 02 00 660 88 88</p>
      </div>
      <div className='flex flex-col border-b-1 border-gray-200 py-6'>
        <p className='font-bold text-sm lg:text-base mb-[2px] lg:mb-0'>Espace Nuances Venezia (spazio espositivo d’arte contemporanea)</p>
        <p className='text-sm lg:text-base mb-[2px] lg:mb-0'>Calle Ridotto 1351</p>
        <p className='text-sm lg:text-base'>30124 Venezia, Italia</p>
        <p className='mt-2 text-sm lg:text-base'>+39 02 00 660 88 88</p>
      </div>
      <div className='flex flex-col border-b-1 border-gray-200 py-6'>
        <p className='font-bold text-sm lg:text-base mb-[2px] lg:mb-0'>Nuances Roma Tritone</p>
        <p className='text-sm lg:text-base mb-[2px] lg:mb-0'>Via del Tritone, 61</p>
        <p className='text-sm lg:text-base'>00187 Roma, Italia</p>
        <p className='mt-2 text-sm lg:text-base'>+39 02 00 660 88 88</p>
      </div>
      <div className='flex flex-col border-b-1 border-gray-200 py-6'>
        <p className='font-bold text-sm lg:text-base mb-[2px] lg:mb-0'>Nuances Foggia Arpi</p>
        <p className='text-sm lg:text-base mb-[2px] lg:mb-0'>Via Arpi, 118</p>
        <p className='text-sm lg:text-base'>71121 Foggia, Italia</p>
        <p className='mt-2 text-sm lg:text-base'>+39 02 00 660 88 88</p>
      </div>
      <div className='flex flex-col border-b-1 border-gray-200 py-6'>
        <p className='font-bold text-sm lg:text-base mb-[2px] lg:mb-0'>Nuances Torino Asti</p>
        <p className='text-sm lg:text-base mb-[2px] lg:mb-0'>Via Asti, 22</p>
        <p className='text-sm lg:text-base'>10131 Torino, Italia</p>
        <p className='mt-2 text-sm lg:text-base'>+39 02 00 660 88 88</p>
      </div>
      <div className='flex flex-col border-b-1 border-gray-200 py-6'>
        <p className='font-bold text-sm lg:text-base mb-[2px] lg:mb-0'>Nuances Napoli Scarlatti</p>
        <p className='text-sm lg:text-base mb-[2px] lg:mb-0'>Via Alessandro Scarlatti, 90 / 98</p>
        <p className='text-sm lg:text-base'>80129 Napoli, Italia</p>
        <p className='mt-2 text-sm lg:text-base'>+39 02 00 660 88 88</p>
      </div>
      <div className='flex flex-col border-b-1 border-gray-200 py-6'>
        <p className='font-bold text-sm lg:text-base mb-[2px] lg:mb-0'>Nuances Cagliari Brianza</p>
        <p className='text-sm lg:text-base mb-[2px] lg:mb-0'>Via Brianza, 1</p>
        <p className='text-sm lg:text-base'>09121 Cagliari, Italia</p>
        <p className='mt-2 text-sm lg:text-base'>+39 02 00 660 88 88</p>
      </div>
      <div className='flex flex-col border-b-1 border-gray-200 py-6'>
        <p className='font-bold text-sm lg:text-base mb-[2px] lg:mb-0'>Nuances Palermo Ausonia</p>
        <p className='text-sm lg:text-base mb-[2px] lg:mb-0'>Via Ausonia, 1</p>
        <p className='text-sm lg:text-base'>90144 Palermo, Italia</p>
        <p className='mt-2 text-sm lg:text-base'>+39 02 00 660 88 88</p>
      </div>
      <div className='flex flex-col border-b-1 border-gray-200 py-6'>
        <p className='font-bold text-sm lg:text-base mb-[2px] lg:mb-0'>Nuances Firenze Porta al Prato</p>
        <p className='text-sm lg:text-base mb-[2px] lg:mb-0'>Porta al Prato, 2</p>
        <p className='text-sm lg:text-base'>50123 Firenze, Italia</p>
        <p className='mt-2 text-sm lg:text-base'>+39 02 00 660 88 88</p>
      </div>
      </div>
    </div>
  );
}

export default Contatti;
