export default function MapComponent() {
  return (
    <div className="flex flex-col items-center md:flex-row justify-around p-10">
      <div className=" md:h-auto md:w-2/3 rounded-lg ">
        <img
          className="hover:-translate-y-1 hover:scale-110  duration-300"
          src="/Carte-Alpes-Maritimes-Var-Bouches-du-Rhone.png"
        />
      </div>
      <div className=" text-center md:w-2/3 p-5">
        <p className="text-allostoreBleu font-Blinker text-xl md:text-2xl">
          N'hésitez pas à nous contacter pour discuter de votre projet, où que
          vous soyez dans ces régions magnifiques. Nous sommes ici pour vous
          offrir des solutions personnalisées, adaptées à vos besoins et à votre
          style.
        </p>
        <div className="flex flex-col items-center">
          <button
            className="btn bg-allostoreRouge text-allostoreBlanc hover:text-allostoreRouge md:w-[45%] mt-16 md:mt-10 md:p-4 md:m-4 rounded-full"
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
