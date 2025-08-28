'use client'

import { useState } from 'react'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-700/70 transition-colors duration-200"
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {isOpen ? (
          <svg
            className="w-6 h-6 text-gray-300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2">
          {children}
        </div>
      )}
    </div>
  )
}


