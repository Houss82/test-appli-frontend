"use client";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BoxStepContent from "../components/BoxStepContent";
import BoxTextContent from "../components/BoxTextContent";
import FooterContent from "../components/FooterContent";
import MainImageandTitle from "../components/MainImageandTitle";
import Navbar from "../components/Navbar";
import TextAndImageContent from "../components/TextAndImageContent";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main
        className="flex flex-col items-center justify-center  
      "
      >
        {/*Slogan */}
        <MainImageandTitle />
        {/*Box service avec contenu */}
        <BoxTextContent />
        {/* Images et contenu */}
        <TextAndImageContent />
        {/* Box fonctionnement et contenu */}
        <BoxStepContent />
      </main>
      <footer>
        <FooterContent />
      </footer>
    </div>
  );
}
