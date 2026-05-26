export default function Vote() {
  return (
    <main className="px-4">
      <header className="py-6 flex flex-row justify-between items-center border-b-2 border-dashed border-gray-200">
        <h1 className="text-2xl fnt-bungee">EZ<span className="text-yellow-400 fnt-bungee">|</span>Vote</h1>
        <p className="fnt-bungee bg-black text-yellow-400 px-2">20260018969</p>
      </header>

      <div className="border-b-2 border-dashed border-gray-200 py-6 mb-8">
        <h1 className="fnt-bungee">Student Council Election A.Y. 2026–2027</h1>
        <p className="mt-2 text-sm">
          Official digital ballot for the Student Council Election A.Y. 2026–2027. Review each candidate carefully before submitting your vote, as selections can no longer be modified once confirmed.
        </p>
        <p className="mt-2 text-sm">
          Your votes remain completely anonymous. Candidates and other voters cannot see who you voted for, ensuring a fair and unbiased election process. The system only records that you have voted, not the candidates you selected.
        </p>
      </div>
      <div>
      
        <div className="bg-yellow-400 pt-2 pl-2 border-yellow-400 border-b mb-20">
        
          <div className="bg-yellow-50 border-2 border-black border-b-6 mb-[6px] mr-[6px] -ml-[8px] -mt-[8px] px-4 pb-4">
            <div className="border-dashed border-gray-200 border-b-2 pt-4 pb-2 mb-4">
              <h1 className="fnt-bungee">1. For President</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            
              <div className="border-black border-2 border-b-4 border-r-4 py-2 px-4 flex flex-row items-center justify-between">
                <h1>Jan Liby Dela Costa</h1>
                <span className="fnt-bungee">#14</span>
              </div>
              <div className="border-black border-2 border-b-4 border-r-4 py-2 px-4 flex flex-row items-center justify-between">
                <h1>Marvin Quillo Saik</h1>
                <span className="fnt-bungee">#04</span>
              </div>
              <div className="border-black border-2 border-b-4 border-r-4 py-2 px-4 flex flex-row items-center justify-between">
                <h1>Sherwin Jefferson</h1>
                <span className="fnt-bungee">#06</span>
              </div>
              
            </div>
            
          </div>
          
          <div className="bg-yellow-50 border-2 border-black border-b-6 mb-[6px] mr-[6px] -ml-[8px] -mt-[8px] px-4 pb-4">
            <div className="border-dashed border-gray-200 border-b-2 pt-4 pb-2 mb-4">
              <h1 className="fnt-bungee">2. For Vice President</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            
              <div className="border-black border-2 border-b-4 border-r-4 py-2 px-4 flex flex-row items-center justify-between">
                <h1>Jan Liby Dela Costa</h1>
                <span className="fnt-bungee">#14</span>
              </div>
              <div className="border-black border-2 border-b-4 border-r-4 py-2 px-4 flex flex-row items-center justify-between">
                <h1>Marvin Quillo Saik</h1>
                <span className="fnt-bungee">#04</span>
              </div>
              <div className="border-black border-2 border-b-4 border-r-4 py-2 px-4 flex flex-row items-center justify-between">
                <h1>Sherwin Jefferson</h1>
                <span className="fnt-bungee">#06</span>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </main>
  )
}