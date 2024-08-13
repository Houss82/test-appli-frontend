import Contact from "@/components/Contact";
import FooterContent from "@/components/FooterContent";
import Navbar from "../../components/Navbar";

export default function contactPage() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="h-auto lg:h-[900px]">
        <img
          className="mt-20 sm:mt-16 w-full h-[30%] sm:h-[40%] lg:h-[70%] xl:h-[70%] xxl:h-[70%] xxl:object-cover "
          src="/contact-us.jpg"
          alt="contact image"
        />
      </div>

      <div className="flex flex-col items-center justify-center  mb-8 lg:-mt-60  ">
        <p className="m-5 text-3xl sm:text-4xl text-allostoreBleu font-Blinker font-semibold text-center">
          Contactez-nous
        </p>
        <Contact />
      </div>
      <div>
        <FooterContent />
      </div>
    </div>
  );
}
