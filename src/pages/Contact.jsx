import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Zwarte achtergrond links */}
      <div className="hidden lg:block absolute top-0 left-0 h-full w-1/2 bg-dark z-0"></div>
      <div className="flex-1 flex items-stretch justify-center relative z-10">
        <div className="max-w-[1600px] w-full flex flex-col lg:flex-row mx-auto px-5 pb-12 md:pb-20">
          {/* Linkerzijde: zwart */}
          <div className="flex-1 flex items-start bg-transparent py-6 md:py-20">
            <div className="max-w-[800px] w-full px-5 md:px-10">
              <h1 className="text-[2rem] lg:text-[5rem] font-bold leading-none text-black lg:text-white">
                CONTACT ME
              </h1>
            </div>
          </div>
          {/* Rechterzijde: wit */}
          <div className="flex-1 text-black flex flex-col justify-center gap-5 px-5 md:px-10 lg:pl-40">
            <div className="max-w-xl mb-8 text-lg">
              <p>
                Op zoek naar een enthousiaste junior developer die met frisse energie en nieuwsgierigheid jouw team kan versterken?
                Ik ben gepassioneerd door programmeren en het oplossen van technische uitdagingen, en ik wil graag mijn vaardigheden verder ontwikkelen in een dynamische omgeving.
              </p>
              <p className="mt-4">
                Ik hoor graag meer over uw bedrijf en hoe ik kan bijdragen aan jullie doelen.
              </p>
            </div>
            <div>
              <h2 className="text-m font-bold mb-4 tracking-widest">CONTACTGEGEVENS</h2>
              {/* ...contactgegevens unchanged... */}
              <div className="mb-2 text-sm flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-black" />
                <a
                  href="tel:+32498154845"
                  className="font-medium underline hover:text-gray-600 transition"
                >
                  +32 498 15 48 45
                </a>
              </div>
              <div className="mb-2 text-sm flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-black" />
                <a
                  href="mailto:woutdebrauwer@outlook.com"
                  className="font-medium underline hover:text-gray-600 transition"
                >
                  woutdebrauwer@outlook.com
                </a>
              </div>
              <div className="mb-2 text-sm flex items-center gap-2">
                <FontAwesomeIcon icon={faLinkedin} className="text-black" />
                <a
                  href="https://www.linkedin.com/in/wout-de-brauwer-881b73247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline hover:text-gray-600 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
