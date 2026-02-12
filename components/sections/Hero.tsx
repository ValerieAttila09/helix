'use client';

import React from 'react'
import Beams from '../Beams'
import { Button } from '../ui/button';
import { Triangle } from 'lucide-react';
import { Marquee } from '../ui/marquee';
import { HERO_SECTION } from '@/lib/constants/EN';
import lenovoLogo from "../../assets/icons/lenovo-logo.svg";
import metaLogo from "../../assets/icons/meta-logo.svg";
import nvidiaLogo from "../../assets/icons/nvidia-logo-putih.svg";
import redhatLogo from "../../assets/icons/redhat-logo.svg";
import redisLogo from "../../assets/icons/redis-logo.svg";
import vercelLogo from "../../assets/icons/vercel-logo.svg";
import Image from 'next/image';

const Icons = [
  { icon: lenovoLogo, label: "Lenovo" },
  { icon: metaLogo, label: "Meta" },
  { icon: nvidiaLogo, label: "NVIDIA" },
  { icon: redhatLogo, label: "Redhat" },
  { icon: redisLogo, label: "Redis" },
  { icon: vercelLogo, label: "Vercel" },
];

const HeroSection = () => {
  return (
    <div className='min-h-screen relative w-full border-b border-neutral-800'>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Beams
          beamWidth={2}
          beamHeight={23}
          beamNumber={20}
          lightColor="#5447ff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        <div className="absolute inset-x-0 bottom-0 z-5 background-transparent">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 lg:max-w-5xl py-8 sm:py-12 md:py-16 lg:py-20 space-y-6">
            <div className="flex items-center gap-2">
              <Triangle className='size-3 text-red-500 rotate-90' fill='#fb2c36' />
              <span className="text-neutral-500 font-medium text-xs sm:text-sm md:text-base">{HERO_SECTION.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-background leading-tight">{HERO_SECTION.heading}</h1>
            <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">{HERO_SECTION.subheading}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2">
              <Button variant={'outline'} className='rounded-none w-full sm:w-auto'>
                <span className="text-sm sm:text-base md:text-md font-normal">{HERO_SECTION.primaryButton}</span>
              </Button>
              <Button variant={'ghost'} className='rounded-none w-full sm:w-auto group transition-all'>
                <span className="text-sm sm:text-base md:text-md text-neutral-200 font-normal group-hover:text-foreground transition-all">{HERO_SECTION.secondaryButton}</span>
              </Button>
            </div>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee className="[--duration:30s]">
              {Icons.map((data, i) => {
                return (
                  <div key={data.label} className="p-2 sm:p-4">
                    <Image src={data.icon} alt={data.label} className='h-6 sm:h-8 w-auto' width={56} height={56} />
                  </div>
                );
              })}
            </Marquee>
            <div className="from-black pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
            <div className="from-black pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
