import { useEffect, useState } from 'react';
import { Check, PenTool, Rocket, TrendingUp, Lightbulb } from 'lucide-react';

const STEPS = [
  { title: 'Build', icon: PenTool, note: 'Design, engineering and testing' },
  { title: 'Launch', icon: Rocket, note: 'Live on web, iOS and Android' },
  { title: 'Scale', icon: TrendingUp, note: 'More users, new markets' },
];

/**
 * Illustrative project card: the steps check off one after another on load,
 * the rail fills between them, and Scale's progress bar grows.
 * stage 0 = nothing done, 1 = Build, 2 = Launch, 3 = Scale under way.
 */
export function ProjectCard() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setStage(3); return; }
    const timers = [600, 1300, 2000].map((ms, i) => window.setTimeout(() => setStage(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  const live = stage === 3;

  return (
    <div className="panel p-6 text-left">
      <div className="flex items-start justify-between gap-4 mb-7">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-[#0b0b0f] flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5 text-white" strokeWidth={1.75} />
          </span>
          <div>
            <p className="text-[17px] font-semibold tracking-[-0.01em] text-[#0b0b0f]">Your product</p>
            <p className="text-[13px] text-[#a1a1aa]">From idea to market leader</p>
          </div>
        </div>
        <span className={`inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full text-[12px] font-medium transition-colors duration-500 ${live ? 'bg-[#eef2ff] text-[#4f46e5]' : 'bg-[#f4f4f5] text-[#a1a1aa]'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${live ? 'bg-[#4f46e5]' : 'bg-[#d4d4d8]'}`} />
          {live ? 'On track' : 'In progress'}
        </span>
      </div>

      <ol>
        {STEPS.map((s, i) => {
          const done = i < 2 && stage > i;
          const active = i === 2 && live;
          const reached = stage > i;
          return (
            <li key={s.title} className={`relative flex gap-4 ${i < 2 ? 'pb-6' : ''}`}>
              {i < 2 && (
                // the rail to the next step: grey, filled dark once this step is done
                <span className="absolute left-3 top-7 bottom-1 w-px -translate-x-1/2 bg-black/[0.08] overflow-hidden">
                  <span className={`block w-full h-full bg-[#0b0b0f] origin-top transition-transform duration-500 ease-out ${done ? 'scale-y-100' : 'scale-y-0'}`} />
                </span>
              )}

              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  done ? 'bg-[#0b0b0f]' : active ? 'border-2 border-[#4f46e5] bg-white' : 'border-2 border-black/10 bg-white'
                }`}
              >
                {done && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                {active && <span className="w-2 h-2 rounded-full bg-[#4f46e5]" />}
              </span>

              <div className="flex-1 min-w-0 -mt-0.5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className={`flex items-center gap-2 text-[15px] font-medium transition-colors duration-300 ${reached ? 'text-[#0b0b0f]' : 'text-[#a1a1aa]'}`}>
                    <s.icon className="w-4 h-4 text-[#71717a]" strokeWidth={1.75} /> {s.title}
                  </p>
                  <p className={`text-[12px] transition-opacity duration-300 ${reached ? 'opacity-100' : 'opacity-0'} ${active ? 'text-[#4f46e5]' : 'text-[#a1a1aa]'}`}>
                    {active ? 'In progress' : 'Done'}
                  </p>
                </div>
                <p className={`pl-6 text-[13px] text-[#71717a] transition-opacity duration-300 ${reached ? 'opacity-100' : 'opacity-0'}`}>{s.note}</p>
                {i === 2 && (
                  <div className="mt-3 ml-6 h-1.5 rounded-full bg-black/[0.06] overflow-hidden">
                    <div className="h-full rounded-full bg-[#4f46e5] transition-[width] duration-1000 ease-out" style={{ width: live ? '60%' : '0%' }} />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
