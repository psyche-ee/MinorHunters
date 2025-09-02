import './App.css';
import DarkVeil from './components/DarkVeil';
import NavBar from './components/NavBar';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image + Overlay */}
      <div className="fixed inset-0 z-0 bg-[url('/your-image.jpg')] bg-cover bg-center">
        <DarkVeil className="absolute inset-0" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4">
        <NavBar />

        {/* Hero Section */}
        <div id='home' className="mt-14 px-10 py-4 text-center">
            <h1 className="text-5xl font-bold text-white leading-snug">
                Meet the Minds Behind the Mission <br /> Explore Our Skills & Expertise.
            </h1>
        </div>

        {/* Buttons */}
        <div className="w-full p-4 flex items-center justify-center gap-6">
          <a href="#team" className="rounded-full px-6 py-4 bg-blue-600 text-white hover:bg-blue-700 transition">
            Get started
          </a>
          <a href="#contact" className="rounded-full px-6 py-4 border border-white text-white hover:bg-white hover:text-black transition">
            Contact us
          </a>
        </div>

        {/* Team Section */}
        <TeamSection id="team"/>

        {/* Contact Section */}
        <ContactSection id="contact"/>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
