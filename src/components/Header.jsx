import { Rocket, Settings, Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-800 tracking-tight">Vibe Coding</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg transition-colors">
            <Star className="h-4 w-4" />
            Star us
          </button>
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors">
            <Settings className="h-4 w-4" />
            Launch
          </button>
        </div>
      </div>
    </header>
  );
}
