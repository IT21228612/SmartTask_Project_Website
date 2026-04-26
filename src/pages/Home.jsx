import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import SectionTitle from '../components/SectionTitle';

const features = [
  {
    icon: '🧠',
    title: 'Context Aware Task Prioritization',
    text: 'Tasks are ranked based on urgency, current context, and user selected priority.',
  },
  {
    icon: '🔔',
    title: 'Adaptive Notification Timing',
    text: 'Reminders are delivered when the user is more likely to respond, while unnecessary interruptions are reduced.',
  },
  {
    icon: '🔒',
    title: 'Offline First Privacy',
    text: 'Task and context data are stored locally on the Android device to improve privacy and reliability.',
  },
  {
    icon: '✅',
    title: 'SmartTask MVP',
    text: 'The completed implementation focuses on proving the core concept through task management, context matching, prioritization, and notification handling.',
  },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-4 pt-10">
      <section className="card-surface bg-gradient-to-br from-teal-600 to-cyan-600 p-8 text-white sm:p-12">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          SmartTask: Context Aware Mobile To Do List for Intelligent Task Management
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-cyan-50 sm:text-lg">
          SmartTask is a context aware mobile task management application developed to reduce cognitive overload and poorly
          timed reminders. The system prioritizes tasks using real time context such as location, time, activity, and device state.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/documents" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-700 shadow hover:bg-slate-100">
            View Project Documents
          </Link>
          <Link to="/domain" className="rounded-xl border border-cyan-100 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Explore Research Domain
          </Link>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Core Features"
          subtitle="The SmartTask application demonstrates a completed MVP for context aware task support. Data logging and insight generation remain identified as a future enhancement."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
}
