import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-900 to-slate-600" />
              <span className="font-semibold tracking-tight text-slate-900">Lumen Eyeware</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-md">
              Minimal. Powerful. Invisible. A new way to see your world.
            </p>
          </div>
          <div className="justify-self-start sm:justify-self-end w-full sm:w-auto">
            <form className="flex w-full sm:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 sm:w-72 h-11 rounded-full border border-slate-300 bg-white px-4 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
              <button className="h-11 px-5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Lumen Eyeware. All rights reserved.</div>
      </div>
    </footer>
  );
}
