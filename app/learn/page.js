import Link from 'next/link'

export const metadata = {
  title: 'Learn - Synergex',
  description: 'Structured learning path for mastering Synergex from beginner to expert levels.',
}

export default function LearnPage() {
  const learningLevels = [
    {
      level: 1,
      title: 'Foundations',
      subtitle: 'Understanding Systems Thinking',
      description: 'Learn the basic concepts of systems, flows, and feedback loops. Master the fundamental Synergex syntax.',
      lessons: [
        'What is a System?',
        'Basic Flow Patterns',
        'Introduction to Feedback',
        'Your First Synergex Expression'
      ],
      duration: '2-3 hours',
      difficulty: 'Beginner'
    },
    {
      level: 2,
      title: 'Patterns & Kernels',
      subtitle: 'Universal Structures',
      description: 'Discover the core patterns that appear across all domains. Learn to identify and use kernels effectively.',
      lessons: [
        'Understanding Kernels',
        'Common System Patterns',
        'Pattern Recognition',
        'Building Complex Models'
      ],
      duration: '4-5 hours',
      difficulty: 'Intermediate'
    },
    {
      level: 3,
      title: 'Advanced Operators',
      subtitle: 'Complex Interactions',
      description: 'Master coupling, isomorphism, and transformation operators. Model sophisticated system behaviors.',
      lessons: [
        'System Coupling',
        'Isomorphic Patterns',
        'Transformation Operators',
        'Multi-System Dynamics'
      ],
      duration: '6-8 hours',
      difficulty: 'Advanced'
    },
    {
      level: 4,
      title: 'Expert Applications',
      subtitle: 'Real-World Modeling',
      description: 'Apply Synergex to complex domains like AI alignment, climate systems, and cognitive science.',
      lessons: [
        'AI Alignment Modeling',
        'Climate System Dynamics',
        'Cognitive Architecture',
        'Emergence & Complexity'
      ],
      duration: '8-10 hours',
      difficulty: 'Expert'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn Synergex
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our structured learning path from beginner to expert. Each level builds upon the previous, 
            giving you a solid foundation in systems thinking and Synergex modeling.
          </p>
        </div>

        {/* Learning Path */}
        <div className="space-y-8 mb-16">
          {learningLevels.map((level, index) => (
            <div key={level.level} className="relative">
              {/* Level Card */}
              <div className="synergex-card">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Level Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-synergex-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {level.level}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{level.title}</h2>
                        <p className="text-synergex-accent">{level.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{level.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <span className="text-sm text-gray-400">
                        Duration: {level.duration}
                      </span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        level.difficulty === 'Beginner' ? 'bg-green-600' :
                        level.difficulty === 'Intermediate' ? 'bg-yellow-600' :
                        level.difficulty === 'Advanced' ? 'bg-orange-600' :
                        'bg-red-600'
                      } text-white`}>
                        {level.difficulty}
                      </span>
                    </div>

                    <Link
                      href={`/learn/level-${level.level}`}
                      className="synergex-button inline-block"
                    >
                      Start Level {level.level}
                    </Link>
                  </div>

                  {/* Lessons Preview */}
                  <div className="lg:w-80">
                    <h3 className="text-lg font-semibold text-white mb-4">Lessons in this Level:</h3>
                    <ul className="space-y-2">
                      {level.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-synergex-accent rounded-full"></div>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              {index < learningLevels.length - 1 && (
                <div className="absolute left-6 top-full w-0.5 h-8 bg-synergex-accent transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Additional Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-300 text-sm mb-4">
                Comprehensive reference materials and API documentation
              </p>
              <Link href="/syntax" className="text-synergex-accent hover:text-white transition-colors">
                View Docs →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Practice Exercises</h3>
              <p className="text-gray-300 text-sm mb-4">
                Hands-on exercises to reinforce your learning
              </p>
              <Link href="/examples" className="text-synergex-accent hover:text-white transition-colors">
                Try Exercises →
              </Link>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-300 text-sm mb-4">
                Connect with other learners and experts
              </p>
              <Link href="/community" className="text-synergex-accent hover:text-white transition-colors">
                Join Community →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with Level 1 and build your foundation in systems thinking. 
            Each lesson includes interactive examples and quizzes to test your understanding.
          </p>
          <Link href="/learn/level-1" className="synergex-button">
            Start Learning Now
          </Link>
        </div>
      </div>
    </div>
  )
}

