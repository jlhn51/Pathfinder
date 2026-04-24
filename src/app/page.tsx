export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Land the internship you're aiming for.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
          Pathfinder analyzes your resume and GitHub against your target role,
          shows you exactly what skills you're missing, and gives you a focused
          plan to close the gap.
        </p>
        <button className="mt-10 rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-indigo-700">
          Get started
        </button>
      </section>

      {/* Features section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            How it works
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature card 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Connect your profile
              </h3>
              <p className="mt-2 text-gray-600">
                Link your GitHub and upload your resume. We read your actual
                code and experience — no guesswork.
              </p>
            </div>
            {/* Feature card 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                See your skill gaps
              </h3>
              <p className="mt-2 text-gray-600">
                Pick a target role. We compare your profile against what the
                role actually demands and show you what's missing.
              </p>
            </div>
            {/* Feature card 3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Follow a focused plan
              </h3>
              <p className="mt-2 text-gray-600">
                Get a prioritized list of what to learn next, with vetted
                resources for each skill. No more tutorial paralysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 text-center text-sm text-gray-500">
        Built by Jerry Hensure · Pathfinder {new Date().getFullYear()}
      </footer>
    </main>
  );
}