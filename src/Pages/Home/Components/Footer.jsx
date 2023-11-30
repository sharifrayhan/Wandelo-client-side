

const Footer = () => {
    return (
      <footer className=" bg-[url(https://i.ibb.co/CQFXYKk/green.jpg)] text-center p-4 lg:text-start text-white">
        <div className="container mx-auto py-12 flex flex-col md:flex-col lg:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h1 className="text-3xl font-bold mb-4">Wandelo</h1>
            <p className="text-sm">Where every journey becomes a story, and every adventure is a memory waiting to be made.</p>
          </div>
  
          {/* Divider */}
          <div className="hidden lg:block bg-gray-700 h-20 w-px mx-4"></div>
  
          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="flex ">
              <li className="w-1/2 mb-2"><a href="/" className="hover:text-gray-300 transition duration-300">Home</a></li>
              <li className="w-1/2 mb-2"><a href="/services" className="hover:text-gray-300 transition duration-300">Packages</a></li>
              <li className="w-1/2 mb-2"><a href="/contact" className="hover:text-gray-300 transition duration-300">Contact</a></li>
            </ul>
          </div>
  
          {/* Divider */}
          <div className="hidden lg:block bg-gray-700 h-20 w-px mx-4"></div>
  
          {/* Contact Information */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">Email: info@wandelo.com</p>
            <p className="text-sm">Phone: +1 125 555 000</p>
          </div>
        </div>
  
        {/* Divider */}
        <div className="bg-gray-700 h-px"></div>
  
        {/* Attribution */}
        <div className="text-center py-4 text-sm">
          <p>&copy; 2023 Wandelo. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  