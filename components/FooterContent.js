import React from "react";

export default function FooterContent() {
  return (
    <div className="flex flex-col m-4">
      <div className="flex flex-col sm:flex-row m-3">
        <div className="flex flex-col sm:w-6/12">
          <div className="flex sm:flex-row">
            <img
              className="w-4/12 lg:w-3/12 xl:w-2/12"
              src="/allostoreIcon.png"
              alt="Allostore Icon"
            />
            <p className="mx-3 font-semibold text-sm sm:text-sm w-2/4">
              MENUISERIE ALU ET PVC NEUF ET RÉNOVATION
            </p>
          </div>
          <div>
            <p className="my-3 font-semibold text-xs w-4/6">
              Située à Antibes dans les Alpes Maritimes, Allô Store est une
              entreprise avec des salariés expérimentés, qui assure des
              prestations de menuiserie aluminium et PVC : fenêtres, portes,
              stores, vérandas, rideaux métalliques...
            </p>
          </div>
        </div>
        <div className="sm:w-4/12">
          <h2 className="text-allostoreRouge font-semibold sm:ml-4 text-sm sm:text-lg">
            Navigation
          </h2>
          <ul className="flex sm:flex-col lg:flex-row">
            <div>
              <li className="p-3 font-semibold text-xs lg:text-sm hover:text-allostoreRouge hover:cursor-pointer">
                <span className="font-bold text-allostoreRouge mr-1">-</span>
                Nos services
              </li>
              <li className="p-3 font-semibold text-xs lg:text-sm hover:text-allostoreRouge hover:cursor-pointer">
                <span className="font-bold text-allostoreRouge mr-1">-</span>
                Nos préstations
              </li>
              <li className="p-3 font-semibold text-xs lg:text-sm hover:text-allostoreRouge hover:cursor-pointer">
                <span className="font-bold text-allostoreRouge mr-1">-</span>
                Contact
              </li>
            </div>
            <div>
              <li className="lg:ml-5 p-3 font-semibold text-xs lg:text-sm hover:text-allostoreRouge hover:cursor-pointer">
                <span className="font-bold text-allostoreRouge mr-1">-</span>
                Qui sommes-nous
              </li>
              <li className="lg:ml-5 p-3 font-semibold text-xs lg:text-sm hover:text-allostoreRouge hover:cursor-pointer">
                <span className="font-bold text-allostoreRouge mr-1">-</span>
                Devis
              </li>
            </div>
          </ul>
        </div>
        <div className="sm:w-2/12">
          <h2 className="text-allostoreRouge font-semibold text-sm sm:text-lg">
            Nous suivre
          </h2>
          <img />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-11/12 h-[2px] bg-allostoreRouge flex flex-row justify-center my-6"></div>
        <p className="text-xs text-center">
          © Allô Store 2024 - Mentions légales - Plan du site - Gestion des
          cookies - Mise à jour le 05/04/2024 Réalisé par Houss-dev®
        </p>
      </div>
    </div>
  );
}
