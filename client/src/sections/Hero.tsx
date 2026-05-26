import { Navbar } from '@/components/Navbar';

export function Hero() {
  return (
    <section className="hero h-screen w-full bg-[#f7f2ee]">
      <Navbar />
      <div className="text-center mx-5 md:mx-28 h-screen mt-36 md:-mt-16 md:flex md:items-center md:justify-center md:flex-col">
        <span className="text-sm bg-black px-4 py-1.5 text-yellow-400 fnt-bungee">Voting is Open</span>
        <h1 className="fnt-bungee text-3xl md:text-5xl mt-8">STUDENT COUNCIL ELECTION PORTAL FOR A.Y. 2026-2027</h1>
        <p className="mt-4">Cast your vote and choose the leaders who will represent you. Every student voice matters.</p>
        <div className="flex gap-4 mt-8 justify-center">

          <button className="bg-[#f7f2ee] border-black border-2 group" style={{ outline: 'none' }}>
            <div
              className="bg-yellow-400 border-black border-2 mb-[4px] mr-[4px] -ml-[6px] -mt-[6px] transition-all duration-150 hover:mb-0 hover:mr-0 hover:-ml-[2px] hover:-mt-[2px]"
            >
              <p className="py-2 px-4 text-black fnt-bungee">Vote Now!</p>
            </div>
          </button>

          <button className="bg-yellow-400 border-black border-2" style={{ outline: 'none' }}>
            <div
              className="bg-[#f7f2ee] border-black border-2 mb-[4px] mr-[4px] -ml-[6px] -mt-[6px] transition-all duration-150 hover:mb-0 hover:mr-0 hover:-ml-[2px] hover:-mt-[2px]"
            >
              <p className="py-2 px-4 text-black fnt-bungee">Candidates</p>
            </div>
          </button>

        </div>
      </div>
    </section>
  )
}