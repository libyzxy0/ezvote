export function Candidates() {
  return (
    <section className="mx-6 py-10">
      <div>
        <h1 className="fnt-bungee text-xl bg-black text-yellow-400 w-fit py-1 px-2 -rotate-2">Our Candidates</h1>
        <p className="mt-2">Meet our candidates from different political parties and see their platforms.</p>
      </div>

      <div className="mt-8">

        <div className="bg-yellow-400">
          <div className="bg-yellow-50 border-2 border-black border-b-6" style={{
            marginBottom: '6px',
            marginRight: '6px',
            marginLeft: '-8px',
            marginTop: '-8px',
            transition: 'all 0.15s ease',
          }}>
          <span className="text-gray-600 text-xs bg-black text-yellow-400 px-2 py-[2px] w-fit fnt-bungee">Running for President</span>
          
            <div className="mx-2 my-2">
              <img className="h-52 w-full object-cover border-black border-b-4 border-r-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZ1ZrXY56PlXBaAMad_9P_TH8_PYGoFrbQcxCumgEwA&s=10" alt="Photo" />
            </div>
            <div className="my-2 mx-4">
            
              <h1 className="fnt-bungee text-lg">Jan Liby Dela Costa</h1>
              <p className="text-gray-600 text-sm">A results-driven leader dedicated to transparent governance, economic growth, and empowering every citizen.</p>
              <div className="mt-2 flex gap-2 flex-row pb-2">
                <span className="bg-yellow-400/20 border-2 border-yellow-200 text-yellow-400 rounded-tl-lg px-2 py-[3px] text-xs">Independent</span>
                <span className="bg-orange-400/20 border-2 border-orange-200 text-orange-400 rounded-tl-lg px-2 py-[3px] text-xs">BSIT ITD1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}