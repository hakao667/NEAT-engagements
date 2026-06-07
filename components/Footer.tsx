import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">NEAT Engagements</h3>
            <p className="text-white/70 text-sm">
              Professional engagement solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white">Services</Link></li>
              <li><Link href="/history" className="text-white/70 hover:text-white">History</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services#consulting" className="text-white/70 hover:text-white">Consulting</a></li>
              <li><a href="/services#operations" className="text-white/70 hover:text-white">Operations</a></li>
              <li><a href="/services#development" className="text-white/70 hover:text-white">Development</a></li>
              <li><a href="/services#support" className="text-white/70 hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contact@neatengagements.com" className="text-white/70 hover:text-white">contact@neatengagements.com</a></li>
              <li><a href="tel:+1234567890" className="text-white/70 hover:text-white">+1 (234) 567-890</a></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>&copy; {new Date().getFullYear()} NEAT Engagements. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
