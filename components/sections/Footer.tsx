import React from 'react'
import { Github, Linkedin, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'
import { FOOTER_SECTION } from '@/lib/constants/EN'
import { UrlObject } from 'url'

const Footer = () => {
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
                {FOOTER_SECTION.tagline}
              </p>
            </div>

            <div className='flex items-center gap-4 mb-8'>
              {socialLinks.map((social: { icon: any; href: string | UrlObject; label: string | undefined }, idx: React.Key | null | undefined) => {
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
              <span className='text-neutral-300 text-xs sm:text-sm'>{FOOTER_SECTION.statusMessage}</span>
            </div>
          </div>

          {Object.entries(FOOTER_SECTION.footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className='text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base'>{section.title}</h3>
              <ul className='space-y-3'>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className='text-neutral-400 hover:text-white text-xs sm:text-sm transition'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
