import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../utils/constants';

export default function Contact() {
  const contactMethods = [
    { icon: Mail, text: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: Phone, text: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
    { icon: MapPin, text: CONTACT_INFO.location },
  ];

  const socialLinks = [
    { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 dark:to-gray-800/50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 group p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(method.icon, {
                    className: "w-6 h-6 text-blue-600 dark:text-blue-400",
                  })}
                </div>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {method.text}
                  </a>
                ) : (
                  <span className="text-gray-600 dark:text-gray-300">{method.text}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-8">
            <div className="grid grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={social.label}
                >
                  <div className="w-16 h-16 rounded-lg bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    {React.createElement(social.icon, {
                      className: "w-8 h-8 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                    })}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}