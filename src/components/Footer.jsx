import logoWithTagline from '../images/SmartTask_logo_with_text_tag_line.png';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="page-container py-8 text-center text-sm text-slate-600">
        <img src={logoWithTagline} alt="SmartTask logo" className="mx-auto h-14 w-auto" />
        <p className="mt-4 font-medium">SmartTask Research Project | Project ID: 25-26J-531</p>
        <p className="mt-2">© 2026 SmartTask. All rights reserved.</p>
      </div>
    </footer>
  );
}
