export default function Footer() {
  return (
    <footer className="w-11/12 h-96 mx-auto mb-20 rounded-2xl">
      <div className="bg-orange-600 h-full text-white/80 rounded-2xl px-8 py-6 relative overflow-hidden">
        <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 " />

        <div className="relative z-10">
          <p className="text-4xl font-medium">
            Turn your chaos,<br></br> into compliance.
          </p>
        </div>
      </div>
      <div className="mt-4 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <a>Home</a>
          <a>Privacy policy</a>
        </div>
        <p>© {new Date().getFullYear()} Safety Made Smart</p>
      </div>
    </footer>
  );
}
