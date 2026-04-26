import { useCallback, useEffect, useRef, useState } from 'react';
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

const references = [
  { id: 1, text: 'G. Mark et al., “The cost of interrupted work,” ACM CHI, 2008.' },
  { id: 2, text: 'V. Gonzalez et al., “Multitasking and task switching,” ACM CHI, 2004.' },
  { id: 3, text: 'H. Winghart et al., “MageMemo,” 2024.' },
  { id: 4, text: 'A. Dey, “Understanding and using context,” 2001.' },
  { id: 5, text: 'M. Baldauf et al., “Survey on context-aware systems,” 2007.' },
  { id: 6, text: 'González-Pérez et al., “Context-aware applications,” 2023.' },
  { id: 8, text: 'Kessell and Chan, “Castaway system,” 2006.' },
  { id: 12, text: 'Zhang et al., “Context-aware task prioritization,” 2022.' },
  { id: 13, text: 'Todoist documentation, 2025.' },
  { id: 15, text: 'Any.do documentation, 2023.' },
  { id: 16, text: 'Microsoft To Do documentation, 2025.' },
  { id: 17, text: 'Google Tasks documentation, 2025.' },
  { id: 19, text: 'TickTick documentation, 2016.' },
  { id: 22, text: 'Streefkerk et al., “Notification management,” 2012.' },
  { id: 23, text: 'Iqbal, “OASIS framework,” 2008.' },
  { id: 24, text: 'Ahmed et al., “Activity-based reminders,” 2014.' },
  { id: 25, text: 'AWARE framework, 2015.' },
  { id: 26, text: 'Tian et al., “Task prediction,” 2022.' },
  { id: 28, text: 'Bailey and Konstan, “Notification disruption,” 2006.' },
];

export default function Domain() {
  const referencesSectionRef = useRef(null);
  const referenceItemRefs = useRef({});
  const resetHighlightTimeoutRef = useRef(null);
  const [activeReference, setActiveReference] = useState(null);

  const handleReferenceClick = useCallback((referenceId) => {
    setActiveReference(referenceId);

    if (resetHighlightTimeoutRef.current) {
      window.clearTimeout(resetHighlightTimeoutRef.current);
    }

    const referenceElement = referenceItemRefs.current[referenceId];
    if (referenceElement) {
      referenceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      referencesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    resetHighlightTimeoutRef.current = window.setTimeout(() => {
      setActiveReference((currentReference) => (currentReference === referenceId ? null : currentReference));
    }, 2600);
  }, []);

  useEffect(() => {
    return () => {
      if (resetHighlightTimeoutRef.current) {
        window.clearTimeout(resetHighlightTimeoutRef.current);
      }
    };
  }, []);

  const renderWithReferenceLinks = (text) => {
    const segments = text.split(/(\[\d+\])/g);

    return segments.map((segment, index) => {
      const match = segment.match(/^\[(\d+)\]$/);
      if (!match) {
        return <span key={`${segment}-${index}`}>{segment}</span>;
      }

      const referenceId = Number(match[1]);

      return (
        <button
          key={`${referenceId}-${index}`}
          type="button"
          onClick={() => handleReferenceClick(referenceId)}
          className="mx-0.5 inline-flex cursor-pointer rounded-sm px-0.5 text-teal-700 transition hover:font-bold hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          aria-label={`Go to reference ${referenceId}`}
        >
          [{referenceId}]
        </button>
      );
    });
  };

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
            {renderWithReferenceLinks(
              'Modern task management applications are widely used to organize daily activities, but most of them rely on static task lists and fixed reminders. Popular tools such as Todoist, Any.do, Microsoft To Do, and Google Tasks allow users to create and manage tasks, yet they do not dynamically adjust task priorities based on changing real world conditions [13][15][16][17]. As a result, users must manually decide which tasks are important, increasing cognitive effort and reducing productivity [1][2].',
            )}
          </p>
          <p>
            {renderWithReferenceLinks(
              'Context aware computing has been introduced to address these limitations by using real time user information such as location, time, activity, and device state [4]. Studies show that integrating context into mobile systems can significantly improve usability and responsiveness [5][6]. Several research systems such as Castaway and ContextGear demonstrated location and time based reminders, while frameworks like AWARE collected multi source contextual data [8][25].',
            )}
          </p>
          <p>
            {renderWithReferenceLinks(
              'In addition, research on adaptive notifications highlights the importance of delivering alerts at suitable moments. Systems like OASIS and Do Not Disturb showed that context based notification timing reduces interruptions and improves user performance [22][23]. However, these approaches are often limited to specific features or controlled environments.',
            )}
          </p>
          <p>Overall, existing literature shows that while context awareness and adaptive notifications can improve task management, there is no widely adopted solution that combines these capabilities into a complete mobile system.</p>
        </div>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Research Gap</h3>
        <div className="mt-3 space-y-4 leading-7 text-slate-600">
          <p>
            {renderWithReferenceLinks(
              'Despite the advancements in both commercial applications and research systems, several important gaps remain. Commercial task management tools primarily rely on static prioritization and fixed reminder systems. Although some applications support basic context features such as location reminders, they still require manual prioritization by users, increasing cognitive load and reducing efficiency [13][19][3].',
            )}
          </p>
          <p>
            {renderWithReferenceLinks(
              'Research systems have explored more advanced concepts such as context awareness and adaptive notifications, but they often focus on limited aspects. Many systems rely on a single type of context, such as location or activity, rather than combining multiple contextual signals required for real world decision making [8][24][5]. Other systems demonstrate adaptive notification timing, but these are usually tested in controlled environments and not implemented in practical mobile applications [22][23].',
            )}
          </p>
          <p>
            {renderWithReferenceLinks(
              'Another key gap is the lack of integration. Existing solutions do not combine context acquisition, task prioritization, and notification management into a unified system. Additionally, behavioral learning techniques, although discussed in research, are not widely applied in real world task management tools [12][26].',
            )}
          </p>
          <p>These limitations highlight the need for a comprehensive system that integrates multiple contextual inputs, supports dynamic task prioritization, and delivers notifications based on real time user conditions.</p>
        </div>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Research Problem</h3>
        <div className="mt-3 space-y-4 leading-7 text-slate-600">
          <p>
            {renderWithReferenceLinks(
              'Users operating in fast paced digital environments experience cognitive overload due to multitasking and frequent interruptions. Traditional task management applications present all tasks equally, requiring users to manually decide priorities, which increases mental effort and reduces productivity [1][2].',
            )}
          </p>
          <p>
            {renderWithReferenceLinks(
              'Another major issue is notification fatigue. Most applications use fixed time based reminders that do not consider the user’s current situation. As a result, notifications are often delivered at inappropriate moments, causing users to ignore them or experience unnecessary interruptions [3][28].',
            )}
          </p>
          <p>
            {renderWithReferenceLinks(
              'Although research has shown that context aware systems can improve task relevance and notification timing, existing solutions are either limited to specific features or not suitable for real world mobile use [8][24][23]. Commercial tools do not fully utilize contextual data, while research prototypes lack integration into complete systems.',
            )}
          </p>
          <p>
            {renderWithReferenceLinks(
              'Therefore, the main problem addressed in this study is the absence of a unified mobile task management system that effectively integrates multiple contextual signals to support dynamic task prioritization and adaptive notifications. The objective is to reduce cognitive load, improve task relevance, and minimize unnecessary interruptions in real world usage scenarios [5][12][26].',
            )}
          </p>
        </div>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Research Objectives</h3>
        <div className="mt-3 space-y-4 leading-7 text-slate-600">
          <p>
            {renderWithReferenceLinks(
              'The main objective of this research is to design and implement a context aware mobile task management system that improves task prioritization and notification delivery based on real time user context. The system aims to reduce cognitive overload and improve productivity in everyday task management [1][2].',
            )}
          </p>
          <p>
            {renderWithReferenceLinks(
              'To achieve this, several specific objectives are defined. First, the system identifies and integrates multiple contextual signals such as location, time, user activity, and device state to support context based decision making [4][5]. Second, it implements dynamic task prioritization, where tasks are automatically reordered based on urgency and contextual relevance, reducing manual effort [12].',
            )}
          </p>
          <p>
            {renderWithReferenceLinks(
              'Third, the system introduces adaptive notification scheduling, where alerts are delivered at suitable moments based on user context, minimizing interruptions and notification fatigue [22][23]. Another objective is to consider user interactions such as completing, snoozing, or postponing tasks. Although advanced behavioral learning is not fully implemented, these interactions influence task handling and support future improvements [26].',
            )}
          </p>
          <p>Finally, the system is evaluated to measure improvements in task relevance, notification effectiveness, and overall user experience in real world scenarios.</p>
        </div>
      </section>

      <section className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Methodology</h3>
        <div className="mt-3 space-y-4 leading-7 text-slate-600">
          <p>
            {renderWithReferenceLinks(
              'The SmartTask system was developed using a prototype-based approach focused on building a practical context-aware mobile application. The implementation follows a modular architecture where the system is divided into clearly defined components, allowing efficient processing, maintainability, and scalability [5]. The system design is based on the understanding that task relevance depends on dynamic user conditions such as location, time, activity, and device state [4].',
            )}
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
            {renderWithReferenceLinks(
              'The Adaptive Notification System determines whether and when notifications should be delivered, ensuring alerts are sent only at appropriate moments to reduce interruptions and notification fatigue [22][23].',
            )}
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

      <section ref={referencesSectionRef} className="card-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">References</h3>
        <ul className="mt-4 space-y-2 leading-7 text-slate-600">
          {references.map((reference) => (
            <li
              key={reference.id}
              id={`reference-${reference.id}`}
              ref={(node) => {
                referenceItemRefs.current[reference.id] = node;
              }}
              className={`relative overflow-hidden rounded-lg px-3 py-2 transition-all duration-700 ${
                activeReference === reference.id ? 'border-beam-card border-2 border-amber-300 bg-amber-50/40 shadow-md shadow-amber-100' : ''
              }`}
            >
              [{reference.id}] {reference.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
