'use client';

import React from 'react'
import Beams from '../Beams'
import { Button } from '../ui/button';
import { Triangle } from 'lucide-react';
import { Marquee } from '../ui/marquee';
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
    <div className='min-h-screen relative w-full'>
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
          <div className="max-w-3/5 p-20 space-y-6">
            <div className="flex items-center gap-2">
              <Triangle className='size-3 text-red-500 rotate-90' fill='#fb2c36' />
              <span className="text-neutral-500 font-medium text-md">HELIX: A DATABASE COMPANY</span>
            </div>
            <h1 className="text-6xl font-normal text-background">Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
            <div className="flex items-center gap-2">
              <Button variant={'outline'} className='rounded-none'>
                <span className="text-md font-normal">Get Started</span>
              </Button>
              <Button variant={'ghost'} className='rounded-none group transition-all'>
                <span className="text-md text-neutral-200 font-normal group-hover:text-foreground transition-all">Read the docs</span>
              </Button>
            </div>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee className="[--duration:30s]">
              {Icons.map((data, i) => {
                return (
                  <div key={data.label} className="p-4">
                    <Image src={data.icon} alt={data.label} className='h-8 w-auto' width={56} height={56}/>
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