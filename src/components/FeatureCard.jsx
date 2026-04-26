export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="card-surface p-6">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-xl text-teal-700">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
