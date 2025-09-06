function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} CityTrack. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-slate-500 hover:text-slate-800" href="#features">Features</a>
            <a className="text-slate-500 hover:text-slate-800" href="#how">How it works</a>
            <a className="text-slate-500 hover:text-slate-800" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

