

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#careers" className="hover:text-blue-400 transition-colors">Careers</a></li>
            <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#web" className="hover:text-blue-400 transition-colors">Web Development</a></li>
            <li><a href="#mobile" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
            <li><a href="#seo" className="hover:text-blue-400 transition-colors">SEO</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><a href="#twitter" className="hover:text-blue-400 transition-colors">Twitter</a></li>
            <li><a href="#linkedin" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
            <li><a href="#facebook" className="hover:text-blue-400 transition-colors">Facebook</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="mb-2">Email: info@company.com</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 pt-8 mt-8 border-t border-gray-700 text-center">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;