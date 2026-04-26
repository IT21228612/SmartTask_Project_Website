export default function MilestoneCard({ title, description, date, marks }) {
  return (
    <div className="relative card-surface p-6">
      <div className="absolute -left-3 top-8 h-6 w-6 rounded-full border-4 border-white bg-teal-500 shadow" />
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
        <span className="rounded-md bg-slate-100 px-2 py-1">Date: {date}</span>
        {marks ? <span className="rounded-md bg-slate-100 px-2 py-1">Marks: {marks}</span> : null}
      </div>
    </div>
  );
}
