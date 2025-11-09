import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6V7KkM8zgrGSsQ4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 py-24">
        <div className="flex flex-col items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Build apps at the speed of thought
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg text-gray-600 max-w-xl"
          >
            An AI-native sandbox to spin up full-stack apps, experiment freely, and ship faster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">
              Get started
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
              Explore demos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
