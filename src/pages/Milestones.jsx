import MilestoneCard from '../components/MilestoneCard';
import SectionTitle from '../components/SectionTitle';
import milestones from '../data/milestones';

export default function Milestones() {
  return (
    <div className="pb-4 pt-10">
      <SectionTitle title="Project Milestones" subtitle="Assessment milestones outline the academic timeline and key submission checkpoints of the SmartTask project." />
      <div className="relative space-y-6 border-l-2 border-dashed border-teal-200 pl-8">
        {milestones.map((item) => (
          <MilestoneCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
