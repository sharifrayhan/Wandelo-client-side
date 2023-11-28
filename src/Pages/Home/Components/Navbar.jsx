import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../Context/AllContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const {user, logOut} = useContext(Context)

  // const notify = () => toast('Logged out user');
  const navigate = useNavigate()

  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const userEmail = user?.email;

  const toggleDropdownTwo = () => {
    setDropdownOpenTwo(!dropdownOpenTwo);
  };

  const handleLogOut = () => {
      logOut();
      navigate('/');
      setDropdownOpenTwo(false);
    }

  const closeDropdownTwo = () => {
    setDropdownOpenTwo(true);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };




  // const user = true;
  // const userName = 'Sharif Rayhan Nafi';
  // const userPhoto = 'https://i.ibb.co/fHK6scY/ryan.jpg';
  // const userEmail = 'sharif@example.com';

  return (
    
    <nav className={` w-full z-50 bg-transparent px-4 text-white py-3 transition-all duration-300 ease-in-out`}>
        <ToastContainer/>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between mx-11">

        {/* Company Logo */}
        <div className="">
          <Link to="/" className="text-white font-bold text-lg">
            Wandelo
          </Link>
        </div>

        {/* Responsive Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <img className="h-5" src="https://i.ibb.co/G3ypY5m/menu-white.png" alt="Menu" />
        </div>

        {/* Main Navigation Links (Responsive) */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-80 z-50">
            <div className="flex justify-end p-4">
              <button onClick={closeMenu}>
                <img className="h-8" src="https://i.ibb.co/SmWHDf9/remove.png" alt="Close" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/" onClick={closeMenu} className='text-white mb-1'>Home</Link>
              <Link to="/community" onClick={closeMenu} className='text-white'>Community</Link>
              <Link to="/blogs" onClick={closeMenu} className='text-white'>Blogs</Link>
              <Link to="/about" onClick={closeMenu} className='text-white'>About Us</Link>
              <Link to="/contact" onClick={closeMenu} className='text-white'>Contact Us</Link>
            </div>
          </div>
        )}

        {/* Main Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className='hover:text-[#e27f5a] text-white'>Home</Link>
          <Link to="/community" className='hover:text-[#e27f5a] text-white'>Community</Link>
          <Link to="/blogs" className='hover:text-[#e27f5a] text-white'>Blogs</Link>
          <Link to="/about" className='hover:text-[#e27f5a] text-white'>About Us</Link>
          <Link to="/contact" className='hover:text-[#e27f5a] text-white'>Contact Us</Link>
        </div>

        {/* User Dropdown */}
        <div className="flex items-center gap-3">
          {user && (
            <div className="relative" onClick={toggleDropdownTwo}>
              <img className="w-5 h-5 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full" src={userPhoto} alt="" />
              {/* Dropdown Content */}
              {dropdownOpenTwo && (
                <div className="absolute w-[150px] z-30 top-full mt-1 -ml-[115px] py-2 bg-white text-gray-800 shadow-md rounded-lg">
                  <h1 className="block px-4 py-2 text-sm">{userName}</h1>
                  <p className="block px-4 py-2 text-xs">{userEmail}</p>
                  <Link to="/Dashboard" className="block px-4 py-2 text-sm hover:bg-[#EF5C2B]" onClick={closeDropdownTwo}>
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className=" px-4 py-2 text-sm hover:bg-[#EF5C2B]"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          )}

          {!user && (
            <Link to="/login">
              <button className="py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-[#162028]">
                Log In
              </button>
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
