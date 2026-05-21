import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 mx-8 py-6 flex flex-row items-center justify-between">
      <div>
        <h1 className="text-2xl pb-2 fnt-bungee">EZ/Vote</h1>
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