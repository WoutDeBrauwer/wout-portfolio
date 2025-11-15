import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="bg-dark text-white relative min-h-screen">
      {/* Half-bleed dark panel on large screens */}
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-dark z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-stretch justify-center min-h-screen py-20 md:py-28 lg:py-32">
        <div className="max-w-[1600px] w-full flex flex-col lg:flex-row mx-auto px-6 sm:px-10 lg:px-16">

          {/* LEFT: header / intro op dark background (bovenaan uitgelijnd) */}
          <div className="w-full lg:w-1/2 flex items-start">
            <div className="w-full max-w-[980px]">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight md:leading-[0.95] lg:leading-[0.9]">
                CONTACT ME
              </h1>
            </div>
          </div>

          {/* RIGHT: contact content (verticaal gecentreerd) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 px-4 md:px-8 h-full">
            <div className="max-w-[920px]">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Op zoek naar een enthousiaste junior developer die met frisse energie en nieuwsgierigheid jouw team kan versterken? Ik ben gepassioneerd door programmeren en het oplossen van technische uitdagingen, en ik wil graag mijn vaardigheden verder ontwikkelen in een dynamische omgeving.
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed">
                Ik hoor graag meer over uw bedrijf en hoe ik kan bijdragen aan jullie doelen.
              </p>
            </div>

            <div className="mt-2">
              <h2 className="text-sm md:text-base font-bold mb-4 tracking-widest uppercase opacity-95">
                Contactgegevens
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm md:text-base">
                  <FontAwesomeIcon icon={faPhone} className="text-white w-4 h-4" aria-hidden="true" />
                  <a
                    href="tel:+32498154845"
                    className="font-medium underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded"
                  >
                    +32 498 15 48 45
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm md:text-base">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white w-4 h-4" aria-hidden="true" />
                  <a
                    href="mailto:woutdebrauwer@outlook.com"
                    className="font-medium underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded"
                  >
                    woutdebrauwer@outlook.com
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm md:text-base">
                  <FontAwesomeIcon icon={faLinkedin} className="text-white w-4 h-4" aria-hidden="true" />
                  <a
                    href="https://www.linkedin.com/in/wout-de-brauwer-881b73247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
