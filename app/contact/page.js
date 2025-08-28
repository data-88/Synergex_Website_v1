'use client'

import { useState } from 'react'

export const metadata = {
  title: 'Contact - Synergex',
  description: 'Get in touch with the Synergex team for questions, collaboration, or support.',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactMethods = [
    {
      name: 'Email',
      value: 'hello@synergex.org',
      description: 'General inquiries and support',
      icon: '📧'
    },
    {
      name: 'Research',
      value: 'research@synergex.org',
      description: 'Academic collaboration and research',
      icon: '🔬'
    },
    {
      name: 'Partnerships',
      value: 'partnerships@synergex.org',
      description: 'Business and institutional partnerships',
      icon: '🤝'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/synergex',
      description: 'Source code and development',
      icon: '🐙'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/synergex',
      description: 'Updates and announcements',
      icon: '🐦'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/synergex',
      description: 'Professional network',
      icon: '💼'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/synergex',
      description: 'Community chat',
      icon: '💬'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about Synergex? Want to collaborate on research? 
            Looking for support or partnerships? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' ? (
              <div className="synergex-card text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300 mb-4">
                  Thank you for reaching out. We'll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="synergex-button-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-synergex-accent focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-synergex-accent focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-synergex-accent focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="research">Research Collaboration</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-synergex-accent focus:border-transparent resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full synergex-button ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Direct Contact</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">{method.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{method.name}</h3>
                      <a
                        href={`mailto:${method.value}`}
                        className="text-synergex-accent hover:text-white transition-colors"
                      >
                        {method.value}
                      </a>
                      <p className="text-gray-300 text-sm mt-1">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Follow & Connect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="synergex-card hover:scale-105 transition-transform duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{social.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white">{social.name}</h3>
                        <p className="text-gray-300 text-sm">{social.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="synergex-card">
              <h3 className="text-lg font-semibold text-white mb-3">Office Hours</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p><span className="text-white">Monday - Friday:</span> 9:00 AM - 6:00 PM PST</p>
                <p><span className="text-white">Saturday:</span> 10:00 AM - 2:00 PM PST</p>
                <p><span className="text-white">Sunday:</span> Closed</p>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                * Response times may vary during weekends and holidays
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="synergex-card">
              <h3 className="text-lg font-semibold text-white mb-2">How quickly will you respond?</h3>
              <p className="text-gray-300 text-sm">
                We typically respond to all inquiries within 24-48 hours during business days. 
                For urgent technical support, please include "URGENT" in your subject line.
              </p>
            </div>
            
            <div className="synergex-card">
              <h3 className="text-lg font-semibold text-white mb-2">Can I contribute to Synergex?</h3>
              <p className="text-gray-300 text-sm">
                Absolutely! Synergex is open source and we welcome contributions from the community. 
                Check out our GitHub repository and community guidelines to get started.
              </p>
            </div>
            
            <div className="synergex-card">
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer consulting services?</h3>
              <p className="text-gray-300 text-sm">
                Yes, we provide consulting for organizations looking to implement Synergex in their 
                research or business processes. Contact our partnerships team for more information.
              </p>
            </div>
            
            <div className="synergex-card">
              <h3 className="text-lg font-semibold text-white mb-2">Is Synergex suitable for beginners?</h3>
              <p className="text-gray-300 text-sm">
                Yes! While Synergex is powerful, it's designed to be accessible. Start with our 
                learning path and interactive examples to build your understanding step by step.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a researcher, developer, or systems thinker, 
            we're here to help you succeed with Synergex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@synergex.org"
              className="synergex-button"
            >
              Send us an Email
            </a>
            <a
              href="https://discord.gg/synergex"
              target="_blank"
              rel="noopener noreferrer"
              className="synergex-button-secondary"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

