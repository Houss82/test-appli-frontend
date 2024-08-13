export default function BoxStepContent() {
  return (
    <div
      className="
        text-white 
        bg-allostoreSaumon
        xs:mt-1
        lm:mt-11
        w-full  
        flex 
        flex-col 
        items-center"
    >
      <div className="mt-10 text-xl flex flex-col items-center">
        <div className="flex flex-col items-center ">
          <h2 className="font-Blinker text-2xl font-bold text-allostoreRouge">
            Notre fonctionnement
          </h2>
          <p className="text-sm text-allostoreBleu font-LexendExa flex ">
            Notre équipe vous accompagne
            <span className="hidden sm:flex ml-1">
              tout au long de votre projet
            </span>
          </p>
        </div>
        <div className="flex ">
          <ul className="text-xs flex flex-col  mt-16 mb-10 mr-6 px-3 sm:flex sm:flex-row ">
            <li
              className="flex flex-col items-center mb-10 sm:mb-4  "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex justify-center items-center ">
                <p className="bg-allostoreRouge -top-8 left-4 relative rounded-full p-2 font-semibold ">
                  01
                </p>
                <div className="bg-allostoreBlanc w-4/12 sm:w-7/12 sm:p-3 p-7 md:p-4 lg:p-5 xl:p-7 rounded-full">
                  <img
                    className="w-[100%] "
                    src="/recherche-maison.png"
                    alt="maison image"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center ml-5 mt-1">
                <p className="font-semibold text-allostoreRouge text-sm sm:text-xl">
                  01
                </p>
                <div className="h-3/4 w-[2px] bg-allostoreRouge m-1"></div>
                <p className="font-bold text-allostoreBleu sm:text-xxs lg:text-base">
                  ÉVALUATION DU PROJET
                </p>
              </div>
            </li>
            <li
              className="flex flex-col items-center mb-10 sm:mt-8"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="flex justify-center items-center ">
                <p className="bg-allostoreRouge -top-8 left-4 relative rounded-full p-2 font-semibold ">
                  02
                </p>
                <div className="bg-allostoreBlanc w-4/12 sm:w-7/12 sm:p-3 md:p-4 lg:p-5 xl:p-7 p-7 rounded-full">
                  <img
                    className="w-[100%] "
                    src="/facture.png"
                    alt="maison image"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center ml-5 mt-1">
                <p className="font-semibold text-allostoreRouge text-sm sm:text-xl">
                  02
                </p>
                <div className="h-3/4 w-[2px] bg-allostoreRouge m-1"></div>
                <p className="font-bold text-allostoreBleu sm:text-xxs lg:text-base">
                  DÉFINITION DU DEVIS
                </p>
              </div>
            </li>
            <li
              className="flex flex-col items-center mb-10 sm:mb-4 "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="flex justify-center items-center ">
                <p className="bg-allostoreRouge -top-8 left-4 relative rounded-full p-2 font-semibold ">
                  03
                </p>
                <div className="bg-allostoreBlanc w-4/12 sm:w-7/12 sm:p-3 md:p-4 lg:p-5 xl:p-7 p-7 rounded-full">
                  <img
                    className="w-[100%] "
                    src="/lancement.png"
                    alt="maison image"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center ml-5 mt-1">
                <p className="font-semibold text-allostoreRouge text-sm sm:text-xl">
                  03
                </p>
                <div className="h-3/4 w-[2px] bg-allostoreRouge m-1"></div>
                <p className="font-bold text-allostoreBleu sm:text-xxs lg:text-base">
                  LANCEMENT DU PROJET
                </p>
              </div>
            </li>
            <li
              className="flex flex-col items-center mb-10  sm:mt-8"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="flex justify-center items-center ">
                <p className="bg-allostoreRouge -top-8 left-4 relative rounded-full p-2 font-semibold ">
                  04
                </p>
                <div className="bg-allostoreBlanc w-4/12 sm:w-7/12 sm:p-3 md:p-4 lg:p-5 xl:p-7 p-7 rounded-full">
                  <img
                    className="w-[100%] "
                    src="/maison.png"
                    alt="maison image"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center ml-5 mt-1">
                <p className="font-semibold text-allostoreRouge text-sm sm:text-xl">
                  04
                </p>
                <div className="h-3/4 w-[2px] bg-allostoreRouge m-1"></div>
                <p className="font-bold text-allostoreBleu sm:text-xxs lg:text-base">
                  FINITION ET NETTOYAGE
                </p>
              </div>
            </li>
            <li
              className="flex flex-col items-center mb-4  sm:mb-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="flex justify-center items-center ">
                <p className="bg-allostoreRouge -top-8 left-4 relative rounded-full p-2 font-semibold ">
                  05
                </p>
                <div className="bg-allostoreBlanc w-4/12 sm:w-7/12 sm:p-3 md:p-4 lg:p-5 xl:p-7 p-7 rounded-full">
                  <img
                    className="w-[100%] "
                    src="/securite-des-chantiers.png"
                    alt="maison image"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center ml-5 mt-1">
                <p className="font-semibold text-allostoreRouge text-sm sm:text-xl">
                  05
                </p>
                <div className="h-3/4 w-[2px] bg-allostoreRouge m-1"></div>
                <p className="font-bold text-allostoreBleu sm:text-xxs lg:text-base">
                  FIN DU CHANTIER
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b-2 w-3/4  border-allostoreRouge "></div>
      <div className="flex flex-col items-center m-3 pb-5">
        <h2 className="text-allostoreRouge font-Blinker font-bold text-2xl my-3">
          Devis gratuit
        </h2>
        <p className="text-allostoreBleu my-5 text-center font-LexendExa px-2">
          Transformez votre habitat avec nos solutions sur mesure en menuiserie
          aluminium et PVC ! et découvrez comment nous pouvons améliorer votre
          confort et votre sécurité.
        </p>
        <p className="text-allostoreBleu my-5 text-center font-LexendExa">
          Cliquez ici pour obtenir votre devis gratuit
        </p>
        <button className="bg-allostoreRouge hover:bg-allostoreBleu duration-300 w-2/6 gm:w-3/12 sm:w-3/12 font-semibold p-2 text-xl rounded-3xl">
          Devis
        </button>
      </div>
    </div>
  );
}
