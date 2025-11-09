import { Rocket, Star, Github } from 'lucide-react';

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">Vibe Coding</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#cta" className="hover:text-gray-900 transition-colors">Get started</a>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <Github size={16} />
          Star us
          <Star size={14} className="text-amber-500" />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
