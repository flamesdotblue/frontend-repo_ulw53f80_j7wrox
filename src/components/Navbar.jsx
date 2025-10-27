import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-900 to-slate-600" />
          <span className="font-semibold tracking-tight text-slate-900">Lumen Eyeware</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#technology" className="hover:text-slate-900 transition-colors">Technology</a>
          <a href="#stories" className="hover:text-slate-900 transition-colors">Stories</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 items-center rounded-full border border-slate-300/80 bg-white text-slate-700 hover:bg-slate-50 transition">Learn more</button>
          <button className="inline-flex h-9 px-5 items-center rounded-full bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">Pre-order</button>
        </div>
      </nav>
    </header>
  );
}
