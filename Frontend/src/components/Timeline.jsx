export function Timeline({ items }) {
  return (
    <div className="mx-auto max-w-4xl">
      {items?.map((item) => (
        <article key={`${item.role || item.degree}-${item.period}`} className="relative border-l border-white/10 pb-10 pl-8 last:pb-0">
          <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border border-emerald-200 bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.75)]" />
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 backdrop-blur-md transition hover:border-emerald-300/35 hover:bg-white/[0.065]">
            <p className="text-sm font-medium text-emerald-300">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.role || item.degree}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.company || item.institution}</p>
            <p className="mt-4 leading-7 text-slate-300">{item.summary || item.details}</p>
            {item.highlights ? (
              <ul className="mt-5 grid gap-3 text-sm text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}
