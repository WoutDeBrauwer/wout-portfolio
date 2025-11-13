import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const optionsRef = useRef(null);

  // Pulse animatie op de button bij laden
  useEffect(() => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // Scroll listener om tekst te verbergen
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate text hide/show
  useEffect(() => {
    if (textRef.current) {
      if (scrolled || !open) {
        gsap.to(textRef.current, { opacity: 0, x: 10, duration: 0.3, display: "none" });
      } else {
        gsap.to(textRef.current, { opacity: 1, x: 0, duration: 0.3, display: "inline" });
      }
    }
  }, [scrolled, open]);

  // Open / close contact opties animatie
  useEffect(() => {
    if (optionsRef.current) {
      if (open) {
        gsap.fromTo(
          optionsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
        );
      } else {
        gsap.to(optionsRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.in",
        });
      }
    }
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50">
      <button
        ref={buttonRef}
        className={`flex items-center gap-2 bg-black text-white font-semibold shadow-lg transition-all duration-300 
          ${open && !scrolled ? "px-4 py-3 rounded-full" : "p-4 rounded-full"} hover:scale-110`}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faPhone} className="text-white h-5 w-5" />
        <span
          ref={textRef}
          className="hidden lg:inline transition-opacity duration-300"
        >
          Contacteer mij
        </span>
      </button>

      <div
        ref={optionsRef}
        className={`flex flex-col mt-2 gap-2 ${open ? "block" : "hidden"}`}
      >
        <a
          href="mailto:wout@example.com"
          className="flex items-center gap-2 bg-white text-black px-4 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-1"
        >
          ✉️ Email
        </a>
        <a
          href="tel:+32123456789"
          className="flex items-center gap-2 bg-white text-black px-4 py-3 rounded-full shadow-lg transition-transform hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faPhone} className="text-black h-5 w-5" />
          Bel mij
        </a>
      </div>
    </div>
  );
}
