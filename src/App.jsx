import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import Presentations from './pages/Presentations';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
