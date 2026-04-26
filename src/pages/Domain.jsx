import SectionTitle from '../components/SectionTitle';

const technologies = [
  'React and Tailwind CSS for website',
  'Java for Android application',
  'Android Studio',
  'SQLite or Room',
  'Google Maps API',
  'Android Notification API',
  'JUnit',
  'Espresso',
  'Mockito',
  'GitHub',
];

export default function Domain() {
  return (
    <div className="space-y-10 pb-4 pt-10">
      <SectionTitle
        title="Research Domain"
        subtitle="The domain study captures the problem background, implementation rationale, and technical approach used in SmartTask."
      />

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Literature Survey</h3>
        <p className="mt-3 leading-7 text-slate-600">
          Existing task management applications mainly depend on static task lists and fixed reminders. These tools help users record tasks,
          but they do not fully adapt to the user’s real world situation. Research in context aware computing shows that location, activity,
          time, and device state can improve how mobile systems respond to user needs.
        </p>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Research Gap</h3>
        <p className="mt-3 leading-7 text-slate-600">
          Most commercial task applications provide manual prioritization and scheduled notifications. Some applications support location based reminders,
          but they do not combine multiple contextual signals for real time task ranking. This creates a gap for a practical mobile solution that adapts
          task order and reminders according to user context.
        </p>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Research Problem</h3>
        <p className="mt-3 leading-7 text-slate-600">
          Users often miss important tasks or receive reminders at unsuitable moments because common task management systems do not understand the user’s current context.
          The research problem focuses on how a mobile task management system can use contextual data to improve task prioritization and notification timing.
        </p>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Research Objectives</h3>
        <p className="mt-3 leading-7 text-slate-600">
          Main objective: To develop a context aware mobile task management application that prioritizes tasks and manages reminders based on real time user context.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          <li>Identify useful contextual signals for task management.</li>
          <li>Implement task creation and metadata management.</li>
          <li>Capture user context such as location, time, activity, and device state.</li>
          <li>Match tasks with current context.</li>
          <li>Rank tasks dynamically using urgency and contextual relevance.</li>
          <li>Deliver notifications at suitable moments.</li>
          <li>Evaluate the system using functional testing and real device validation.</li>
        </ul>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Methodology</h3>
        <p className="mt-3 leading-7 text-slate-600">
          The SmartTask app was developed using an MVP based approach. The implementation focuses on the main functional pipeline: task input,
          context acquisition, context matching, task prioritization, and adaptive notification delivery. The application was tested using unit testing,
          UI testing, integration testing, emulator based testing, and limited real device validation.
        </p>
      </section>

      <section>
        <h3 className="mb-4 text-xl font-semibold text-slate-900">Technologies Used</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((item) => (
            <div key={item} className="card-surface rounded-xl p-4 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
