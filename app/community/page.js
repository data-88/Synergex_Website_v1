import Link from 'next/link'

export const metadata = {
  title: 'Community - Synergex',
  description: 'Join the Synergex community of systems thinkers, researchers, and practitioners.',
}

export default function CommunityPage() {
  const communityChannels = [
    {
      name: 'Discord Server',
      description: 'Real-time chat and collaboration with the Synergex community.',
      members: '500+',
      activity: 'Very Active',
      link: 'https://discord.gg/synergex',
      icon: '💬'
    },
    {
      name: 'GitHub Discussions',
      description: 'Technical discussions, Q&A, and project collaboration.',
      members: '200+',
      activity: 'Active',
      link: 'https://github.com/synergex/discussions',
      icon: '🐙'
    },
    {
      name: 'Reddit Community',
      description: 'General discussions, news, and community updates.',
      members: '1,200+',
      activity: 'Active',
      link: 'https://reddit.com/r/synergex',
      icon: '📱'
    },
    {
      name: 'Mailing List',
      description: 'Newsletter with updates, research papers, and community highlights.',
      members: '800+',
      activity: 'Weekly',
      link: '#',
      icon: '📧'
    }
  ]

  const events = [
    {
      name: 'Synergex Summit 2024',
      date: 'June 15-17, 2024',
      location: 'San Francisco, CA',
      description: 'Annual conference bringing together researchers, practitioners, and enthusiasts.',
      type: 'Conference'
    },
    {
      name: 'Systems Thinking Workshop',
      date: 'Monthly',
      location: 'Online',
      description: 'Interactive workshops teaching Synergex fundamentals and advanced concepts.',
      type: 'Workshop'
    },
    {
      name: 'Research Paper Review',
      date: 'Bi-weekly',
      location: 'Online',
      description: 'Community review and discussion of new research papers and applications.',
      type: 'Discussion'
    }
  ]

  const contributionAreas = [
    {
      area: 'Documentation',
      description: 'Help improve tutorials, guides, and reference materials.',
      skills: 'Writing, Technical Knowledge',
      effort: 'Low to Medium'
    },
    {
      area: 'Tool Development',
      description: 'Contribute to parsers, visualizers, and other development tools.',
      skills: 'Programming, Systems Thinking',
      effort: 'Medium to High'
    },
    {
      area: 'Research & Applications',
      description: 'Apply Synergex to new domains and publish findings.',
      skills: 'Research, Domain Expertise',
      effort: 'High'
    },
    {
      area: 'Community Building',
      description: 'Organize events, moderate discussions, and welcome new members.',
      skills: 'Communication, Organization',
      effort: 'Low to Medium'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Synergex Community
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with scientists, technologists, policymakers, and system thinkers from around the world. 
            Share knowledge, collaborate on projects, and advance the field of systems modeling together.
          </p>
        </div>

        {/* Community Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityChannels.map((channel, index) => (
              <div key={index} className="synergex-card">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{channel.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{channel.name}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="text-gray-400">{channel.members} members</span>
                      <span className="text-synergex-accent">{channel.activity}</span>
                    </div>
                    <a
                      href={channel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="synergex-button-secondary inline-block"
                    >
                      Join Channel
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="synergex-card">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-64">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        event.type === 'Conference' ? 'bg-purple-600' :
                        event.type === 'Workshop' ? 'bg-blue-600' :
                        'bg-green-600'
                      } text-white`}>
                        {event.type}
                      </span>
                      <span className="text-sm text-gray-400">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{event.name}</h3>
                    <p className="text-synergex-accent text-sm">{event.location}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <button className="synergex-button-secondary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contributing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Contribute</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributionAreas.map((area, index) => (
              <div key={index} className="synergex-card">
                <h3 className="text-lg font-semibold text-white mb-3">{area.area}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Skills needed:</span>
                    <span className="text-white ml-2">{area.skills}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Effort level:</span>
                    <span className="text-white ml-2">{area.effort}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">Be Respectful</h3>
              <p className="text-gray-300 text-sm">
                Treat all community members with respect and kindness, regardless of their background or experience level.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Think Critically</h3>
              <p className="text-gray-300 text-sm">
                Question assumptions, challenge ideas constructively, and contribute to meaningful discussions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="text-lg font-semibold text-white mb-2">Help Others Learn</h3>
              <p className="text-gray-300 text-sm">
                Share your knowledge, answer questions, and help newcomers understand complex concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start by joining our Discord server or GitHub discussions. Introduce yourself, 
            ask questions, and begin collaborating with fellow systems thinkers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/synergex"
              target="_blank"
              rel="noopener noreferrer"
              className="synergex-button"
            >
              Join Discord
            </a>
            <a
              href="https://github.com/synergex"
              target="_blank"
              rel="noopener noreferrer"
              className="synergex-button-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

