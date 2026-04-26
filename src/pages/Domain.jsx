import SectionTitle from '../components/SectionTitle';
import systemDiagram from '../project_files/system_diagram.jpg';

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
        <div className="mt-3 space-y-4 leading-7 text-slate-600">
          <p>
            Modern task management applications are widely used to organize daily activities, but most of them rely on static task lists and
            fixed reminders. Popular tools such as Todoist, Any.do, Microsoft To Do, and Google Tasks allow users to create and manage tasks,
            yet they do not dynamically adjust task priorities based on changing real world conditions [13][15][16][17]. As a result, users must
            manually decide which tasks are important, increasing cognitive effort and reducing productivity [1][2].
          </p>
          <p>
            Context aware computing has been introduced to address these limitations by using real time user information such as location, time,
            activity, and device state [4]. Studies show that integrating context into mobile systems can significantly improve usability and
            responsiveness [5][6]. Several research systems such as Castaway and ContextGear demonstrated location and time based reminders, while
            frameworks like AWARE collected multi source contextual data [8][25].
          </p>
          <p>
            In addition, research on adaptive notifications highlights the importance of delivering alerts at suitable moments. Systems like OASIS
            and Do Not Disturb showed that context based notification timing reduces interruptions and improves user performance [22][23]. However,
            these approaches are often limited to specific features or controlled environments.
          </p>
          <p>
            Overall, existing literature shows that while context awareness and adaptive notifications can improve task management, there is no
            widely adopted solution that combines these capabilities into a complete mobile system.
          </p>
        </div>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Research Gap</h3>
        <div className="mt-3 space-y-4 leading-7 text-slate-600">
          <p>
            Despite the advancements in both commercial applications and research systems, several important gaps remain. Commercial task management
            tools primarily rely on static prioritization and fixed reminder systems. Although some applications support basic context features such
            as location reminders, they still require manual prioritization by users, increasing cognitive load and reducing efficiency [13][19][3].
          </p>
          <p>
            Research systems have explored more advanced concepts such as context awareness and adaptive notifications, but they often focus on
            limited aspects. Many systems rely on a single type of context, such as location or activity, rather than combining multiple contextual
            signals required for real world decision making [8][24][5]. Other systems demonstrate adaptive notification timing, but these are usually
            tested in controlled environments and not implemented in practical mobile applications [22][23].
          </p>
          <p>
            Another key gap is the lack of integration. Existing solutions do not combine context acquisition, task prioritization, and notification
            management into a unified system. Additionally, behavioral learning techniques, although discussed in research, are not widely applied in
            real world task management tools [12][26].
          </p>
          <p>
            These limitations highlight the need for a comprehensive system that integrates multiple contextual inputs, supports dynamic task
            prioritization, and delivers notifications based on real time user conditions.
          </p>
        </div>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Research Problem</h3>
        <div className="mt-3 space-y-4 leading-7 text-slate-600">
          <p>
            Users operating in fast paced digital environments experience cognitive overload due to multitasking and frequent interruptions.
            Traditional task management applications present all tasks equally, requiring users to manually decide priorities, which increases
            mental effort and reduces productivity [1][2].
          </p>
          <p>
            Another major issue is notification fatigue. Most applications use fixed time based reminders that do not consider the user’s current
            situation. As a result, notifications are often delivered at inappropriate moments, causing users to ignore them or experience
            unnecessary interruptions [3][28].
          </p>
          <p>
            Although research has shown that context aware systems can improve task relevance and notification timing, existing solutions are either
            limited to specific features or not suitable for real world mobile use [8][24][23]. Commercial tools do not fully utilize contextual
            data, while research prototypes lack integration into complete systems.
          </p>
          <p>
            Therefore, the main problem addressed in this study is the absence of a unified mobile task management system that effectively integrates
            multiple contextual signals to support dynamic task prioritization and adaptive notifications. The objective is to reduce cognitive load,
            improve task relevance, and minimize unnecessary interruptions in real world usage scenarios [5][12][26].
          </p>
        </div>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Research Objectives</h3>
        <div className="mt-3 space-y-4 leading-7 text-slate-600">
          <p>
            The main objective of this research is to design and implement a context aware mobile task management system that improves task
            prioritization and notification delivery based on real time user context. The system aims to reduce cognitive overload and improve
            productivity in everyday task management [1][2].
          </p>
          <p>
            To achieve this, several specific objectives are defined. First, the system identifies and integrates multiple contextual signals such
            as location, time, user activity, and device state to support context based decision making [4][5]. Second, it implements dynamic task
            prioritization, where tasks are automatically reordered based on urgency and contextual relevance, reducing manual effort [12].
          </p>
          <p>
            Third, the system introduces adaptive notification scheduling, where alerts are delivered at suitable moments based on user context,
            minimizing interruptions and notification fatigue [22][23]. Another objective is to consider user interactions such as completing,
            snoozing, or postponing tasks. Although advanced behavioral learning is not fully implemented, these interactions influence task
            handling and support future improvements [26].
          </p>
          <p>
            Finally, the system is evaluated to measure improvements in task relevance, notification effectiveness, and overall user experience in
            real world scenarios.
          </p>
        </div>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Methodology</h3>
        <div className="mt-3 space-y-4 leading-7 text-slate-600">
          <p>
            The SmartTask system was developed using a prototype-based approach focused on building a practical context-aware mobile application.
            The implementation follows a modular architecture where the system is divided into clearly defined components, allowing efficient
            processing, maintainability, and scalability [5]. The system design is based on the understanding that task relevance depends on
            dynamic user conditions such as location, time, activity, and device state [4].
          </p>
          <p>The overall architecture consists of six main components, forming a structured processing pipeline. These components include:</p>
        </div>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          <li>Task Input Module</li>
          <li>Context Acquisition Engine</li>
          <li>Context Matching Module</li>
          <li>Task Prioritization Module</li>
          <li>Adaptive Notification System</li>
          <li>Data Logging and Insights Component</li>
        </ul>
        <figure className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <img src={systemDiagram} alt="SmartTask system architecture diagram" className="w-full" />
          <figcaption className="px-4 py-3 text-sm text-slate-600">SmartTask system architecture diagram.</figcaption>
        </figure>
        <div className="mt-4 space-y-4 leading-7 text-slate-600">
          <p>
            As illustrated in the system architecture diagram, the workflow begins with the Task Input Module, where users create and manage tasks
            with metadata such as deadlines, priority, and optional location. The Context Acquisition Engine continuously collects real-time
            contextual data including location, time, user activity, and device state using mobile sensors and system services.
          </p>
          <p>
            The collected data is then processed by the Context Matching Module, which evaluates the relevance of tasks based on the current
            context. This is followed by the Task Prioritization Module, where tasks are dynamically ranked using factors such as urgency,
            contextual relevance, and user-defined priority.
          </p>
          <p>
            The Adaptive Notification System determines whether and when notifications should be delivered, ensuring alerts are sent only at
            appropriate moments to reduce interruptions and notification fatigue [22][23].
          </p>
          <p>
            The Data Logging and Insights Component was included in the architectural design to support behavioral learning and system improvement.
            However, this component was not fully implemented in the final system and remains a future enhancement.
          </p>
          <p>
            Overall, this six-component architecture enables SmartTask to operate as a context-aware system that dynamically filters, prioritizes,
            and notifies tasks in real time while maintaining an efficient and user-centric design.
          </p>
        </div>
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

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">References</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-600">
          <li>[1] G. Mark et al., “The cost of interrupted work,” ACM CHI, 2008.</li>
          <li>[2] V. Gonzalez et al., “Multitasking and task switching,” ACM CHI, 2004.</li>
          <li>[3] H. Winghart et al., “MageMemo,” 2024.</li>
          <li>[4] A. Dey, “Understanding and using context,” 2001.</li>
          <li>[5] M. Baldauf et al., “Survey on context-aware systems,” 2007.</li>
          <li>[6] González-Pérez et al., “Context-aware applications,” 2023.</li>
          <li>[8] Kessell and Chan, “Castaway system,” 2006.</li>
          <li>[12] Zhang et al., “Context-aware task prioritization,” 2022.</li>
          <li>[13] Todoist documentation, 2025.</li>
          <li>[15] Any.do documentation, 2023.</li>
          <li>[16] Microsoft To Do documentation, 2025.</li>
          <li>[17] Google Tasks documentation, 2025.</li>
          <li>[19] TickTick documentation, 2016.</li>
          <li>[22] Streefkerk et al., “Notification management,” 2012.</li>
          <li>[23] Iqbal, “OASIS framework,” 2008.</li>
          <li>[24] Ahmed et al., “Activity-based reminders,” 2014.</li>
          <li>[25] AWARE framework, 2015.</li>
          <li>[26] Tian et al., “Task prediction,” 2022.</li>
          <li>[28] Bailey and Konstan, “Notification disruption,” 2006.</li>
        </ul>
      </section>
    </div>
  );
}
