import Link from 'next/link'
import InteractivePreview from '../components/InteractivePreview'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            SYNERGEX
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-synergex-text mb-4 animate-fade-in">
            The Language of Systems
          </h2>
          <p className="text-xl md:text-2xl text-synergex-accent font-medium mb-8 animate-fade-in">
            To model reality, we must speak its grammar.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in">
            Synergex is a universal framework for complex systems. Model anything from climate dynamics 
            to AI alignment, from immune responses to financial markets. See the hidden connections, 
            understand the feedback loops, and think deeper about the systems that shape our world.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Link href="/syntax" className="synergex-button">
              Get Started
            </Link>
            <Link href="/syntax" className="synergex-button-secondary">
              View Syntax
            </Link>
            <Link href="/examples" className="synergex-button-secondary">
              See Examples
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Try the Interactive Preview
            </h3>
            <p className="text-gray-300">
              Hover over the Synergex expression below to see tooltips explaining each symbol
            </p>
          </div>
          <InteractivePreview />
        </div>
      </section>

      {/* Three Column Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Model Anything */}
            <div className="synergex-card text-center animate-slide-up">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-3">Model Anything</h3>
              <p className="text-gray-300 mb-4">
                Systems, flows, feedback loops, emergence, and complexity. From simple causal chains 
                to intricate network dynamics.
              </p>
              <div className="synergex-code text-sm">
                ⟦System⟧ → ◈_Regulator ∮
              </div>
            </div>

            {/* See Connections */}
            <div className="synergex-card text-center animate-slide-up">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-white mb-3">See Connections</h3>
              <p className="text-gray-300 mb-4">
                Kernels, isomorphism, and hidden patterns. Discover the universal structures that 
                underlie seemingly different systems.
              </p>
              <div className="synergex-code text-sm">
                ⊗(A, B) ≅ ◈_Pattern ∮
              </div>
            </div>

            {/* Think Deeper */}
            <div className="synergex-card text-center animate-slide-up">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3">Think Deeper</h3>
              <p className="text-gray-300 mb-4">
                Ethics, emergence, AI alignment, and the nature of consciousness. Explore the 
                philosophical foundations of systems thinking.
              </p>
              <div className="synergex-code text-sm">
                ⟦Mind⟧ ⊗ ⟦World⟧ → ◈_Ethics ∮
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Speak the Language of Systems?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join scientists, technologists, policymakers, and system thinkers in exploring 
            the universal grammar of complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn" className="synergex-button">
              Start Learning
            </Link>
            <Link href="/community" className="synergex-button-secondary">
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

