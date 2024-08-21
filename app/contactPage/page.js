import Contact from "@/components/Contact";
import FooterContent from "@/components/FooterContent";
import Navbar from "../../components/Navbar";

export default function contactPage() {
  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="">
        <img
          className=" w-full h-auto xxl:h-[70vh] object-cover "
          src="/contact-us2.jpg"
          alt="contact image"
        />
      </div>

      <div className="flex flex-col items-center justify-center  mb-8   ">
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
