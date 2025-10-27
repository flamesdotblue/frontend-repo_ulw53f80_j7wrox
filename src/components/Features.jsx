import React from 'react';
import { Eye, Cpu, Bluetooth, Shield } from 'lucide-react';

const items = [
  {
    icon: Eye,
    title: 'Augmented Clarity',
    desc: 'Context-aware overlays that adapt to your surroundings with zero clutter.',
  },
  {
    icon: Cpu,
    title: 'On-device Intelligence',
    desc: 'Fast, private processing powered by an ultra‑efficient neural core.',
  },
  {
    icon: Bluetooth,
    title: 'Seamless Connectivity',
    desc: 'Instant pairing and smooth handoff across your ecosystem of devices.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Encrypted by default. Your data stays yours—always and everywhere.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Designed for the way you see</h2>
          <p className="mt-4 text-slate-600">A minimal aesthetic, precision materials, and technology that stays out of the way—until you need it.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
