import  { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-md py-2' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <div className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>CompanyName</div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Home</a></li>
          <li><a href="#services" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Services</a></li>
          <li><a href="#pricing" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Pricing</a></li>
          <li><a href="#users" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Users</a></li>
          <li><a href="#contact" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;