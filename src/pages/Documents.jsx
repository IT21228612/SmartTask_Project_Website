import DocumentCard from '../components/DocumentCard';
import SectionTitle from '../components/SectionTitle';
import documents from '../data/documents';

export default function Documents() {
  return (
    <div className="pb-4 pt-10">
      <SectionTitle title="Project Documents" subtitle="Document links remain as placeholders until final files are published." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <DocumentCard key={doc.title} {...doc} buttonText="PDF Coming Soon" />
        ))}
      </div>
    </div>
  );
}
