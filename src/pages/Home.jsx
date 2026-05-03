import { Link } from 'react-router-dom';

const coreFeatures = [
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
  { icon: '🤖', text: 'Native Android application developed using Java' },
  { icon: '🗄️', text: 'Offline first design with local SQLite and Room storage' },
  { icon: '🧩', text: 'Six component modular architecture' },
  { icon: '🎙️', text: 'Voice based task input included for improved usability' },
  { icon: '✅', text: 'Completed MVP focused on context matching, prioritization, and notifications' },
];

const quickTags = [
  { icon: '🎯', label: 'Context Aware' },
  { icon: '🧠', label: 'Smart Prioritization' },
  { icon: '🔔', label: 'Adaptive Notifications' },
  { icon: '🛡️', label: 'Privacy First' },
];

export default function Home() {
  return (
    <div className="space-y-12 pb-6">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-cyan-50/40 to-blue-50 px-6 py-10 shadow-sm lg:px-10">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-2xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
              <span className="h-2.5 w-2.5 rounded-full bg-teal-500" /> Project ID: 25-26J-531
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              SmartTask: Context Aware Mobile To Do List for{' '}
              <span className="text-teal-600">Intelligent Task Management</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              SmartTask is a context aware mobile task management application designed to reduce cognitive overload,
              poorly timed reminders, and manual task prioritization. The system uses real time context to identify
              relevant tasks and deliver suitable notifications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/documents" className="rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white shadow hover:bg-teal-700">
                View Project Documents
              </Link>
              <Link to="/domain" className="rounded-xl border-2 border-teal-500 px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50">
                Explore Research Domain
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickTags.map((tag) => (
                <div key={tag.label} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <div className="mb-2 text-2xl">{tag.icon}</div>
                  <p className="text-sm font-semibold text-slate-700">{tag.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border-[10px] border-slate-900 bg-white p-4 shadow-2xl">
            <div className="rounded-[2rem] bg-gradient-to-b from-teal-600 to-cyan-500 p-4 text-white">
              <p className="text-center text-lg font-semibold">SmartTask</p>
            </div>
            <div className="space-y-3 p-3">
              {['Project Report', 'Client Meeting', 'Grocery Shopping'].map((task, index) => (
                <div key={task} className="rounded-xl border border-slate-200 p-3">
                  <p className="font-semibold text-slate-800">{task}</p>
                  <p className="text-sm text-slate-500">Today</p>
                  <span className="mt-2 inline-block rounded-full bg-teal-100 px-2 py-1 text-xs font-semibold text-teal-700">
                    Priority {index + 1}
                  </span>
                </div>
              ))}
              <button className="w-full rounded-xl bg-teal-600 py-3 font-semibold text-white">+ Add Task</button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-center text-4xl font-bold text-slate-900">Project Overview</h2>
        <p className="mx-auto max-w-4xl text-center text-lg text-slate-600">SmartTask was implemented as a native Android MVP to demonstrate context aware task filtering, dynamic task prioritization, and adaptive notification handling.</p>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Problem Addressed</h3>
            <p className="mt-4 leading-8 text-slate-600">Traditional task management applications mostly depend on static task lists and fixed reminders. This often causes missed reminders, unnecessary interruptions, and extra mental effort. SmartTask addresses this issue by using the user&apos;s current context to display more relevant tasks and reduce poorly timed notifications.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Implemented Solution</h3>
            <p className="mt-4 leading-8 text-slate-600">The application follows a modular workflow where tasks are created, context is captured, task relevance is calculated, task order is updated, and notifications are delivered only when suitable. Advanced behavioral learning and the full data logging and insights module were not fully implemented and remain future enhancements.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center text-4xl font-bold text-slate-900">Core Features</h2>
        <p className="mx-auto mt-3 max-w-4xl text-center text-lg text-slate-600">The completed system focuses on the main SmartTask pipeline: task input, context acquisition, context matching, prioritization, and adaptive notification delivery.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="text-2xl font-bold leading-tight text-slate-900">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-50 p-8">
        <h2 className="text-center text-4xl font-bold text-slate-900">System Highlights</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-lg text-slate-600">Key implementation details of the completed SmartTask MVP.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((item) => (
            <div key={item.text} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <div className="text-2xl">{item.icon}</div>
              <p className="mt-2 text-sm font-semibold text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
