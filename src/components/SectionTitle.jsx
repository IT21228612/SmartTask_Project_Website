export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
