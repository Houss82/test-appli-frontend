"use client";

import FooterContent from "@/components/FooterContent";
import CarousselService from "../../components/CarousselService";
import Navbar from "../../components/Navbar";

export default function servicesPage() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="">
        <img
          src="/dining-room.jpg"
          alt="homme debout"
          className="w-full h-auto md:h-[70vh] md:mt-16 xxl:h-[70vh]  object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-allostoreBleu p-4 m-10">
        <h3 className=" tracking-wide font-bold font-Blinker text-4xl text-allostoreRouge text-center">
          Nos Services de Menuiserie
        </h3>
        <div className="mt-14 flex flex-col items-center  font-Blinker justify-evenly">
          <div className=" flex flex-col items-center ">
            <p className=" text-allostoreBleu text-2xl font-LexendExa font-semibold text-center lg:text-left ">
              Chez AlloStore, nous proposons une large gamme de services de
              menuiserie pour répondre à tous vos besoins en matière
              d'aménagement intérieur et extérieur.
            </p>
            <a
              href="/contactPage"
              className="flex justify-center mb-5 lg:mb-0 "
            >
              <img
                className="w-[20%] bg-allostoreSaumon mt-6 mb-5 rounded-full hover:bg-allostoreGris"
                src="/servicesBleu.png"
                alt="icon service"
              />
            </a>
          </div>
          <div className=" flex flex-col items-center">
            <p className=" text-allostoreBleu text-2xl ">
              Quelle que soit la nature de votre projet, nous sommes à votre
              disposition pour vous conseiller et vous accompagner dans la
              réalisation de vos idées. <br />
              <br />
              Contactez-nous dès aujourd'hui pour en savoir plus sur nos
              solutions de menuiserie sur mesure !
            </p>
            <button
              className="mt-10 p-3 w-[35%] bg-allostoreSaumon rounded-full text-allostoreBleu hover:bg-allostoreRouge hover:text-allostoreBlanc"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              En savoir plus
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-2xl text-allostoreBleu">
                  Nos Services de Menuiserie
                </h3>
                <p className="py-4 text-allostoreBleu">
                  Pour améliorer votre confort et la sécurité de votre espace.
                  Découvrez nos solutions :
                </p>

                <ul className="list-disc list-inside">
                  <li>Fenêtres sur mesure (PVC, alu, bois)</li>
                  <li>Portes d'entrée et de garage</li>
                  <li>Pergolas et stores</li>
                  <li>Volets roulants motorisés</li>
                  <li>Baies vitrées modernes</li>
                  <li>Garde-corps personnalisés</li>
                </ul>

                <p className="pt-4 text-allostoreBleu">
                  Contactez-nous pour plus d'informations sur nos solutions sur
                  mesure.
                </p>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn bg-allostoreBleu text-allostoreBlanc hover:bg-allostoreSaumon hover:text-allostoreBleu">
                      Fermer
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div>
        <CarousselService />
      </div>
      <div>
        <FooterContent />
      </div>
    </div>
  );
}
{
  /*
        
        <div className="absolute top-40 left-10 p-2 w-[30vh] h-[30vh] md:w-[30vw] md:h-[30vw] xxl:w-[20vw] xxl:h-[20vw] flex flex-col justify-center items-center text-center bg-allostoreBleu bg-opacity-70 rounded-full">
          <h1 className="text-white text-2xl font-bold font-Blinker">
            Nos Services
          </h1>
          <p className="text-white m-5 hidden lg:block">
            Découvrez nos solutions de menuiserie sur mesure
          </p>
          
          <button
            className="p-3 w-[50%] bg-allostoreSaumon rounded-full text-allostoreBleu hover:bg-allostoreRouge hover:text-allostoreBlanc"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            En savoir plus
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-2xl text-allostoreBleu">
                Nos Services de Menuiserie
              </h3>
              <p className="py-4 text-allostoreBleu">
                Nous offrons une gamme complète de services sur mesure pour
                améliorer votre confort et la sécurité de votre espace.
                Découvrez nos solutions :
              </p>

              <ul className="list-disc list-inside">
                <li>Fenêtres sur mesure (PVC, alu, bois)</li>
                <li>Portes d'entrée et de garage</li>
                <li>Pergolas et stores</li>
                <li>Volets roulants motorisés</li>
                <li>Baies vitrées modernes</li>
                <li>Garde-corps personnalisés</li>
              </ul>

              <p className="pt-4 text-allostoreBleu">
                Contactez-nous pour plus d'informations sur nos solutions sur
                mesure.
              </p>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-allostoreBleu text-allostoreBlanc hover:bg-allostoreSaumon hover:text-allostoreBleu">
                    Fermer
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        

        <ul className="list-disc list-inside w-2/3 px-44">
            <li className="py-2">
              <span className="font-semibold">Fenêtres sur mesure :</span>{" "}
              Améliorez l'efficacité énergétique et le confort de votre habitat
              avec nos fenêtres en PVC, aluminium ou bois, adaptées à vos
              préférences.
            </li>
            <li className="py-2">
              <span className="font-semibold">
                Portes d'entrée et portes de garage :
              </span>{" "}
              Offrez sécurité et élégance à votre maison grâce à nos portes
              d'entrée robustes et nos portes de garage automatisées.
            </li>
            <li className="py-2">
              <span className="font-semibold">Pergolas et stores :</span> Créez
              un espace extérieur agréable en installant une pergola sur mesure
              ou des stores pratiques pour vous protéger du soleil.
            </li>
            <li className="py-2">
              <span className="font-semibold">Volets roulants :</span> Optez
              pour des volets roulants motorisés pour plus de confort et de
              sécurité dans votre domicile.
            </li>
            <li className="py-2">
              <span className="font-semibold">Baies vitrées :</span> Apportez
              lumière naturelle et modernité à votre espace grâce à nos baies
              vitrées design.
            </li>
            <li className="py-2">
              <span className="font-semibold">Garde-corps :</span> Sécurisez vos
              balcons et terrasses avec nos garde-corps personnalisés, alliant
              sécurité et esthétique.
            </li>
          </ul>
        */
}
