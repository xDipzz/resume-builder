export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-200">
      {/* navigats */}
      <nav className="w-full flex justify-between items-center p-6 bg-white/80 shadow-lg backdrop-blur-lg">
        <div className="text-3xl font-extrabold text-gray-800 tracking-tight">ResumeBuilder</div>
        <button className="px-5 py-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-300">
          Sign in with Google
        </button>
      </nav>

      {/* main */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h1 className="text-5xl font-bold text-gray-900 leading-snug mb-6">
          Build Your Resume with AI
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          Answer a few questions, and let AI generate a stunning, professional resume in seconds.
        </p>
        <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-500 rounded-xl hover:bg-blue-600 transition duration-300 shadow-md">
          Get Started
        </button>
      </section>

      {/* foot */}
      <footer className="text-center py-4 text-gray-600">
        © {new Date().getFullYear()} ResumeBuilder - All Rights Reserved
      </footer>
    </main>
  );
}
