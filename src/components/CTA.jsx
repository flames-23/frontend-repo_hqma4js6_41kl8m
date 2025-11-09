function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-tr from-indigo-600 to-violet-600 p-10 text-white shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight">Ready to build your next app?</h2>
          <p className="mt-3 text-indigo-100">Spin up a project, connect data, and iterate with an AI partner that writes real code.</p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="#" className="rounded-md bg-white px-5 py-2.5 text-indigo-700 font-medium shadow hover:bg-indigo-50">Create project</a>
            <a href="#" className="rounded-md border border-white/30 px-5 py-2.5 text-white font-medium hover:bg-white/10">View examples</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
