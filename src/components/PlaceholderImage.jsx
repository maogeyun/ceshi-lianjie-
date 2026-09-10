const tones = {
  'hikvision-xr': { label: 'XR' },
  'water-hyacinth': { label: 'ID / IP' },
  'tmj-care': { label: 'Medical' },
}

export default function PlaceholderImage({ slug, title, className = '' }) {
  const tone = tones[slug] ?? { label: 'Work' }

  return (
    <div className={`placeholder tone-${slug} ${className}`.trim()} aria-hidden="true">
      <span className="placeholder-orb placeholder-orb-a" />
      <span className="placeholder-orb placeholder-orb-b" />
      <span className="placeholder-copy">
        <span className="placeholder-kicker">{tone.label}</span>
        <span className="placeholder-title">{title}</span>
        <span className="placeholder-note">图片待补充 · 放入 public/projects/{slug}/cover.jpg 可替换当前 SVG</span>
      </span>
    </div>
  )
}
