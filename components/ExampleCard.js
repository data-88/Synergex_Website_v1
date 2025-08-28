'use client'

import { useState } from 'react'
import Mermaid from './Mermaid'

export default function ExampleCard({ example }) {
  const [showDiagram, setShowDiagram] = useState(false)

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-600'
      case 'Intermediate': return 'bg-yellow-600'
      case 'Advanced': return 'bg-orange-600'
      case 'Expert': return 'bg-red-600'
      default: return 'bg-gray-600'
    }
  }

  const generateMermaidCode = (synergexCode) => {
    // Simple conversion - in a real implementation, this would be more sophisticated
    const flowchart = `graph TD
    A[${synergexCode.split('→')[0]?.trim() || 'Input'}] --> B[${synergexCode.split('→')[1]?.trim() || 'Process'}]
    B --> C[${synergexCode.split('→')[2]?.trim() || 'Output'}]
    
    style A fill:#f77f00
    style B fill:#00a896
    style C fill:#e0e1dd`
    
    return flowchart
  }

  const handleExportSVG = () => {
    // In a real implementation, this would export the diagram as SVG
    alert(`Exporting ${example.title} as SVG...`)
  }

  return (
    <div className="synergex-card hover:scale-105 transition-transform duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{example.title}</h3>
          <span className={`inline-block px-2 py-1 text-xs font-medium text-white rounded ${getComplexityColor(example.complexity)}`}>
            {example.complexity}
          </span>
        </div>
        <span className="text-sm text-gray-400">{example.domain}</span>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4">{example.description}</p>

      {/* Synergex Code */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-400 mb-2">Synergex Expression:</label>
        <div className="synergex-code text-sm font-fira-code">
          {example.synergexCode}
        </div>
      </div>

      {/* Diagram Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowDiagram(!showDiagram)}
          className="text-sm text-synergex-accent hover:text-white transition-colors"
        >
          {showDiagram ? 'Hide' : 'Show'} Diagram
        </button>
      </div>

      {/* Mermaid Diagram */}
      {showDiagram && (
        <div className="mb-4 bg-gray-900 rounded p-3 border border-gray-600">
          <Mermaid
            chart={generateMermaidCode(example.synergexCode)}
            config={{
              theme: 'dark',
              flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis'
              }
            }}
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          onClick={handleExportSVG}
          className="text-sm text-synergex-accent hover:text-white transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export SVG
        </button>
        
        <button
          onClick={() => {
            navigator.clipboard.writeText(example.synergexCode)
            alert('Synergex code copied to clipboard!')
          }}
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy Code
        </button>
      </div>
    </div>
  )
}
