'use client'

import { useState } from 'react'

const synergexSymbols = {
  '⟦': { name: 'System Bracket', meaning: 'Denotes a system or entity', example: '⟦Climate⟧' },
  '⟧': { name: 'System Bracket', meaning: 'Denotes a system or entity', example: '⟦Climate⟧' },
  '→': { name: 'Flow Arrow', meaning: 'Indicates flow or transformation', example: 'A → B' },
  '◈': { name: 'Kernel', meaning: 'Core pattern or structure', example: '◈_Pattern' },
  '∮': { name: 'Feedback Loop', meaning: 'Circular causality or feedback', example: '∮' },
  '⊗': { name: 'Coupling', meaning: 'Interaction or coupling between systems', example: 'A ⊗ B' },
  '≅': { name: 'Isomorphism', meaning: 'Structural similarity', example: 'A ≅ B' },
  '_': { name: 'Parameter', meaning: 'Parameter or modifier', example: '◈_Type' },
}

export default function InteractivePreview() {
  const [tooltip, setTooltip] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const handleSymbolHover = (symbol, event) => {
    const rect = event.target.getBoundingClientRect()
    setTooltip(synergexSymbols[symbol])
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    })
  }

  const handleSymbolLeave = () => {
    setTooltip(null)
  }

  const renderSynergexExpression = (expression) => {
    return expression.split('').map((char, index) => {
      if (synergexSymbols[char]) {
        return (
          <span
            key={index}
            className="inline-block cursor-help text-synergex-code hover:text-synergex-accent transition-colors duration-200"
            onMouseEnter={(e) => handleSymbolHover(char, e)}
            onMouseLeave={handleSymbolLeave}
          >
            {char}
          </span>
        )
      }
      return <span key={index}>{char}</span>
    })
  }

  return (
    <div className="relative">
      <div className="synergex-code text-center text-2xl p-8 bg-gray-800 rounded-lg border border-gray-700">
        {renderSynergexExpression('⟦System⟧ → ◈_Regulator ∮')}
      </div>
      
      {/* Tooltip */}
      {tooltip && (
        <div
          className="synergex-tooltip"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translateX(-50%) translateY(-100%)',
            opacity: 1,
            pointerEvents: 'auto'
          }}
        >
          <div className="font-semibold text-synergex-accent mb-1">
            {tooltip.name}
          </div>
          <div className="text-gray-200 mb-2">
            {tooltip.meaning}
          </div>
          <div className="text-sm text-gray-400 font-fira-code">
            Example: {tooltip.example}
          </div>
        </div>
      )}
      
      <div className="text-center mt-4 text-sm text-gray-400">
        Hover over any symbol to see its meaning and usage
      </div>
    </div>
  )
}

