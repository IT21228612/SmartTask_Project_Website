import { Link } from 'react-router-dom';

export default function MilestoneCard({ title, description, marks, reference }) {
  const destination = reference
    ? `/${reference.type === 'presentation' ? 'presentations' : 'documents'}?highlight=${reference.target}`
    : null;

  return (
    <div className="card-surface p-6">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        {marks ? <span className="rounded-md bg-slate-100 px-2 py-1">Marks: {marks}</span> : null}
        {reference ? (
          <Link
            to={destination}
            className="rounded-md border border-teal-300 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:border-teal-500 hover:bg-teal-100"
          >
            {reference.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
