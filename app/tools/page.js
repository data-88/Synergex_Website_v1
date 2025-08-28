import Link from 'next/link'
import LiveEditor from '../../components/LiveEditor'

export const metadata = {
  title: 'Tools - Synergex',
  description: 'Collection of tools for working with Synergex including parsers, visualizers, and validators.',
}

export default function ToolsPage() {
  const tools = [
    {
      name: 'Synergex → AST Parser',
      description: 'Parse Synergex expressions into Abstract Syntax Trees for programmatic analysis and manipulation.',
      features: [
        'Converts text to structured data',
        'Supports all Synergex operators',
        'Error handling and validation',
        'Multiple output formats'
      ],
      github: 'https://github.com/synergex/parser',
      status: 'Active Development',
      language: 'TypeScript'
    },
    {
      name: 'Graph Visualizer',
      description: 'Convert Synergex expressions to Mermaid diagrams and other graph formats with export capabilities.',
      features: [
        'Mermaid.js integration',
        'SVG export',
        'Custom styling options',
        'Interactive diagrams'
      ],
      github: 'https://github.com/synergex/visualizer',
      status: 'Stable',
      language: 'JavaScript'
    },
    {
      name: 'Feedback Loop Validator',
      description: 'Analyze Synergex models for valid feedback loops, stability, and system properties.',
      features: [
        'Loop detection',
        'Stability analysis',
        'Property verification',
        'Recommendations'
      ],
      github: 'https://github.com/synergex/validator',
      status: 'Beta',
      language: 'Python'
    },
    {
      name: 'Kernel Matcher',
      description: 'Identify and match universal patterns (kernels) across different domains and systems.',
      features: [
        'Pattern recognition',
        'Cross-domain matching',
        'Similarity scoring',
        'Knowledge base'
      ],
      github: 'https://github.com/synergex/matcher',
      status: 'Research',
      language: 'Python'
    }
  ]

  const upcomingTools = [
    {
      name: 'Real-time Collaboration',
      description: 'Collaborative editing and modeling of Synergex expressions in real-time.',
      eta: 'Q2 2024'
    },
    {
      name: 'API Integration',
      description: 'RESTful API for programmatic access to Synergex tools and services.',
      eta: 'Q3 2024'
    },
    {
      name: 'Mobile App',
      description: 'Native mobile application for creating and viewing Synergex models on the go.',
      eta: 'Q4 2024'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Synergex Tools
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive suite of tools for working with Synergex. From parsing and visualization 
            to validation and pattern matching, everything you need to build and analyze complex systems.
          </p>
        </div>

        {/* Current Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Available Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="synergex-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                  <div className="flex gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      tool.status === 'Stable' ? 'bg-green-600' :
                      tool.status === 'Active Development' ? 'bg-blue-600' :
                      tool.status === 'Beta' ? 'bg-yellow-600' :
                      'bg-gray-600'
                    } text-white`}>
                      {tool.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-600 text-white">
                      {tool.language}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-synergex-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-synergex-accent hover:text-white transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 1.852-1.339 3.694-4.5 4.951.346.346.654.823.654 1.359 0 1.178-.012 2.128-.012 2.419 0 .209.144.504.662.438A19.019 19.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                  
                  <button className="text-sm text-gray-400 hover:text-white transition-colors">
                    Try Demo →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingTools.map((tool, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
                <span className="text-xs text-synergex-accent">ETA: {tool.eta}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Editor */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Try the Live Editor
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Experience the power of Synergex tools firsthand. Input expressions and see them rendered as diagrams.
          </p>
          <LiveEditor />
        </div>

        {/* Contributing */}
        <div className="text-center bg-gray-800 rounded-lg p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">
            Contribute to Synergex Tools
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            All our tools are open source and we welcome contributions from the community. 
            Whether you're a developer, researcher, or enthusiast, there are many ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/synergex"
              target="_blank"
              rel="noopener noreferrer"
              className="synergex-button"
            >
              View on GitHub
            </a>
            <Link href="/community" className="synergex-button-secondary">
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

