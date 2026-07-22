import { useState } from "react";
import { Menu, X } from "lucide-react";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <p className="text-3xl font-bold text-blue-600">
          BrandLogo
        </p>
        <ul className="hidden md:flex space-x-10 text-gray-600 font-medium">
          <li className="text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold">
          Get Started
        </button>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white pb-4">
          <ul className="flex flex-col items-center space-y-5 font-medium">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
export default Header;
