import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the blur after scrolling down 20 pixels
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
    <nav 
      className={`sticky top-0 px-8 py-6 flex flex-row items-center justify-between transition-all duration-300 z-50 ${
        isScrolled 
          ? 'bg-[#f7f2ee]' 
          : 'bg-transparent'
      }`}
    >
      <div>
        <h1 className="text-2xl fnt-bungee">EZ<span className="text-yellow-400 fnt-bungee">/</span>Vote</h1>
      </div>
      <div>
        <button className="bg-yellow-400 border-black border-2" style={{ outline: 'none' }}>
          <div
            className="border-2 border-black bg-[#f7f2ee] p-1.5"
            style={{
              marginBottom: '3px',
              marginRight: '3px',
              marginLeft: '-6px',
              marginTop: '-6px',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => Object.assign(e.currentTarget.style, { marginBottom: '0px', marginRight: '0px', marginLeft: '-2px', marginTop: '-2px' })}
            onMouseLeave={e => Object.assign(e.currentTarget.style, { marginBottom: '3px', marginRight: '3px', marginLeft: '-6px', marginTop: '-6px' })}
          >
            <Menu size={20} />
          </div>
        </button>
      </div>
    </nav>
  );
}
