import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-cyan-400" />
            <span className="text-lg font-bold tracking-tight">CityTrack</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-slate-600 hover:text-slate-900'}>Home</NavLink>
            <NavLink to="/user/login" className="text-slate-600 hover:text-slate-900">User Login</NavLink>
            <NavLink to="/driver/login" className="text-slate-600 hover:text-slate-900">Driver Login</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/user/signup" className="hidden sm:inline-flex rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">User Sign up</Link>
            <Link to="/driver/signup" className="inline-flex rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">Driver Sign up</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

