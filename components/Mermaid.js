'use client'

import { useEffect, useId, useState } from 'react'
import mermaid from 'mermaid'

export default function Mermaid({ chart, config }) {
  const id = useId().replace(/:/g, '-')
  const [svg, setSvg] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Initialize mermaid only on client
    try {
      mermaid.initialize({ startOnLoad: false, theme: 'dark', ...config })
    } catch {}
  }, [config])

  useEffect(() => {
    let isActive = true
    async function render() {
      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, chart || 'graph TD; A-->B;')
        if (isActive) {
          setSvg(svg)
          setError('')
        }
      } catch (e) {
        if (isActive) {
          setError(e?.message || 'Failed to render diagram')
        }
      }
    }
    render()
    return () => {
      isActive = false
    }
  }, [chart, id])

  if (error) {
    return (
      <div className="text-red-400 text-sm">{error}</div>
    )
  }

  return (
    <div
      className="w-full overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-label="Mermaid diagram"
    />
  )
}

