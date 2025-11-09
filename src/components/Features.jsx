import { Code2, Database, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Code2,
    title: 'Frontend & Backend in sync',
    desc: 'Spin up a complete React + FastAPI stack instantly and preview live.'
  },
  {
    icon: Database,
    title: 'Persistent data by default',
    desc: 'MongoDB is pre-wired so your ideas keep their state between sessions.'
  },
  {
    icon: Sparkles,
    title: 'AI-native workflow',
    desc: 'Describe features in plain English. We scaffold, wire, and deploy.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why builders choose us</h2>
          <p className="mt-3 text-gray-600">Everything you need to go from idea to interactive product in minutes.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gray-900 text-white grid place-items-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
