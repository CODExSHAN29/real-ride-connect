import { Link } from 'react-router-dom'

function UserLogin() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold text-slate-900">User Login</h1>
        <p className="mt-1 text-sm text-slate-600">Enter your details. This page does not perform authentication.</p>
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="user@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
            <input id="password" type="password" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Continue</button>
        </form>
        <p className="mt-4 text-sm text-slate-600">New rider? <Link to="/user/signup" className="text-blue-600 hover:underline">Create an account</Link></p>
      </div>
    </div>
  )
}

export default UserLogin

