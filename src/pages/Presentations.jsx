import DocumentCard from '../components/DocumentCard';
import SectionTitle from '../components/SectionTitle';
import slides from '../data/slides';

export default function Presentations() {
  return (
    <div className="pb-4 pt-10">
      <SectionTitle title="Project Presentations" subtitle="Presentation slide decks are currently listed as placeholders." />
      <div className="grid gap-6 sm:grid-cols-2">
        {slides.map((slide) => (
          <DocumentCard key={slide.title} {...slide} buttonText="Slides Coming Soon" />
        ))}
      </div>
    </div>
  );
}
