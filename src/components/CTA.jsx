import React from 'react';

export default function CTA() {
  return (
    <section id="technology" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-sm">
          <div className="p-10 sm:p-14 lg:p-16 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">See more. Carry less.</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Featherweight titanium, micro‑OLED optics, and spatial audio tuned for all‑day comfort. Designed to disappear until the moment you need it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="h-11 px-6 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">Join the waitlist</button>
                <button className="h-11 px-6 rounded-full border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 transition">Technical specs</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Spec label="Weight" value="58 g" />
              <Spec label="Battery" value="18 hrs" />
              <Spec label="Display" value="micro‑OLED" />
              <Spec label="Audio" value="Spatial" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}
