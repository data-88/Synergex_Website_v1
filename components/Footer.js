import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-synergex-accent">SYNERGEX</div>
              <div className="text-sm text-gray-400">.org</div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Universal Systems-of-Systems Meta Language (USSML) for modeling complex systems, 
              flows, and feedback loops.
            </p>
            <p className="text-sm text-gray-400">
              To model reality, we must speak its grammar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/syntax" className="text-gray-300 hover:text-synergex-accent transition-colors">
                  Syntax Guide
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-gray-300 hover:text-synergex-accent transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-synergex-accent transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-300 hover:text-synergex-accent transition-colors">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/community" className="text-gray-300 hover:text-synergex-accent transition-colors">
                  Join Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-synergex-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-synergex-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/synergex" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-synergex-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 Synergex. Licensed under{' '}
            <a 
              href="https://creativecommons.org/licenses/by/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-synergex-accent hover:underline"
            >
              CC BY 4.0
            </a>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/synergex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-synergex-accent transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 1.852-1.339 3.694-4.5 4.951.346.346.654.823.654 1.359 0 1.178-.012 2.128-.012 2.419 0 .209.144.504.662.438A19.019 19.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://twitter.com/synergex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-synergex-accent transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

