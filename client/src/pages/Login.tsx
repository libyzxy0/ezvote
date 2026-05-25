

export default function Login() {
  return (
    <main className="hero h-screen">
      <div className="h-screen pt-36 md:-mt-16 md:flex md:items-center md:justify-center md:flex-col">
      <header className="flex flex-col text-center items-center mx-8">
        <h1 className="text-4xl fnt-bungee">EZ<span className="text-yellow-400 fnt-bungee">|</span>Vote</h1>
        <h1 className="mt-10 fnt-bungee bg-black text-yellow-400 px-2 w-fit">Login to proceed</h1>
        <p className="text-gray-700 mt-2">Login using your student account to make a vote.</p>
      </header>
      
      <div className="mx-8 flex flex-col items-center gap-4 mt-10">
        <div className="w-full md:w-[480px] flex flex-col">
          <label className="text-sm">Username/Student ID</label>
          <input type="text" placeholder="20260058333" className="bg-[#f7f2ee] py-2 px-4 border-2 border-black outline-none border-b-4 border-r-4 placeholder:text-gray-600" />
        </div>
        <div className="w-full md:w-[480px] flex flex-col">
          <label className="text-sm">Password</label>
          <input type="password" placeholder="pogiako123" className="bg-[#f7f2ee] py-2 px-4 border-2 border-black outline-none border-b-4 border-r-4 placeholder:text-gray-600" />
        </div>
        
        <div className="flex justify-center w-full md:w-[480px] mt-2">
        <button className="w-full bg-[#f7f2ee] border-black border-2 group" style={{ outline: 'none' }}>
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
              <p className="py-2 px-4 text-black fnt-bungee">Continue</p>
            </div>
          </button>
          </div>
      </div>
      </div>
    </main>
  )
}