'use client'

import { useState } from 'react'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors duration-200"
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
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
          {children}
        </div>
      )}
    </div>
  )
}


