export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-300">{description}</p> : null}
    </div>
  )
}
