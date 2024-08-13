import ServiceBox from "./ServiceBox";

export default function BoxTextContent() {
  return (
    <div
      id="box1Green"
      className="
          text-white 
          bg-allostoreSaumon 
          h-72 
          relative 
          z-auto 
          xs:h-[500px]
          lm:h-[280px]
          sm:h-[480px]
          md:h-[500px]
          w-full  
          flex 
          flex-col 
          items-center"
    >
      <div
        className=" 
    font-Noto font-bold flex flex-col justify-center p-2 h-24 text-xs text-allostoreBlanc bg-allostoreRouge items-center  rounded-md
    w-4/6
    mt-5
    lm:w-3/4
    sm:h-48 
    sm:w-4/5 
    lg:w-4/5
    xl:w-7/12
    sm:text-xl 
    sm:mt-12 
    xl:mt-8"
      >
        <h1
          className="
      text-xs mt-2 bold 
      xs:text-xxxs 
      lm:text-xxs 
      sm:text-xl 
      sm:p-2 
      sm:mt-2 
      md:text-2xl 
      lg:text-3xl 
      animate__animated 
      animate__backInLeft 
      animate__delay-2s 
      animate__slower"
        >
          CONFIEZ VOTRE PROJET À DES ARTISANS
        </h1>
        <p className="text-xs lm:text-xxs xs:text-xxxs mt-2 sm:text-xl md:text-2xl lg:text-3xl sm:p-2 bold sm:mt-2 custom:text-lg animate__animated animate__backInRight animate__slower">
          AVEC PLUS DE 20 ANS D'EXPÉRIENCE EN
        </p>
        <p className="text-xs lm:text-xxs mt-2 xs:text-xxxs sm:text-xl md:text-2xl lg:text-3xl sm:p-2 bold sm:mt-2 sm:mb-2 custom:text-lg animate__animated animate__backInLeft animate__slower">
          MENUISERIE ALU ET PVC
        </p>
      </div>

      {/* ServiceBox à cheval sur box1Gris et box2Blanc */}
      <ServiceBox />
    </div>
  );
}
