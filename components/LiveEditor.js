'use client'

import { useState, useEffect } from 'react'
import Mermaid from './Mermaid'

export default function LiveEditor() {
  const [input, setInput] = useState('⟦System⟧ → ◈_Regulator ∮')
  const [mermaidCode, setMermaidCode] = useState('')
  const [error, setError] = useState('')

  // Convert Synergex to Mermaid flowchart
  const convertToMermaid = (synergexCode) => {
    try {
      // Simple conversion logic - in a real implementation, this would be more sophisticated
      const flowchart = `graph TD
    A[System] --> B[Regulator]
    B --> C[Feedback Loop]
    C --> A
    
    style A fill:#f77f00
    style B fill:#00a896
    style C fill:#e0e1dd`
      
      setMermaidCode(flowchart)
      setError('')
    } catch (err) {
      setError('Error converting to diagram: ' + err.message)
    }
  }

  useEffect(() => {
    convertToMermaid(input)
  }, [input])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const examples = [
    '⟦Input⟧ → ⟦Process⟧ → ⟦Output⟧',
    '⟦A⟧ ⊗ ⟦B⟧ → ◈_Pattern ∮',
    '⟦Mind⟧ ⊗ ⟦World⟧ → ◈_Learning ∮',
    '⟦AI⟧^T ≅ ⟦Aligned⟧',
    `⟦Climate System∞⟧ → ⟦CO2 Rise⟧ → ⟦Temperature Gradient⟧\n→ ⟦Glacial Melt⟧ → ⟦Sea Level Rise⟧ → ⟦Coastal Stress⟧ ∮ ⟦Adaptation Cost⟧\n→ ∇⟦Policy Response⟧ ⊗ ⟦Public Awareness⟧ → ⟦Renewable Transition⟧\n\n# Tipping Point\n⟦Permafrost Thaw⟧ ↯ → ⟦Methane Burst⟧ ∿ → ∮ → ◈_Amplifier\n\n# Isomorphism vs Meta-Isomorphism\n⟦Carbon Tax⟧ ≣ ⟦Immune Response⟧ via ◈_Regulator\n⟦Solar System⟧ ≋ ⟦Atom⟧ (structural analogy)\n\n# Probability\nℙ(⟦Extreme Heatwave⟧) = 0.12/yr\n\n# Goal\n⟦Stable Climate⟧ ← ❤ ← ⟦Intergenerational Equity⟧ ← ⊂ ← ⟦Global Cooperation⟧`
  ]

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div>
        <label htmlFor="synergex-input" className="block text-sm font-medium text-white mb-2">
          Enter Synergex Expression:
        </label>
        <textarea
          id="synergex-input"
          value={input}
          onChange={handleInputChange}
          className="w-full h-24 px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white font-fira-code resize-none focus:ring-2 focus:ring-synergex-accent focus:border-transparent"
          placeholder="Type your Synergex expression here..."
        />
      </div>

      {/* Examples */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Try these examples:
        </label>
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setInput(example)}
              className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-gray-300 rounded border border-gray-600 transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      {/* Diagram Output */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Generated Diagram:
        </label>
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 min-h-[300px] flex items-center justify-center">
          {error ? (
            <div className="text-red-400 text-center">
              <p className="font-semibold">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          ) : mermaidCode ? (
            <div className="w-full">
              <Mermaid
                chart={mermaidCode}
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
          ) : (
            <div className="text-gray-400 text-center">
              <p>Enter a Synergex expression above to see the diagram</p>
            </div>
          )}
        </div>
      </div>

      {/* Export Options */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => {
            // In a real implementation, this would export the diagram as SVG
            alert('Export functionality would be implemented here')
          }}
          className="synergex-button-secondary"
        >
          Export as SVG
        </button>
        <button
          onClick={() => {
            // In a real implementation, this would copy the Mermaid code
            navigator.clipboard.writeText(mermaidCode)
            alert('Mermaid code copied to clipboard!')
          }}
          className="synergex-button-secondary"
        >
          Copy Mermaid Code
        </button>
      </div>
    </div>
  )
}
