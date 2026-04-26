import SectionTitle from '../components/SectionTitle';

const details = [
  ['Name', 'De Silva S.J.W.'],
  ['Student ID', 'IT21228612'],
  ['Project ID', '25-26J-531'],
  ['Degree', 'BSc (Hons) in Information Technology Specialising in Software Engineering'],
  ['Institution', 'Sri Lanka Institute of Information Technology'],
  ['Supervisor', 'Mr. Suresh Niroshan Fernando'],
];

export default function About() {
  return (
    <div className="pb-4 pt-10">
      <SectionTitle title="About the Researcher" subtitle="This page summarizes the student profile and supervision details for the completed SmartTask project." />
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="card-surface flex min-h-72 items-center justify-center p-6 text-center text-sm text-slate-500">
          Professional photo placeholder
        </div>
        <div className="card-surface p-6 sm:p-8">
          <dl className="grid gap-4">
            {details.map(([label, value]) => (
              <div key={label} className="grid gap-1 sm:grid-cols-[180px_1fr] sm:gap-4">
                <dt className="font-semibold text-slate-700">{label}</dt>
                <dd className="text-slate-600">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
