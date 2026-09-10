import { useEffect, useState } from 'react'
import PlaceholderImage from './PlaceholderImage.jsx'
import { projectAsset } from '../data/projects.js'

function fallbackFile(file) {
  if (file.endsWith('.png')) return file.replace(/\.png$/i, '.svg')
  if (file.endsWith('.svg')) return file.replace(/\.svg$/i, '.png')
  if (file.endsWith('.jpg')) return file.replace(/\.jpg$/i, '.png')
  return null
}

export default function ProjectMedia({ slug, title, file = 'cover.png', className = '' }) {
  const [current, setCurrent] = useState(file)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    setCurrent(file)
    setStatus('loading')
  }, [file, slug])

  if (status === 'error') {
    return <PlaceholderImage slug={slug} title={title} className={className} />
  }

  return (
    <div className={`project-media ${className}`.trim()}>
      {status !== 'ready' ? <PlaceholderImage slug={slug} title={title} className={className} /> : null}
      <img
        key={current}
        src={projectAsset(slug, current)}
        alt=""
        hidden={status !== 'ready'}
        onLoad={() => setStatus('ready')}
        onError={() => {
          const next = fallbackFile(current)
          if (next && next !== current) {
            setCurrent(next)
            setStatus('loading')
            return
          }
          setStatus('error')
        }}
      />
    </div>
  )
}
