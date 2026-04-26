import MilestoneCard from '../components/MilestoneCard';
import SectionTitle from '../components/SectionTitle';
import milestones from '../data/milestones';

export default function Milestones() {
  return (
    <div className="pb-4 pt-10">
      <SectionTitle title="Project Milestones" subtitle="Assessment milestones outline the academic timeline and key submission checkpoints of the SmartTask project." />
      <div className="relative space-y-8 border-l-2 border-dashed border-teal-200">
        {milestones.map((item) => (
          <div key={item.title} className="relative pl-10">
            <span className="absolute left-0 top-0 -translate-x-1/2 rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 shadow-sm">
              {item.date}
            </span>
            <div className="absolute left-0 top-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-teal-500 shadow" />
            <MilestoneCard title={item.title} description={item.description} marks={item.marks} reference={item.reference} />
          </div>
        ))}
      </div>
    </div>
  );
}
