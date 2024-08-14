export default function Caroussel() {
  const data = [
    {
      imageLink: "/baieVitréeDorée.jpeg",
    },
    {
      imageLink: "fenetreBlanche.jpeg",
    },
    {
      imageLink: "/petitGarage.jpeg",
    },
    {
      imageLink: "/cuisine.jpeg",
    },
    {
      imageLink: "/store-rouge.jpeg",
    },
    {
      imageLink: "/porte-garage.jpeg",
    },
    {
      imageLink: "/storeBlanc.jpeg",
    },
    {
      imageLink: "/storeBleu.jpeg",
    },
    {
      imageLink: "/storeRouge2.jpeg",
    },
  ];

  return (
    <div className="p-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
}
