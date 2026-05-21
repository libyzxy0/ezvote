import { Navbar } from '@/components/Navbar';

export function Hero() {
  return (
    <section className="hero h-screen w-full bg-[#f7f2ee]">
      <Navbar />
      <div className="text-center mx-5 md:mx-24 h-screen mt-36 md:mt-28">
        <h1 className="fnt-bungee text-4xl">STUDENT COUNCIL ELECTION FOR A.Y. 2026-2027</h1>
        <p className="mt-4">Cast your vote and choose the leaders who will represent you. Every student voice matters.</p>
        <div className="flex gap-4 mt-8 justify-center">

          <button className="bg-[#f7f2ee] border-black border-2 group" style={{ outline: 'none' }}>
            <div
              className="bg-yellow-400 border-black border-2"
              style={{
                marginBottom: '4px',
                marginRight: '4px',
                marginLeft: '-6px',
                marginTop: '-6px',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => Object.assign(e.currentTarget.style, { marginBottom: '0px', marginRight: '0px', marginLeft: '-2px', marginTop: '-2px' })}
              onMouseLeave={e => Object.assign(e.currentTarget.style, { marginBottom: '4px', marginRight: '4px', marginLeft: '-6px', marginTop: '-6px' })}
            >
              <p className="py-2 px-4 text-black fnt-bungee">Vote Now!</p>
            </div>
          </button>

          <button className="bg-yellow-400 border-black border-2" style={{ outline: 'none' }}>
            <div
              className="bg-[#f7f2ee] border-black border-2"
              style={{
                marginBottom: '4px',
                marginRight: '4px',
                marginLeft: '-6px',
                marginTop: '-6px',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => Object.assign(e.currentTarget.style, { marginBottom: '0px', marginRight: '0px', marginLeft: '-2px', marginTop: '-2px' })}
              onMouseLeave={e => Object.assign(e.currentTarget.style, { marginBottom: '4px', marginRight: '4px', marginLeft: '-6px', marginTop: '-6px' })}
            >
              <p className="py-2 px-4 text-black fnt-bungee">Candidates</p>
            </div>
          </button>

        </div>
      </div>
    </section>
  )
}