import { useEffect, useRef } from 'react';

export default function DocumentCard({ id, title, description, status, buttonText, fileUrl, isHighlighted }) {
  const cardRef = useRef(null);
  const isAvailable = status?.toLowerCase() === 'available';

  useEffect(() => {
    if (isHighlighted && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isHighlighted]);

  return (
    <div
      id={id}
      ref={cardRef}
      className={`card-surface relative flex h-full flex-col overflow-hidden p-6 transition-all duration-700 ${
        isHighlighted ? 'border-beam-card border-2 border-amber-300 shadow-md shadow-amber-100' : ''
      }`}
    >
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isAvailable ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
          }`}
        >
          {status}
        </span>
        {fileUrl ? (
          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-teal-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-teal-700"
          >
            {buttonText}
          </a>
        ) : (
          <button disabled className="cursor-not-allowed rounded-lg bg-slate-200 px-3 py-2 text-xs font-semibold text-slate-500">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
