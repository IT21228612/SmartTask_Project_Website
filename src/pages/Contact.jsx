import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you. This contact form is currently a static placeholder.');
  };

  return (
    <div className="pb-4 pt-10">
      <SectionTitle title="Contact" subtitle="For project related inquiries, users can contact the project author using the details below." />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">Contact Information</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>Project ID: 25-26J-531</p>
            <p>Project: SmartTask Context Aware Mobile To Do List</p>
            <p>Institution: Sri Lanka Institute of Information Technology</p>
            <p>Email: jeewantha.jds@gmail.com</p>
            
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">Send a Message</h3>
          <div className="mt-4 space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-700">Name</span>
              <input required type="text" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none" />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-700">Email</span>
              <input required type="email" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none" />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-700">Message</span>
              <textarea required rows="4" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none" />
            </label>
          </div>
          <button type="submit" className="mt-5 rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
