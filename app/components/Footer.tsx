export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">About Physioshark</h3>
            <p className="text-gray-400 max-w-lg">
              The Physioshark project investigates how climate change impacts the physiology 
              of newborn and juvenile reef sharks. Understanding how human and environmental 
              impacts affect these sharks is crucial knowledge for developing effective shark 
              conservation strategies.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <a href="#contact">
              <h3 className="text-xl font-bold mb-4 text-white hover:text-gray-200 transition-colors">Contact</h3>
            </a>
            <ul className="space-y-2 text-gray-400">
              <li>James Cook University</li>
              <li>Townsville, QLD</li>
              <li>Australia</li>
              <li className="pt-2">
                <a href="mailto:hello@physioshark.org" className="hover:text-white transition-colors">
                  hello@physioshark.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Physioshark Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 