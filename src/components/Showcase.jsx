import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Chat UI',
    desc: 'Conversational interface wired to a FastAPI endpoint.',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500'
  },
  {
    title: 'Todo + DB',
    desc: 'Full CRUD todos backed by MongoDB collections.',
    gradient: 'from-indigo-500 via-violet-500 to-sky-500'
  },
  {
    title: 'Stripe Checkout',
    desc: 'Drop-in payments with secure server integration.',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Starter blueprints</h2>
            <p className="mt-2 text-gray-600">Kick off with prebuilt flows you can remix instantly.</p>
          </div>
          <a href="#pricing" className="hidden sm:inline-flex text-gray-700 hover:text-gray-900">See pricing</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="p-6 relative">
                <h3 className="font-semibold text-lg text-gray-900">{c.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
