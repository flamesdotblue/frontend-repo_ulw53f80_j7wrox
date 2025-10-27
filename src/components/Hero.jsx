import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Now previewing the future
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Augmented vision,
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500"> reimagined.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Smart eyewear that blends digital and physical worlds with effortless clarity. Minimal, lightweight, and designed for everyday life.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="h-11 px-6 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">Pre-order now</button>
              <button className="h-11 px-6 rounded-full border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 transition">Watch demo</button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div>
                <span className="font-semibold text-slate-900">Lightweight</span> • titanium build
              </div>
              <div>
                <span className="font-semibold text-slate-900">All-day</span> battery
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl ring-1 ring-black/5">
            {/* Soft gradient highlight overlay (doesn't block interaction) */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(15,23,42,0.08),transparent_60%)]" />
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/9HgHYACX2il7xmYO/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
