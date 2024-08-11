import Contact from "@/components/Contact";
import Navbar from "../../components/Navbar";

export default function contactPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <p className="mt-40 text-2xl text-allostoreGris ">Contactez-nous</p>
        <Contact />
      </div>
    </div>
  );
}
