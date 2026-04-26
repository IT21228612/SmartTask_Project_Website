import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DocumentCard from '../components/DocumentCard';
import SectionTitle from '../components/SectionTitle';
import documents from '../data/documents';

export default function Documents() {
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
      <SectionTitle title="Project Documents" subtitle="Access the latest submitted project documents from the links below." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} {...doc} buttonText="View Document" isHighlighted={activeHighlight === doc.id} />
        ))}
      </div>
    </div>
  );
}
