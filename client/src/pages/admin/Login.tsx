export default function AdminLogin() {
  return (
    <main className="h-screen">
      <div className="h-screen pt-36 md:-mt-16 md:flex md:items-center md:justify-center md:flex-col">
      <header className="flex flex-col text-center items-center mx-8">
      <div className="flex items-center gap-2">
        <h1 className="text-4xl fnt-bungee">EZ<span className="text-yellow-400 fnt-bungee">|</span>Vote</h1>
        <h1 className="fnt-bungee bg-black text-yellow-400 px-2 text-2xl">ADMIN</h1>
        </div>
        <h1 className="mt-10 fnt-bungee bg-black text-yellow-400 px-2 w-fit">Login as Admin</h1>
        <p className="text-gray-700 mt-2">Login using your admin account to manage this system.</p>
      </header>
      
      <div className="mx-8 flex flex-col items-center gap-4 mt-10">
        <div className="w-full md:w-[420px] flex flex-col">
          <label className="text-sm">Username</label>
          <input type="text" placeholder="libyzxy0" className="bg-[#f7f2ee] py-2 px-4 border-2 border-black outline-none border-b-4 border-r-4 placeholder:text-gray-600 focus:border-yellow-400" />
        </div>
        <div className="w-full md:w-[420px] flex flex-col">
          <label className="text-sm">Password</label>
          <input type="password" placeholder="pogiko12345678" className="bg-[#f7f2ee] py-2 px-4 border-2 border-black outline-none border-b-4 border-r-4 placeholder:text-gray-600 focus:border-yellow-400" />
        </div>
        
        <div className="flex justify-center w-full md:w-[420px] mt-2">
        <button className="w-full bg-[#f7f2ee] border-black border-2 group" style={{ outline: 'none' }}>
            <div
              className="bg-yellow-400 border-black border-2 mb-[4px] mr-[4px] -ml-[6px] -mt-[6px] transition-all duration-150 hover:mb-0 hover:mr-0 hover:-ml-[2px] hover:-mt-[2px]"
            >
              <p className="py-2 px-4 text-black fnt-bungee">Login</p>
            </div>
          </button>
          </div>
      </div>
      </div>
    </main>
  )
}