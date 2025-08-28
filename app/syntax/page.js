import Link from 'next/link'
import SyntaxAccordion from '../../components/SyntaxAccordion'
import LiveEditor from '../../components/LiveEditor'

export const metadata = {
  title: 'Syntax Guide - Synergex',
  description: 'Complete Synergex v1.1 syntax guide with interactive examples and live editor.',
}

export default function SyntaxPage() {
  const syntaxSections = [
    {
      title: 'Core Concepts',
      content: [
        {
          symbol: '⟦System⟧',
          name: 'System Bracket',
          meaning: 'Denotes a system, entity, or bounded context',
          example: '⟦Climate⟧, ⟦Economy⟧, ⟦Immune⟧',
          description: 'Systems are the fundamental building blocks of Synergex. They represent bounded contexts that can interact, transform, and evolve.'
        },
        {
          symbol: '→',
          name: 'Flow Arrow',
          meaning: 'Indicates flow, transformation, or causal relationship',
          example: '⟦Input⟧ → ⟦Process⟧ → ⟦Output⟧',
          description: 'The flow arrow shows how systems transform and influence each other over time.'
        },
        {
          symbol: '◈',
          name: 'Kernel',
          meaning: 'Core pattern, structure, or archetype',
          example: '◈_Regulator, ◈_Amplifier, ◈_Filter',
          description: 'Kernels are universal patterns that appear across different domains and systems.'
        }
      ]
    },
    {
      title: 'Operators',
      content: [
        {
          symbol: '⊗',
          name: 'Coupling',
          meaning: 'Interaction or coupling between systems',
          example: '⟦A⟧ ⊗ ⟦B⟧',
          description: 'Coupling represents the interaction between two or more systems, showing how they influence each other.'
        },
        {
          symbol: '≅',
          name: 'Isomorphism',
          meaning: 'Structural similarity or equivalence',
          example: '⟦Pattern⟧ ≅ ⟦Structure⟧',
          description: 'Isomorphism reveals hidden similarities between seemingly different systems.'
        },
        {
          symbol: '∮',
          name: 'Feedback Loop',
          meaning: 'Circular causality or feedback',
          example: '⟦Output⟧ ∮ ⟦Input⟧',
          description: 'Feedback loops show how systems can influence themselves through circular causality.'
        }
      ]
    },
    {
      title: 'Modifiers',
      content: [
        {
          symbol: '_',
          name: 'Parameter',
          meaning: 'Parameter or modifier for kernels',
          example: '◈_Type, ◈_Strength, ◈_Duration',
          description: 'Parameters allow kernels to be customized for specific contexts and applications.'
        },
        {
          symbol: '^',
          name: 'Transformation',
          meaning: 'Transformation or evolution',
          example: '⟦System⟧^T',
          description: 'Transformation operators show how systems evolve and change over time.'
        }
      ]
    },
    {
      title: 'Advanced Patterns',
      content: [
        {
          symbol: '⟦A⟧ ⊗ ⟦B⟧ → ◈_Pattern ∮',
          name: 'Complex Interaction',
          meaning: 'Multiple systems interacting through a pattern with feedback',
          example: '⟦Mind⟧ ⊗ ⟦World⟧ → ◈_Learning ∮',
          description: 'Complex patterns combine multiple operators to model sophisticated system behaviors.'
        },
        {
          symbol: '⟦System⟧^T ≅ ⟦Target⟧',
          name: 'Transformation Goal',
          meaning: 'System transformation toward a target state',
          example: '⟦AI⟧^T ≅ ⟦Aligned⟧',
          description: 'Transformation goals show the desired end state of system evolution.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Synergex Syntax Guide
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the universal language of systems. Learn every symbol, operator, and pattern 
            that makes Synergex the most powerful framework for modeling complexity.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {syntaxSections.map((section, index) => (
            <a
              key={index}
              href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="synergex-button-secondary text-sm"
            >
              {section.title}
            </a>
          ))}
        </div>

        {/* Syntax Sections */}
        <div className="space-y-8 mb-16">
          {syntaxSections.map((section, index) => (
            <SyntaxAccordion key={index} section={section} />
          ))}
        </div>

        {/* Live Editor */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Try Synergex Live
          </h2>
          <LiveEditor />
        </div>

        {/* Next Steps */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Ready to Build Your First Model?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/examples" className="synergex-button">
              View Examples
            </Link>
            <Link href="/learn" className="synergex-button-secondary">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

