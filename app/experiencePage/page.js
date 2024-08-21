import Caroussel from "@/components/Caroussel";
import FooterContent from "@/components/FooterContent";
import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function experiencePage() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar />
      <Head>
        <title>Nos Réalisations en Menuiserie | AlloStore</title>
        <meta
          name="description"
          content="Découvrez les projets réalisés par AlloStore, experts en menuiserie pour fenêtres, portes, pergolas et plus."
        />
      </Head>
      <div className="mt-20  flex flex-col items-center">
        <img
          className=" w-full h-[70vh]  object-cover object-top "
          src="/glass-work.jpg"
          alt="experience image"
        />
        <h2 className="font-Blinker mt-10 font-semibold text-4xl text-center bg-gradient-to-r from-allostoreBleu to-slate-700 p-6 py-10 mb-8 text-allostoreBlanc rounded-lg w-4/5 xxl:w-[50%]">
          Notre Expérience dans la menuiserie
        </h2>
        <p className="text-center text-lg text-allostoreBleu mb-3  sm:w-[90%]   p-2  font-LexendExa lg:text-2xl">
          Découvrez nos récentes réalisations en menuiserie, allant des fenêtres
          modernes aux pergolas élégantes. Chaque projet est réalisé avec soin
          et professionnalisme pour répondre à vos besoins.
        </p>
        <Caroussel />
      </div>
      <div className="flex flex-col items-center bg-allostoreSaumon p-6 w-full">
        <a href="/contactPage" style={{ textUnderlineOffset: "5px" }}>
          <p className="underline decoration-allostoreRouge decoration-2 text-center text-2xl lg:text-4xl text-allostoreBleu mt-6 font-bold font-LexendExa hover:text-allostoreRouge hover:decoration-allostoreBleu ">
            Contactez-nous
          </p>
        </a>
        <p className="font-LexendExa p-3 pb-10 lg:text-2xl text-center">
          Pour plus d'informations ou pour discuter de votre projet. Nous sommes
          ici pour vous accompagner à chaque étape.
        </p>
      </div>
      <FooterContent />
    </div>
  );
}
