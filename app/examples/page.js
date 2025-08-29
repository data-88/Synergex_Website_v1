import Link from 'next/link'
import ExampleCard from '../../components/ExampleCard'

export const metadata = {
  title: 'Examples - Synergex',
  description: 'Real-world Synergex models including climate systems, global financial systems, immune systems, and AI alignment.',
}

export default function ExamplesPage() {
  const examples = [
    {
      title: 'Climate System',
      domain: 'Environmental Science',
      description: 'Model of global climate dynamics with feedback loops between temperature, CO2, and ice caps.',
      synergexCode: '⟦Temperature⟧ → ⟦CO2⟧ → ⟦Ice⟧ ∮ ⟦Temperature⟧',
      diagram: 'climate-system',
      complexity: 'Intermediate'
    },
    {
      title: 'Global Financial Systems',
      domain: 'Economics',
      description: 'Systemic risk, leverage, contagion, and regulatory feedback across interconnected markets.',
      synergexCode: '⟦Liquidity⟧ → ◈_Leverage → ⟦Contagion⟧ → ◈_Regulator ∮',
      diagram: 'global-financial-systems',
      complexity: 'Advanced'
    },
    {
      title: 'Immune System ^T Cybersecurity',
      domain: 'Bio-Inspired Security',
      description: 'Applying immune system patterns to cybersecurity threat detection and response.',
      synergexCode: '⟦Immune⟧^T ≅ ⟦Cyber⟧ → ◈_Pattern ∮',
      diagram: 'immune-cyber',
      complexity: 'Advanced'
    },
    {
      title: 'Mind-World Coupling',
      domain: 'Cognitive Science',
      description: 'How consciousness emerges from the interaction between mind and external reality.',
      synergexCode: '⟦Mind⟧ ⊗ ⟦World⟧ → ◈_Consciousness ∮',
      diagram: 'mind-world',
      complexity: 'Expert'
    },
    {
      title: 'Financial Market Dynamics',
      domain: 'Economics',
      description: 'Market behavior patterns including bubbles, crashes, and regulatory feedback.',
      synergexCode: '⟦Market⟧ → ◈_Bubble → ⟦Crash⟧ → ◈_Regulator ∮',
      diagram: 'financial-markets',
      complexity: 'Intermediate'
    },
    {
      title: 'AI Alignment Loop',
      domain: 'Artificial Intelligence',
      description: 'Ensuring AI systems remain aligned with human values through continuous feedback.',
      synergexCode: '⟦AI⟧ → ◈_Action → ⟦World⟧ → ◈_Feedback → ⟦Values⟧ ∮',
      diagram: 'ai-alignment',
      complexity: 'Expert'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Synergex Examples
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Synergex models real-world complexity. From climate systems to AI alignment, 
            discover the universal patterns that underlie diverse domains.
          </p>
        </div>

        {/* Filter by Complexity */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="synergex-button-secondary text-sm">All Levels</button>
          <button className="synergex-button-secondary text-sm">Beginner</button>
          <button className="synergex-button-secondary text-sm">Intermediate</button>
          <button className="synergex-button-secondary text-sm">Advanced</button>
          <button className="synergex-button-secondary text-sm">Expert</button>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <ExampleCard key={index} example={example} />
          ))}
        </div>

        {/* PDF Resources */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4 text-center">Resources (PDFs)</h3>
          <p className="text-gray-300 mb-6 text-center">Download reference materials and reports.</p>
          <ul className="max-w-3xl mx-auto space-y-3">
            <li>
              <a href="/us-china-sa.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-synergex-accent hover:underline">
                <span className="text-gray-300">📄</span>
                <span>US–China–SA Analysis</span>
              </a>
            </li>
            <li>
              <a href="/SAN.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-synergex-accent hover:underline">
                <span className="text-gray-300">📄</span>
                <span>SAN Report</span>
              </a>
            </li>
            <li>
              <a href="/sarb-synergex.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-synergex-accent hover:underline">
                <span className="text-gray-300">📄</span>
                <span>SARB Brief</span>
              </a>
            </li>
            <li>
              <a href="/sa-air-systems.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-synergex-accent hover:underline">
                <span className="text-gray-300">📄</span>
                <span>SA Air Systems</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-800 rounded-lg p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Own Model?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with the syntax guide, then use our live editor to build and visualize 
            your own Synergex expressions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/syntax" className="synergex-button">
              Learn Syntax
            </Link>
            <Link href="/tools" className="synergex-button-secondary">
              Try Editor
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

