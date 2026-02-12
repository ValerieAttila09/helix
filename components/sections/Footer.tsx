import React from 'react'
import { Github, Linkedin, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const footerLinks = {
    platform: {
      title: 'Platform',
      links: ['Overview', 'Use Cases']
    },
    about: {
      title: 'About Us',
      links: ['Team', 'Support', 'Legal', 'Security']
    },
    learn: {
      title: 'Learn',
      links: ['Tutorials', 'API Reference', 'Quickstart']
    }
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'Github' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer className='w-full bg-black border-t border-neutral-900'>
      <div className='px-4 sm:px-6 md:px-[8%] lg:px-[12%] py-12 sm:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12'>
          <div className='lg:col-span-1'>
            <div className='mb-6'>
              <h2 className='text-white font-bold text-lg sm:text-xl mb-4'>Helix</h2>
              <p className='text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6'>
                Enhance and tailor your digital experiences effortlessly, at scale.
              </p>
            </div>

            <div className='flex items-center gap-4 mb-8'>
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <Link
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className='w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition'
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>

            <div className='flex items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-green-500'></span>
              <span className='text-neutral-300 text-xs sm:text-sm'>All systems operational</span>
            </div>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base'>{footerLinks.platform.title}</h3>
            <ul className='space-y-3'>
              {footerLinks.platform.links.map((link, idx) => (
                <li key={idx}>
                  <a href='#' className='text-neutral-400 hover:text-white text-xs sm:text-sm transition'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base'>{footerLinks.about.title}</h3>
            <ul className='space-y-3'>
              {footerLinks.about.links.map((link, idx) => (
                <li key={idx}>
                  <a href='#' className='text-neutral-400 hover:text-white text-xs sm:text-sm transition'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base'>{footerLinks.learn.title}</h3>
            <ul className='space-y-3'>
              {footerLinks.learn.links.map((link, idx) => (
                <li key={idx}>
                  <a href='#' className='text-neutral-400 hover:text-white text-xs sm:text-sm transition'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-neutral-900 px-4 sm:px-6 md:px-[8%] lg:px-[12%] py-6 sm:py-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left'>
          <p className='text-neutral-500 text-xs sm:text-sm'>
            &copy; 2025 helix.com
          </p>
          <p className='text-neutral-500 text-xs sm:text-sm'>
            Made by Valerie.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
