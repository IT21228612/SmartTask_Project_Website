import googleMapsIcon from '../images/google-maps-icon.png';
import espressoIcon from '../images/espresso-icon.png';
import mockitoIcon from '../images/mokito-icon.png';

const techStackIcons = [
  { name: 'Java for Android application', iconClass: 'ci ci-java' },
  { name: 'Android Studio', iconClass: 'ci ci-androidstudio' },
  { name: 'SQLite / Room', iconClass: 'ci ci-sqlite' },
  { name: 'Google Maps & Places API', imageSrc: googleMapsIcon },
  { name: 'Android Native APIs', iconClass: 'ci ci-android' },
  { name: 'JUnit', iconClass: 'ci ci-junit-horizontal' },
  { name: 'Espresso', imageSrc: espressoIcon },
  { name: 'Mockito', imageSrc: mockitoIcon },
  { name: 'GitHub', iconClass: 'ci ci-github' },
  { name: 'Open AI API', iconClass: 'ci ci-openai' },
];

export default function TechStackIcons() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {techStackIcons.map((item) => (
        <div key={item.name} className="card-surface flex items-center gap-3 rounded-xl p-4 text-sm font-medium text-slate-700">
          {item.imageSrc ? (
            <img src={item.imageSrc} alt={`${item.name} icon`} className="h-10 w-10 object-contain" />
          ) : (
            <i className={`${item.iconClass} tech-stack-icon ci-4x`} aria-hidden="true" />
          )}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
