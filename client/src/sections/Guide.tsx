import { LogIn, ShieldCheck, Users, CheckCircle } from "lucide-react";

type StepProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function Step({ icon, title, desc }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center gap-2">

      <div className="text-black">{icon}</div>

      <h3 className="fnt-bungee text-sm">{title}</h3>

      <p className="text-xs text-gray-600 leading-tight">{desc}</p>

    </div>
  );
}
export function Guide() {
  return (
    <section className="px-6 py-12 w-full">
      <div className="max-w-6xl mx-auto">

        <h1 className="fnt-bungee text-xl bg-black text-yellow-400 w-fit py-1 px-2 -rotate-2">
          How to Vote
        </h1>

        <p className="mt-3 text-gray-600">
          Follow these simple steps to cast your vote securely.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          <Step icon={<LogIn />} title="Login" desc="Use student account" />

          <Step icon={<ShieldCheck />} title="Verify" desc="Confirm identity" />

          <Step icon={<Users />} title="Choose" desc="Pick candidates" />

          <Step icon={<CheckCircle />} title="Submit" desc="Finalize vote" />

        </div>
      </div>
    </section>
  );
}