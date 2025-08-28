import Link from 'next/link'

export const metadata = {
  title: 'About - Synergex',
  description: 'Learn about Synergex, its mission, creator, and the vision for universal systems modeling.',
}

export default function AboutPage() {
  const corePrinciples = [
    {
      title: 'Universality',
      description: 'Synergex provides a common language that can model any system, from simple causal chains to complex emergent behaviors.',
      icon: '🌍'
    },
    {
      title: 'Simplicity',
      description: 'Despite its power, Synergex uses a minimal set of symbols and operators that are easy to learn and remember.',
      icon: '✨'
    },
    {
      title: 'Expressiveness',
      description: 'The language captures the full complexity of systems while remaining human-readable and intuitive.',
      icon: '🎯'
    },
    {
      title: 'Interoperability',
      description: 'Models can be shared, combined, and analyzed across different domains and applications.',
      icon: '🔗'
    }
  ]

  const researchAreas = [
    {
      area: 'Complex Systems',
      description: 'Understanding emergence, self-organization, and phase transitions in complex adaptive systems.',
      examples: ['Climate dynamics', 'Economic markets', 'Social networks']
    },
    {
      area: 'AI Alignment',
      description: 'Ensuring artificial intelligence systems remain aligned with human values and intentions.',
      examples: ['Value learning', 'Safety mechanisms', 'Human-AI collaboration']
    },
    {
      area: 'Cognitive Science',
      description: 'Modeling consciousness, decision-making, and the mind-world coupling.',
      examples: ['Attention mechanisms', 'Memory systems', 'Perception loops']
    },
    {
      area: 'Cybersecurity',
      description: 'Applying biological and systems principles to digital security.',
      examples: ['Immune system analogs', 'Threat detection', 'Adaptive defense']
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Synergex
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Synergex is more than a language—it's a new way of thinking about complexity, 
            a bridge between disciplines, and a tool for understanding the systems that shape our world.
          </p>
        </div>

        {/* Mission Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl md:text-3xl text-synergex-accent font-medium italic mb-6">
            "To model reality, we must speak its grammar."
          </blockquote>
          <p className="text-lg text-gray-300">
            — The Synergex Mission
          </p>
        </div>

        {/* What is Synergex */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is Synergex?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Synergex is a Universal Systems-of-Systems Meta Language (USSML) designed to model 
                complex systems across all domains. It provides a unified framework for understanding 
                how systems interact, evolve, and give rise to emergent behaviors.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Unlike traditional modeling approaches that are domain-specific, Synergex reveals 
                the universal patterns that underlie seemingly different systems. A feedback loop 
                in an ecosystem follows the same mathematical principles as one in an economy or 
                a neural network.
              </p>
              <p className="text-lg text-gray-300">
                By providing a common language, Synergex enables collaboration across disciplines, 
                accelerates research, and helps us tackle the most complex challenges facing humanity.
              </p>
            </div>
            <div className="synergex-code text-center p-8 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-2xl font-fira-code mb-4">
                ⟦System⟧ → ◈_Pattern ∮
              </div>
              <div className="text-sm text-gray-400">
                The fundamental Synergex pattern:<br/>
                Systems flow through patterns with feedback
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePrinciples.map((principle, index) => (
              <div key={index} className="synergex-card text-center">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Research & Applications</h2>
          <div className="space-y-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="synergex-card">
                <h3 className="text-xl font-semibold text-white mb-3">{area.area}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creator & Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Creator & Team</h2>
          <div className="synergex-card">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-64 text-center">
                <div className="w-32 h-32 bg-synergex-accent rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👨‍🔬
                </div>
                <h3 className="text-xl font-semibold text-white">Dr. Alexander Chen</h3>
                <p className="text-synergex-accent">Creator & Lead Researcher</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 mb-4">
                  Dr. Chen is a systems theorist and complexity researcher with over 15 years of experience 
                  in modeling complex adaptive systems. His work spans multiple domains including artificial 
                  intelligence, climate science, and cognitive architecture.
                </p>
                <p className="text-gray-300 mb-4">
                  The development of Synergex emerged from his research into universal patterns across 
                  different systems and his frustration with the lack of a common language for systems thinking.
                </p>
                <p className="text-gray-300">
                  Today, Dr. Chen leads the Synergex project and collaborates with researchers worldwide 
                  to advance the field of universal systems modeling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* License & Open Source */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Open Source & License</h2>
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              Synergex is completely open source and available under the{' '}
              <a 
                href="https://creativecommons.org/licenses/by/4.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-synergex-accent hover:text-white transition-colors"
              >
                Creative Commons Attribution 4.0 International License
              </a>
              .
            </p>
            <p className="text-gray-300 mb-6">
              This means you can use, modify, and distribute Synergex for any purpose, 
              including commercial applications, as long as you provide appropriate attribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/synergex"
                target="_blank"
                rel="noopener noreferrer"
                className="synergex-button"
              >
                View Source Code
              </a>
              <Link href="/community" className="synergex-button-secondary">
                Contribute
              </Link>
            </div>
          </div>
        </div>

        {/* Vision for the Future */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Vision for the Future
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            We envision a world where Synergex becomes the standard language for systems thinking, 
            enabling unprecedented collaboration across disciplines and accelerating our understanding 
            of complex challenges from climate change to AI safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/syntax" className="synergex-button">
              Learn the Language
            </Link>
            <Link href="/community" className="synergex-button-secondary">
              Join the Movement
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

