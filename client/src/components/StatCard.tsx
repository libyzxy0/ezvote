type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

export function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-yellow-400 pt-2 pl-2">
      
      <div
        className="bg-yellow-50 border-2 border-black border-b-6 p-4 text-center"
        style={{
          marginBottom: "6px",
          marginRight: "6px",
          marginLeft: "-8px",
          marginTop: "-8px",
        }}
      >

        <div className="flex justify-center text-black mb-2">
          {icon}
        </div>

        <h2 className="fnt-bungee text-xl">{value}</h2>

        <p className="text-xs text-gray-600 mt-1 font-semibold">
          {label}
        </p>
      </div>
    </div>
  );
}