export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 w-full pt-12">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

        <div>
          <h1 className="fnt-bungee text-white text-lg">
            EZ<span className="text-yellow-400 fnt-bungee">|</span>VOTE <span className="text-xs fnt-bungee text-green-400">by libyzxy0 systems</span>
          </h1>
          <p className="text-sm text-gray-300 mt-2">
            Secure, transparent, and fully customizable digital election system designed for school's student council elections.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-yellow-400 mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer">Candidates</li>
            <li className="hover:text-yellow-400 cursor-pointer">How to Vote</li>
            <li className="hover:text-yellow-400 cursor-pointer">FAQs</li>
            <li className="hover:text-yellow-400 cursor-pointer">Results</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-yellow-400 mb-3">
            Election Info
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>A.Y. 2026–2027</li>
            <li> Online Voting System</li>
            <li>Secure & Anonymous</li>
            <li>Student Council Election</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-sm font-bold text-yellow-400 mb-3">
            Want to integrate?
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            If you are a school administrator or student council member interested in implementing this system for your school’s student council elections, feel free to send us an email at <a href="mailto:janlibydelacosta@gmail.com" className="underline decoration-dashed text-yellow-400">janlibydelacosta@gmail.com</a> to schedule a demo or discussion.
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EZVote Voting System. All rights reserved.
      </div>
    </footer>
  );
}