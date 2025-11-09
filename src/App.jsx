import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
      </main>
      <footer className="border-t border-gray-200 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Vibe Coding. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
