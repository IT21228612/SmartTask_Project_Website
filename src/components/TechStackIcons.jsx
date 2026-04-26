const techStackIcons = [
  { name: 'Java for Android application', iconClass: 'ci ci-java' },
  { name: 'Android Studio', iconClass: 'ci ci-androidstudio' },
  { name: 'SQLite / Room', iconClass: 'ci ci-sqlite' },
  { name: 'Google Maps & Places API', iconClass: 'ci ci-googlemaps' },
  { name: 'Android Native APIs', iconClass: 'ci ci-android' },
  { name: 'JUnit', iconClass: 'ci ci-junit-horizontal' },
  { name: 'Espresso', iconClass: 'ci ci-coffee' },
  { name: 'Mockito', iconClass: 'ci ci-testinglibrary' },
  { name: 'GitHub', iconClass: 'ci ci-github' },
  { name: 'Open AI API', iconClass: 'ci ci-openai' },
];

export default function TechStackIcons() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {techStackIcons.map((item) => (
        <div key={item.name} className="card-surface flex items-center gap-3 rounded-xl p-4 text-sm font-medium text-slate-700">
          <i className={`${item.iconClass} tech-stack-icon ci-4x`} aria-hidden="true" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
