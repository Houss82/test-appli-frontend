import Script from "next/script";
import { useEffect } from "react";

export default function MapComponent() {
  useEffect(() => {
    const initMap = () => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.5804, lng: 7.1251 },
        zoom: 8,
      });

      new google.maps.Marker({
        position: { lat: 43.5804, lng: 7.1251 },
        map,
        title: "Antibes",
      });
    };

    // Initialiser la carte si Google Maps est chargé
    if (typeof window !== "undefined" && window.google) {
      initMap();
    }

    // Sinon, Google Maps sera chargé par le script async
    window.initMap = initMap;
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-around p-5">
      {/* Script pour charger l'API Google Maps */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAeBvmYhmTZwkgufkhZMQrYzEaqq_fsVZ0&callback=initMap`}
        strategy="afterInteractive"
      />

      {/* Conteneur pour la carte */}
      <div id="map" className="md:h-96 md:w-96 rounded-lg shadow-lg"></div>
      <div className="w-2/3 p-5">
        <p className="text-allostoreBleu font-Blinker text-2xl">
          N'hésitez pas à nous contacter pour discuter de votre projet, où que
          vous soyez dans ces régions magnifiques. Nous sommes ici pour vous
          offrir des solutions personnalisées, adaptées à vos besoins et à votre
          style.
        </p>
        <div className="flex flex-col items-center">
          <p className="p-5 text-center text-allostoreBleu font-Blinker text-2xl">
            Où sommes-nous et où intervenons-nous ?
          </p>
          <button
            className="btn bg-allostoreRouge text-allostoreBlanc hover:text-allostoreRouge w-[20%] p-4 rounded-full"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            En savoir plus
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-allostoreBleu">
                Notre Présence à Antibes et Intervention dans la Région
              </h3>
              <p className="py-4 text-allostoreBleu">
                Bienvenue chez AlloStore, votre expert en menuiserie basé à
                Antibes, au cœur des Alpes-Maritimes. Nous sommes fiers de
                desservir non seulement Antibes, mais également toute la région
                des Alpes-Maritimes, y compris les villes voisines comme Nice,
                Cannes, et Grasse. Grâce à notre emplacement stratégique, nous
                intervenons rapidement et efficacement sur l'ensemble de la Côte
                d'Azur. Que vous soyez dans les Alpes-Maritimes, dans le Var, ou
                même à Monaco, nous sommes à votre service pour tous vos projets
                de menuiserie, qu'il s'agisse de fenêtres, de portes, de
                pergolas, ou de toute autre structure sur mesure.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn text-allostoreBleu hover:bg-allostoreBleu hover:text-allostoreBlanc">
                    Fermer
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}
{
  /*Notre Présence à Antibes et Intervention dans la Région Bienvenue chez
AlloStore, votre expert en menuiserie basé à Antibes, au cœur des
Alpes-Maritimes. Nous sommes fiers de desservir non seulement Antibes,
mais également toute la région des Alpes-Maritimes, y compris les
villes voisines comme Nice, Cannes, et Grasse. Grâce à notre
emplacement stratégique, nous intervenons rapidement et efficacement
sur l'ensemble de la Côte d'Azur. Que vous soyez dans les
Alpes-Maritimes, dans le Var, ou même à Monaco, nous sommes à votre
service pour tous vos projets de menuiserie, qu'il s'agisse de
fenêtres, de portes, de pergolas, ou de toute autre structure sur
mesure. N'hésitez pas à nous contacter pour discuter de votre projet,
où que vous soyez dans ces régions magnifiques. Nous sommes ici pour
vous offrir des solutions personnalisées, adaptées à vos besoins et à
votre style.*/
}
