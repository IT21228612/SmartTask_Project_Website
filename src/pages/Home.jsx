import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import SectionTitle from '../components/SectionTitle';

const features = [
  {
    icon: '📝',
    title: 'Task Input and Management',
    text: 'Users can create, edit, delete, complete, snooze, and postpone tasks with details such as title, deadline, priority, and optional location.',
  },
  {
    icon: '📍',
    title: 'Context Acquisition',
    text: 'The app captures real time context such as location, time, user activity, calendar state, device state, and connectivity.',
  },
  {
    icon: '🧠',
    title: 'Context Matching and Prioritization',
    text: 'Tasks are matched with the current user context and reordered based on urgency, context relevance, interruption cost, and manual priority.',
  },
  {
    icon: '🔔',
    title: 'Adaptive Notification Delivery',
    text: 'Notifications are sent only when the task is relevant and the user situation is suitable, helping to reduce unnecessary interruptions.',
  },
];

const highlights = [
  'Native Android application developed using Java',
  'Offline first design with local SQLite and Room storage',
  'Six component modular architecture',
  'Voice based task input included for improved usability',
  'Completed MVP focused on context matching, prioritization, and notifications',
];

export default function Home() {
  return (
    <div className="space-y-16 pb-4 pt-10">
      <section className="card-surface bg-gradient-to-br from-teal-600 to-cyan-600 p-8 text-white sm:p-12">
        <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-cyan-50">
          Project ID: 25-26J-531
        </p>

        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          SmartTask: Context Aware Mobile To Do List for Intelligent Task Management
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-cyan-50 sm:text-lg">
          SmartTask is a context aware mobile task management application developed to reduce cognitive overload,
          poorly timed reminders, and manual task prioritization. The system uses real time context such as
          location, time, activity, calendar state, and device state to identify relevant tasks and deliver suitable
          notifications.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/documents"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-700 shadow hover:bg-slate-100"
          >
            View Project Documents
          </Link>
          <Link
            to="/domain"
            className="rounded-xl border border-cyan-100 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Explore Research Domain
          </Link>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Project Overview"
          subtitle="SmartTask was implemented as a native Android MVP to demonstrate context aware task filtering, dynamic task prioritization, and adaptive notification handling."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-6">
            <h3 className="text-xl font-bold text-slate-900">Problem Addressed</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Traditional task management applications mostly depend on static task lists and fixed reminders.
              This often causes missed reminders, unnecessary interruptions, and extra mental effort. SmartTask
              addresses this issue by using the user&apos;s current context to display more relevant tasks and reduce
              poorly timed notifications.
            </p>
          </div>

          <div className="card-surface p-6">
            <h3 className="text-xl font-bold text-slate-900">Implemented Solution</h3>
            <p className="mt-4 leading-7 text-slate-600">
              The application follows a modular workflow where tasks are created, context is captured, task relevance
              is calculated, task order is updated, and notifications are delivered only when suitable. Advanced
              behavioral learning and the full data logging and insights module were not fully implemented and remain
              future enhancements.
            </p>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Core Features"
          subtitle="The completed system focuses on the main SmartTask pipeline: task input, context acquisition, context matching, prioritization, and adaptive notification delivery."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <SectionTitle
          title="System Highlights"
          subtitle="Key implementation details of the completed SmartTask MVP."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}