import { useEffect, useState } from "react";

export default function Caroussel() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [startAnimation, setStartAnimation] = useState(false);
  const data = [
    {
      title: "Installation de Fenêtres en Aluminium et PVC",
      desc: "Nous installons des fenêtres en aluminium et PVC de haute qualité, conçues pour offrir une isolation thermique et phonique exceptionnelle. Nos fenêtres sont disponibles dans une variété de styles et de finitions pour s'adapter parfaitement à l'esthétique de votre maison.",
      imageLink: "/fenetre-service.jpg",
    },
    {
      title: "Pose de Portes d'Entrée",
      desc: "Nos portes d'entrée allient sécurité et esthétique. Nous proposons une large gamme de modèles, du classique au contemporain, pour accueillir vos invités avec style tout en protégeant votre foyer.",
      imageLink: "/door.jpg",
    },
    {
      title: "Installation de Portes de Garage",
      desc: "Nos portes de garage sont conçues pour offrir praticité, sécurité et isolation. Qu'elles soient basculantes, sectionnelles ou enroulables, nous avons la solution adaptée à votre espace et vos besoins.",
      imageLink: "/rolling-gate.jpg",
    },
    {
      title: "Aménagement de Vérandas",
      desc: "Créez un espace lumineux et confortable avec nos vérandas sur mesure. Nous concevons et installons des vérandas qui s'intègrent parfaitement à votre maison, vous offrant une pièce supplémentaire pour profiter de votre jardin toute l'année.",
      imageLink: "/winter-garden.jpg",
    },
    {
      title: "Installation de Stores et Volets",
      desc: "Protégez-vous du soleil et réglez la luminosité avec nos stores et volets de qualité. Nous proposons une variété de modèles intérieurs et extérieurs, manuels ou motorisés, pour un confort optimal.",
      imageLink: "/volet-service.jpg",
    },
    {
      title: "Pose de Portails et Clôtures",
      desc: "Sécurisez et embellissez votre propriété avec nos portails et clôtures. Du design classique au moderne, nous offrons des solutions durables et esthétiques pour délimiter votre espace extérieur.",
      imageLink: "/japanese-portail.jpg",
    },
  ];

  useEffect(() => {
    // Attendre 3 secondes avant de démarrer l'animation
    const initialDelay = setTimeout(() => {
      setStartAnimation(true);
    }, 2000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const timer = setInterval(() => {
      setVisibleCards((prev) => {
        if (prev.length < data.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startAnimation]);

  return (
    <div className="py-10 px-5 bg-allostoreBleu">
      <div className="max-w-full lg:w-[70%] mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 relative">
          {data.map(({ title, desc, imageLink }, index) => (
            <div
              key={index}
              className={`flex flex-col bg-allostoreBlanc rounded-xl overflow-hidden shadow-lg h-[500px] transition-all duration-500 ease-out ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="font-Blinker font-bold text-allostoreBleu text-2xl mb-4">
                  {title}
                </h2>
                <p className="text-sm flex-grow overflow-y-auto">{desc}</p>
              </div>
              <div className="h-48 w-full mt-auto">
                <img
                  className="w-full h-full object-cover"
                  src={imageLink}
                  alt={title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
