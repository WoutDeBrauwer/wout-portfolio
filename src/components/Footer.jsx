export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
  <footer className="bg-[#111111] mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Contact</h3>
            <div className="space-y-3 text-white">
              <p>Wout</p>
              <p>Front-end Developer</p>
              <p>België</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Contact Info</h3>
            <div className="space-y-3 text-white">
              <p>Email: wout@example.com</p>
              <p>Tel: +32 123 45 67 89</p>
              <p>LinkedIn: /in/wout</p>
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