import GalleryBox from "./GalleryBox";

export default function TextAndImageContent() {
  return (
    <div
      id="box2Beige"
      className="
    bg-allostoreBlanc relative flex flex-col items-center w-full  
    xs:mt-60
    xs:mb-10
    gm:mb-8
    sm:mb-10
    lg:mb-10
    z-auto
    "
    >
      <h2 className="text-allostoreBleu mt-28  underline underline-offset-4 decoration-allostoreRouge decoration-3 font-Blinker font-bold text-lg text-center lm:mt-36 gm:mt-40 sm:mt-56 md:mt-64 lg:mt-64 xl:mt-64 xxl:mt-80 lm:text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
        Votre Partenaire en Solutions de Menuiserie
      </h2>
      <p className="font-lexendExa font-semibold text-allostoreBleu text-xxs text-center justify-center mt-2 pb-1 sm:mt-5 sm:text-base md:text-xl w-3/4 lg:text-lg xl:text-xl">
        Nos prestations de menuiserie alu et PVC couvrent un large éventail de
        produits, allant des fenêtres aux portes, en passant par les volets et
        les vérandas.
      </p>
      <div className="flex flex-col items-center justify-between m-5 lm:mt-4 lm:justify-center xl:mt-10">
        <div className="flex flex-row bg-allostoreSaumon sm:p-3 xs:p-4 xs:flex-col lm:flex-col mb-10 gm:mt-2 gm:w-full gm:h-auto gm:p-2 lm:p-3 lm:mt-2 lm:items-center lm:ml-2 gm:flex-col gm:items-center  sm:mt-5 sm:w-[100%] sm:h-[50%] xl:w-[100%] xxl:mt-12">
          <div className=" p-2 lm:flex xs:mb-3 xs:flex xs:flex-row xs:justify-center gm:w-[75%] lm:justify-center xs:gap-2 lm:flex-row lm:gap-3 lm:m-1 gm:m-1 gm:flex gm:flex-row gm:gap-2 gm:justify-center sm:flex sm:flex-col sm:w-full sm:m-1 sm:justify-center lg:w-[60%] xl:w-[40%]">
            <img
              className="h-auto  xs:w-[40%] xs:h-24 lm:w-[30%] sm:hidden gm:w-[40%] md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-md "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              src="/piscine.jpg"
              alt="porte alu image"
            />
            <img
              className="h-auto  xs:w-[45%] lm:w-[30%] gm:w-[40%]  sm:h-[90%] lm:h-20 xs:hidden md:h-[100%] object-cover rounded-md"
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              src="/baie-vitrée.jpg
        "
              alt="porte alu image"
            />
            <img
              className="h-36 w-full xs:w-[40%] gm:w-[40%] xs:h-24 lm:w-[30%] lm:h-20 sm:hidden md:hidden lg:hidden xl:hidden xxl:hidden object-cover rounded-md"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              src="/store-rouge.jpeg
        "
              alt="porte alu image"
            />
          </div>
          <div className=" flex flex-col items-center justify-evenly p-4 text-allostoreBleu lg:w-[100%]">
            <p className="font-Blinker text-allostoreGreen ml-2 mb-2 text-xs gm:text-base gm:m-1 sm:text-base lg:text-lg xl:text-xl xxl:text-2xl">
              Nous concevons, fabriquons et installons des produits de
              menuiserie en aluminium et PVC de qualité, adaptés à vos besoins
              spécifiques.
            </p>
            <p className="font-Blinker text-allostoreGreen ml-2 mb-2 text-xs gm:text-base gm:m-1 sm:text-base lg:text-lg xl:text-xl xl:py-4 xxl:text-2xl">
              Nous mettons un point d'honneur à utiliser des matériaux de
              qualité et des techniques de pointe pour garantir la durabilité de
              nos produits.
            </p>
            <p className="font-Blinker text-allostoreGreen ml-2 mb-2 text-xs gm:text-base gm:m-1 sm:text-base lg:text-lg xl:text-xl xl:py-4 xxl:text-2xl">
              Engagés dans la satisfaction de nos clients, nous offrons un
              service complet incluant la maintenance et la réparation de vos
              installations.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse bg-allostoreSaumon sm:p-3 xs:p-5 xs:flex-col lm:flex-col mb-2 gm:mt-2 gm:w-full gm:h-auto gm:p-2 lm:p-3 lm:mt-2 lm:items-center lm:ml-2 gm:flex-col gm:items-center sm:mt-1 sm:w-[100%] sm:h-[50%] ">
          <div className=" p-2 lm:flex xs:mb-3 xs:flex xs:flex-row xs:justify-center gm:w-[75%] lm:justify-center xs:gap-2 lm:flex-row lm:gap-3 lm:m-1 gm:m-1 gm:flex gm:flex-row gm:gap-2 gm:justify-center sm:flex sm:flex-col sm:w-full sm:m-1 sm:justify-center lg:w-[60%] xl:w-[40%]">
            <img
              className="h-auto  xs:w-[40%] xs:h-24 lm:w-[30%] sm:hidden gm:w-[40%] md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-md "
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              src="/escalier00.jpg
        "
              alt="escalier image"
            />
            <img
              className="h-auto  xs:w-[45%] lm:w-[30%] gm:w-[40%]  sm:h-[90%] lm:h-20 xs:hidden md:h-[100%] object-cover rounded-md"
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              src="/garde-corps.jpg
        "
              alt="garde-corps image"
            />
            <img
              className="h-36 w-full xs:w-[40%] gm:w-[40%] xs:h-24 lm:w-[30%] lm:h-20 sm:hidden md:hidden lg:hidden xl:hidden xxl:hidden object-cover rounded-md"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              src="/veranda.jpg
        "
              alt="vérandas image"
            />
          </div>
          <div className=" flex flex-col items-center justify-evenly p-4 text-allostoreBleu lg:w-[100%]">
            <p className="font-Blinker text-allostoreGreen ml-2 mb-2 text-xs gm:text-base gm:m-1 sm:text-base lg:text-lg xl:text-xl xl:py-4 xxl:text-2xl">
              Experts en menuiserie aluminium et PVC, nous vous offrons des
              solutions sur mesure pour améliorer le confort et l'esthétique de
              votre habitat.
            </p>
            <p className="font-Blinker text-allostoreGreen ml-2 mb-2 text-xs gm:text-base gm:m-1 sm:text-base lg:text-lg xl:text-xl xl:py-4 xxl:text-2xl">
              Nos produits de menuiserie en aluminium et PVC sont conçus pour
              résister aux intempéries tout en offrant une isolation optimale
              pou votre habitation.
            </p>

            <p className="font-Blinker text-allostoreGreen ml-2 mb-2 text-xs gm:text-base gm:m-1 sm:text-base lg:text-lg xl:text-xl xl:py-4 xxl:text-2xl">
              Notre objectif est de vous offrir des produits de menuiserie alu
              et PVC qui répondent à vos attentes en termes de design, de
              qualité et de performance.
            </p>
          </div>
        </div>
      </div>
      {/* <div
      className="text-white bg-allostoreSaumon p-5 m-5 relative z-auto"
      data-aos="fade-right"
    >
      <h2>Box-2</h2>
    </div> */}
      <GalleryBox />
    </div>
  );
}
