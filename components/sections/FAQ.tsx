'use client'
import { FAQS_DATA } from '@/lib/constants/EN'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<Array<HTMLDivElement | null>>([])

  const toggle = async (index: number) => {
    const el = contentRefs.current[index]
    if (!el) return

    const isOpen = openIndex === index
    if (isOpen) {
      gsap.to(el, { height: el.scrollHeight, duration: 0 })
      gsap.to(el, { height: 0, duration: 0.25, ease: 'power2.out' })
      setOpenIndex(null)
    } else {
      gsap.to(el, {
        height: el.scrollHeight,
        duration: 0.25,
        ease: 'power2.out',
        onComplete: () => gsap.set(el, { height: 'auto' })
      });
      setOpenIndex(index)
    }
  }

  return (
    <section className="w-full bg-black min-h-screen px-4 sm:px-6 md:px-[8%] lg:px-[12%] py-12 sm:py-16 md:py-20 space-y-12">
      <div className="">
        <div className="mb-8 md:mb-10 pb-6 md:pb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-xs bg-neutral-900 text-neutral-300 rounded-full px-3 py-0.5 border border-neutral-700">FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-background">Everything You Need to Know</h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-3">Looking for quick answers? Check out our FAQ section.</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {FAQS_DATA.map((item, i) => (
            <div key={i} className="bg-[#0f0f0f] border border-neutral-800 rounded-none overflow-hidden">
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 text-left gap-4"
              >
                <span className="text-xs sm:text-sm text-blue-400 flex-1">{item.q}</span>
                <svg
                  className={`w-4 h-4 text-neutral-400 transform transition-transform duration-200 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                ref={(el) => (contentRefs.current[i] = el)}
                style={{ height: 0, overflow: 'hidden' }}
                className="px-3 sm:px-5 text-xs sm:text-sm text-neutral-300"
              >
                <div className="py-3">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
