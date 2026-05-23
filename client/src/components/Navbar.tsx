import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-40 relative">
      <nav
        className={`relative z-50 px-8 py-6 flex flex-row items-center justify-between transition-all duration-100 z-50 ${isScrolled || isOpen
          ? 'bg-[#f7f2ee] border-b border-dashed border-gray-200'
          : 'bg-transparent'
          }`}
      >
        <div>
          <h1 className="text-2xl fnt-bungee">EZ<span className="text-yellow-400 fnt-bungee">|</span>Vote</h1>
        </div>
        <div>
          <ul className="flex-row gap-4 hidden md:flex">
            <li>
            <a href="/" className="fnt-bungee transition-all duration-300 hover:text-yellow-400 hover:bg-black px-2 py-1">Home</a>
          </li>
          <li>
            <a href="/about" className="fnt-bungee transition-all duration-300 hover:text-yellow-400 hover:bg-black px-2 py-1">About</a>
          </li>
          <li>
            <a href="/candidates" className="fnt-bungee transition-all duration-300 hover:text-yellow-400 hover:bg-black px-2 py-1">Candidates</a>
          </li>
          <li>
            <a href="/vote" className="fnt-bungee transition-all duration-300 text-yellow-400 bg-black px-3 py-2 border-b-4 border-r-4 border-yellow-400">Vote Now!</a>
          </li>
          </ul>
          <button className="bg-yellow-400 border-black border-2 md:hidden" onClick={() => setIsOpen(!isOpen)} style={{ outline: 'none' }}>
            <div
              className="border-2 border-black bg-[#f7f2ee] p-1.5"
              style={{
                marginBottom: isOpen ? '0px' : '3px',
                marginRight: isOpen ? '0px' : '3px',
                marginLeft: isOpen ? '-2px' : '-6px',
                marginTop: isOpen ? '-2px' : '-6px',
                transition: 'all 0.15s ease',
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>
      </nav>
      <div className={`md:hidden absolute z-40 ${isOpen ? 'top-22' : '-top-46'} transition-all duration-200 w-full px-8 bg-[#f7f2ee] h-auto py-4 border-b border-gray-200`}>
        <ul className="flex flex-col justify-center text-center gap-4">
          <li>
            <a href="/" className="fnt-bungee transition-all duration-300 hover:text-yellow-400 hover:bg-black px-2 py-1">Home</a>
          </li>
          <li>
            <a href="/about" className="fnt-bungee transition-all duration-300 hover:text-yellow-400 hover:bg-black px-2 py-1">About</a>
          </li>
          <li>
            <a href="/candidates" className="fnt-bungee transition-all duration-300 hover:text-yellow-400 hover:bg-black px-2 py-1">Candidates</a>
          </li>
          <li>
            <a href="/vote" className="fnt-bungee transition-all duration-300 text-yellow-400 bg-black px-2 py-1 border-b-4 border-r-4 border-yellow-400">Vote Now!</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
