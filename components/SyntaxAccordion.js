'use client'

import { useState } from 'react'

export default function SyntaxAccordion({ section }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors duration-200"
      >
        <h3 className="text-xl font-semibold text-white">{section.title}</h3>
        <svg
          className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="space-y-6">
            {section.content.map((item, index) => (
              <div key={index} className="border-l-4 border-synergex-accent pl-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                  <div className="synergex-code text-lg font-fira-code min-w-fit">
                    {item.symbol}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{item.name}</h4>
                    <p className="text-gray-300 mb-2">{item.meaning}</p>
                    <div className="text-sm text-gray-400 font-fira-code">
                      Examples: {item.example}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

