import { Users, UserCheck, Trophy, ShieldCheck } from "lucide-react";
import { StatCard } from '@/components/StatCard'
export function Stats() {
  return (
    <section className="bg-white px-6 py-10 relative w-full">
      <div>
        <h1 className="fnt-bungee text-xl bg-black text-yellow-400 w-fit py-1 px-2 -rotate-2">
          Statistics
        </h1>
        <p className="mt-2">
          Election overview by the numbers.
        </p>
      </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

          {/* Card */}
          <StatCard icon={<Users />} value="2,500+" label="Eligible Voters" />
          <StatCard icon={<UserCheck />} value="35" label="Candidates" />
          <StatCard icon={<Trophy />} value="10" label="Positions" />
          <StatCard icon={<ShieldCheck />} value="100%" label="Secure Voting" />

        </div>
    </section>
  );
}