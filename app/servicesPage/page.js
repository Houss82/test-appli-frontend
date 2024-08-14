import FooterContent from "@/components/FooterContent";
import ServicespageContent from "@/components/ServicespageContent";
import Navbar from "../../components/Navbar";

export default function servicesPage() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="mt-20">
        <ServicespageContent />
      </div>
      <div>
        <FooterContent />
      </div>
    </div>
  );
}
