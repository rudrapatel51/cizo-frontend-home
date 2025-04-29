import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-md bg-purple-600 mr-2"></div>
              <span className="text-xl font-bold text-gray-800">Techs</span>
            </div>
            <p className="text-gray-600 mb-4">
              We build digital products that help businesses grow and succeed in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">123 Tech Street, Suite 100</li>
              <li className="text-gray-600">San Francisco, CA 94107</li>
              <li className="text-gray-600">info@techscompany.com</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Techs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
