"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-dark text-white py-20 px-6"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row  gap-12">
        {/* Foto */}
        <div ref={imageRef} className="w-full md:w-1/3 flex justify-center">
          <img
            src="Images/Portfolio-profielfoto.webp"
            alt="profielfoto"
            className="w-80 md:w-[440px] h-auto rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Tekst */}
        <div
          ref={textRef}
          className="w-full md:w-2/3 bg-[#111] p-8 rounded-2xl border border-white/10 shadow-lg">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
            ABOUT ME
            <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
          </h2>

          <p className="text-gray-300 mb-6">
            Ik ben <strong>Wout</strong>, een gedreven en resultaatgerichte
            junior webdeveloper met een passie voor het bouwen van
            gebruiksvriendelijke, performante en visueel aantrekkelijke
            websites. Wat mij drijft, is het samenspel tussen design en techniek
            — het creëren van digitale ervaringen die niet alleen mooi zijn, maar
            ook écht werken.
          </p>

          <p className="text-gray-300 mb-6">
            Mijn technische vaardigheden liggen in{" "}
            <strong>HTML, CSS, React</strong> en{" "}
            <strong>PHP</strong>. Daarnaast heb ik ruime ervaring met{" "}
            <strong>WordPress</strong> en thema’s zoals{" "}
            <strong>Elementor</strong> en <strong>BeTheme</strong>, en heb ervaring met <strong>API-integraties</strong> om dynamische en
            efficiënte functionaliteiten te realiseren.
          </p>

          <p className="text-gray-300 mb-8">
            Als persoon ben ik <strong>leergierig, nieuwsgierig en ambitieus</strong>.
            Ik hou ervan om mezelf uit te dagen, nieuwe technologieën te
            ontdekken en steeds beter te worden in wat ik doe. Mijn doel is om
            websites te bouwen die impact maken — snel, functioneel en afgestemd
            op de noden van de gebruiker.
          </p>

          {/* Persoonlijke info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <p>
              <strong className="text-white/80">Naam:</strong> Wout De Brauwer
            </p>
            <p>
              <strong className="text-white/80">Leeftijd:</strong> 24 jaar
            </p>
            <p>
              <strong className="text-white/80">Locatie:</strong> Sint-Lievens-Houtem, België
            </p>
            <p>
              <strong className="text-white/80">E-mail:</strong>{" "}
              <a
                href="mailto:woutdebrauwer@outlook.com"
                className="text-primary hover:underline"
              >
                woutdebrauwer@outlook.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
