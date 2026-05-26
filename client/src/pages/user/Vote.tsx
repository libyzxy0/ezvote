export default function Vote() {
  return (
    <main className="px-6">
      <header className="py-6 flex flex-row justify-between items-center border-b-2 border-dashed border-gray-200">
        <h1 className="text-2xl fnt-bungee">EZ<span className="text-yellow-400 fnt-bungee">|</span>Vote</h1>
        <p className="fnt-bungee bg-black text-yellow-400 px-2">20260018969</p>
      </header>

      <div className="border-b-2 border-dashed border-gray-200 py-6">
        <h1 className="fnt-bungee">Student Council Election A.Y. 2026–2027</h1>
        <p className="mt-2 text-sm">
          Official digital ballot for the Student Council Election A.Y. 2026–2027. Review each candidate carefully before submitting your vote, as selections can no longer be modified once confirmed.
        </p>
        <p className="mt-2 text-sm">
          Your votes remain completely anonymous. Candidates and other voters cannot see who you voted for, ensuring a fair and unbiased election process. The system only records that you have voted, not the candidates you selected.
        </p>
      </div>
    </main>
  )
}