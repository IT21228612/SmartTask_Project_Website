import SectionTitle from '../components/SectionTitle';

const supervisorPhoto = new URL('../images/supervisor_1.JPG', import.meta.url).href;
const researcherPhoto = new URL('../images/user_1.png', import.meta.url).href;

function UserPlaceholder({ label }) {
  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 text-slate-400" aria-label={label}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM4.5 20.118a7.5 7.5 0 1115 0 .75.75 0 01-.391.66A15.22 15.22 0 0112 22.5a15.22 15.22 0 01-7.109-1.722.75.75 0 01-.391-.66z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

const people = [
  {
    order: '1',
    role: 'Supervisor',
    name: 'Ms. Dilani Lunugalage',
    designation: 'Lecturer',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    emails: [{ label: 'Email', value: 'dilani.l@sliit.lk' }],
    image: <img src={supervisorPhoto} alt="Ms. Dilani Lunugalage" className="h-28 w-28 rounded-full object-cover shadow" />,
  },
  {
    order: '2',
    role: 'Researcher',
    name: 'Mr. De Silva S.J.W.',
    studentId: 'IT21228612',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    degree: 'BSc (Hons) in Information Technology Specialising in Software Engineering',
    emails: [
      { label: 'SLIIT student mail', value: 'it21228612@my.sliit.lk' },
      { label: 'Personal', value: 'jeewantha.jds@gmail.com' },
    ],
    image: <img src={researcherPhoto} alt="Mr. De Silva S.J.W." className="h-28 w-28 rounded-full object-cover shadow" />,
  },
  {
    order: '3',
    role: 'Former Supervisor',
    name: 'Mr. Suresh Niroshan Fernando',
    note: 'Supervised the project up to Progress Presentation 1',
    designation: 'Former Lecturer',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    image: <UserPlaceholder label="Former supervisor placeholder avatar" />,
  },
];

export default function About() {
  return (
    <div className="pb-4 pt-10">
     <SectionTitle title="About" subtitle="Project supervision and researcher details." />

      <div className="card-surface mb-6 grid gap-4 p-4 text-center sm:grid-cols-2 sm:p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Project ID</p>
          <p className="mt-1 text-2xl font-bold text-slate-800">25-26J-531</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Research Period</p>
          <p className="mt-1 text-2xl font-bold text-slate-800">July 2025 - July 2026</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {people.map((person) => (
          <article key={person.role} className="card-surface p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              {person.image}
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-indigo-600">
               {person.role}
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-800">{person.name}</h3>

              <dl className="mt-4 w-full space-y-3 text-left text-sm">
                {person.studentId && (
                  <div>
                    <dt className="font-semibold text-slate-700">Student ID</dt>
                    <dd className="text-slate-600">{person.studentId}</dd>
                  </div>
                )}
                {person.note && (
                  <div>
                    <dt className="font-semibold text-slate-700">Note</dt>
                    <dd className="text-slate-600">{person.note}</dd>
                  </div>
                )}
                {person.designation && (
                  <div>
                    <dt className="font-semibold text-slate-700">Designation</dt>
                    <dd className="text-slate-600">{person.designation}</dd>
                  </div>
                )}
                {person.institution && (
                  <div>
                    <dt className="font-semibold text-slate-700">Institution</dt>
                    <dd className="text-slate-600">{person.institution}</dd>
                  </div>
                )}
                {person.degree && (
                  <div>
                    <dt className="font-semibold text-slate-700">Degree</dt>
                    <dd className="text-slate-600">{person.degree}</dd>
                  </div>
                )}
                {person.emails?.length > 0 && (
                  <div>
                    <dt className="font-semibold text-slate-700">Email{person.emails.length > 1 ? 's' : ''}</dt>
                    <dd className="space-y-1 text-slate-600">
                      {person.emails.map((email) => (
                        <div key={email.value}>
                          {email.label}: <a href={`mailto:${email.value}`} className="text-indigo-600 hover:underline">{email.value}</a>
                        </div>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
