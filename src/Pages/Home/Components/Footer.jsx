

const Footer = () => {
    return (
      <footer className=" bg-[url(https://i.ibb.co/CQFXYKk/green.jpg)] text-white">
        <div className="container mx-auto py-12 flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h1 className="text-3xl font-bold mb-4">Wandelo</h1>
            <p className="text-sm">Your description about the company or website can go here. Make it brief and engaging.</p>
          </div>
  
          {/* Divider */}
          <div className="hidden lg:block bg-gray-700 h-20 w-px mx-4"></div>
  
          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="flex ">
              <li className="w-1/2 mb-2"><a href="/" className="hover:text-gray-300 transition duration-300">Home</a></li>
              <li className="w-1/2 mb-2"><a href="/services" className="hover:text-gray-300 transition duration-300">Services</a></li>
              <li className="w-1/2 mb-2"><a href="/contact" className="hover:text-gray-300 transition duration-300">Contact</a></li>
            </ul>
          </div>
  
          {/* Divider */}
          <div className="hidden lg:block bg-gray-700 h-20 w-px mx-4"></div>
  
          {/* Contact Information */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +1 123 456 789</p>
          </div>
        </div>
  
        {/* Divider */}
        <div className="bg-gray-700 h-px"></div>
  
        {/* Attribution */}
        <div className="text-center py-4 text-sm">
          <p>&copy; 2023 Wandelo. All rights reserved.</p>
          <p>Designed by Your Name</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  