export default function DocumentCard({ title, description, status, buttonText }) {
  return (
    <div className="card-surface flex h-full flex-col p-6">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{status}</span>
        <button disabled className="cursor-not-allowed rounded-lg bg-slate-200 px-3 py-2 text-xs font-semibold text-slate-500">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
