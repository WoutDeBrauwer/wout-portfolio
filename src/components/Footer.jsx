export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
  <footer className="bg-[#111111] mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Contact</h3>
            <div className="space-y-1 text-white">
              <p>Wout De Brauwer</p>
              <p>Front-end Developer</p>
            </div>
          </div>
          
        <div>
          <h3 className="text-white text-lg font-medium mb-6">Contact Info</h3>
          <div className="space-y-3 text-white">
            <p> Email:{" "}
              <a href="mailto:woutdebrauwer@outlook.com" className="underline hover:text-gray-300 transition">woutdebrauwer@outlook.com</a>
            </p>
            <p>
              Tel:{" "}
              <a href="tel:+32498154845" className="underline hover:text-gray-300 transition">+32 498 15 48 45</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/wout-de-brauwer-881b73247" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition">LinkedIn</a>
            </p>
          </div>
</div>

          <div>
            <h3 className="text-white text-lg font-medium mb-6">Let&apos;s Connect</h3>
            <div className="space-y-3 text-white">
              <p>Open voor nieuwe uitdagingen</p>
              <p className="mt-8">© {currentYear} All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}