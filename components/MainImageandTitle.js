export default function MainImageandTitle() {
  return (
    <div className="relative w-full flex">
      <img
        className="
    w-full h-auto mt-10 object-cover 
    sm:h-96 
    sm:object-cover 
    xl:h-[500px] 
    lg:h-[500px] 
    md:h-[450px]"
        src="/media.webp"
        alt="window image"
      />
      <div className="absolute inset-0 flex sm:items-center items-center justify-center">
        <button className="fixed p-2 top-96  -right-2 md:hidden block lg:right-0 lg:w-1/6 lg:p-3 lg:text-lg bg-allostoreRouge text-white text-xxxs z-30 font-semibold  w-12 rounded-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-allostoreBleu duration-300 animate__animated animate__pulse animate__infinite ">
          <p className="border-t border-l border-b p-1 w-auto">
            Votre Devis içi !
          </p>
        </button>
      </div>
    </div>
  );
}
