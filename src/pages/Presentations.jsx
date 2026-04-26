import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DocumentCard from '../components/DocumentCard';
import SectionTitle from '../components/SectionTitle';
import slides from '../data/slides';

export default function Presentations() {
  const [searchParams] = useSearchParams();
  const [activeHighlight, setActiveHighlight] = useState(searchParams.get('highlight'));

  useEffect(() => {
    const highlightId = searchParams.get('highlight');
    setActiveHighlight(highlightId);
    if (!highlightId) return undefined;

    const timer = setTimeout(() => setActiveHighlight(null), 2800);
    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div className="pb-4 pt-10">
      <SectionTitle title="Project Presentations" subtitle="Access all SmartTask presentation slide decks." />
      <div className="grid gap-6 sm:grid-cols-2">
        {slides.map((slide) => (
          <DocumentCard key={slide.id} {...slide} buttonText="View Slides" isHighlighted={activeHighlight === slide.id} />
        ))}
      </div>
    </div>
  );
}
