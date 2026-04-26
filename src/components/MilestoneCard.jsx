export default function MilestoneCard({ title, description, marks }) {
  return (
    <div className="card-surface p-6">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
        {marks ? <span className="rounded-md bg-slate-100 px-2 py-1">Marks: {marks}</span> : null}
      </div>
    </div>
  );
}
