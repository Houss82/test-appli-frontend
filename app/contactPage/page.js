import Contact from "@/components/Contact";
import Navbar from "../../components/Navbar";

export default function contactPage() {
  return (
    <div>
      <Navbar />
      <p className="mt-40 text-2xl text-allostoreGris text-center">
        Welcome to contactPage
      </p>
      <Contact />
    </div>
  );
}
