import { Link } from 'react-router-dom'

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  )
}

function Feature({ title, desc, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-4 h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  )
}

function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Real-Time Public Transport Tracking for Small Cities
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Empower riders and drivers with live location updates, ETAs, and route insights.
                Built for small cities to operate smarter and commute easier.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/user/signup" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-700">
                  Get started as Rider
                </Link>
                <Link to="/driver/signup" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Join as Driver
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 sm:max-w-md">
                <Stat value="12k+" label="Monthly riders" />
                <Stat value="350+" label="Active vehicles" />
                <Stat value="99.9%" label="Uptime" />
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
                <div className="aspect-[4/5] w-full rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 opacity-90" />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link to="/user/login" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">User Login</Link>
                  <Link to="/driver/login" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Driver Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why CityTrack</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          An elegant, low-latency experience that works great on any device.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="Live Vehicle Map" desc="See buses and vans moving in real-time with smooth updates." icon={<span className="text-xl">🗺️</span>} />
          <Feature title="Accurate ETAs" desc="Predictive arrival times tailored for small-city traffic patterns." icon={<span className="text-xl">⏱️</span>} />
          <Feature title="Route Insights" desc="Find optimal routes and occupancy before you board." icon={<span className="text-xl">🚌</span>} />
          <Feature title="Driver Tools" desc="Simple controls for going online, routes, and status." icon={<span className="text-xl">🎛️</span>} />
          <Feature title="Lightweight" desc="Fast front-end built with React, Vite, and Tailwind." icon={<span className="text-xl">⚡</span>} />
          <Feature title="Privacy-first" desc="No auth in this demo. Your system plugs in easily." icon={<span className="text-xl">🔒</span>} />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600" />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-slate-900">Plug in your realtime backend</h3>
              <p className="mt-3 text-slate-600">Bring your existing authentication and WebSocket/SignalR layer. This landing page focuses on UX and routing only.</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Clean, mobile-first layout</li>
                <li>• Fast navigation with React Router</li>
                <li>• Driver and Rider entry points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white sm:p-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="text-2xl font-semibold">Ready to modernize city transit?</h3>
              <p className="mt-1 text-blue-100">Start with a simple landing and add your auth later.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/user/signup" className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20">Rider Sign up</Link>
              <Link to="/driver/signup" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Driver Sign up</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing

