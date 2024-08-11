import React from "react";

export default function GalleryBoxTest() {
  return (
    <div
      className="bg-allostoreBleu relative w-[70%] flex flex-col items-center mb-2 md:mt-6  rounded-md md:w-[650px]"
      data-aos="fade-up"
    >
      <h2 className="font-Blinker mt-6 font-semibold text-2xl text-center text-allostoreSaumon pb-3">
        Nos derniers projets réalisés
      </h2>
      <div className="p-5 md:-10 max-h-[650px] overflow-y-auto no-scrollbar">
        <div className="columns-1 gap-5 lg:gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 md:[&>img:not(:first-child)]:mt-5 ">
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300 "
            src="/porte-garage.jpeg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/storeBleu.jpeg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/garage1.jpg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/baie-vitrée2.jpg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/garage1.jpg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/debut-travaux.jpeg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/fenetreBlanche.jpeg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/garage1.jpg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/file.jpg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/cuisine.jpeg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/petitGarage.jpeg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/storeBlanc.jpeg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/fin-travaux.jpeg"
          />
          <img
            className="hover:-translate-y-1 hover:scale-110  duration-300"
            src="/store-rouge.jpeg"
          />
        </div>
      </div>
    </div>
  );
}
