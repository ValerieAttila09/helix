'use client';

import { MAIN_FEATURES } from '@/lib/constants/EN';
import Image from 'next/image';
import React from 'react'
import FeaturesImage1 from "../../assets/images/edge-network-XOAgynsg (1).png";
import FeaturesImage2 from "../../assets/images/helix-card-asset.png";
import { Globe } from '../ui/globe';
import { StripedPattern } from '../magicui/striped-pattern';

const Features = () => {

  return (
    <div className='w-full bg-black min-h-screen px-[6%] sm:px-[8%] md:px-[12%] py-20 space-y-12'>
      <div className='mb-16'>
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Security and speed,<br />automatically configured</h2>
        <p className='text-neutral-400 text-lg max-w-2xl'>Cloud provides enterprise-grade security and performance out of the box. No need to configure firewalls, load balancers, or caching layers — it's all done for you.</p>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div className="h-[600px] relative overflow-hidden border-b border-neutral-700 w-full col-span-1">
          <div className="w-full flex items-center">
            <div className="w-1/2 h-32 overflow-hidden relative border border-neutral-700 border-b-0 border-r-0 space-y-1">
             <StripedPattern />
              <div className="absolute z-20 insert-0 space-y-1 p-3">
                <h3 className="text-white font-medium text-xl">20+ servers available</h3>
                <p className="text-xs text-neutral-400 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae possimus quaerat fugit repudiandae odio.</p>
              </div>
            </div>
            <div className="w-1/2 h-32 overflow-hidden relative border border-neutral-700 border-b-0 space-y-1">
             <StripedPattern />
              <div className="absolute z-20 insert-0 space-y-1 p-3">
                <h3 className="text-white font-medium text-xl">20+ servers available</h3>
                <p className="text-xs text-neutral-400 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae possimus quaerat fugit repudiandae odio.</p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full border border-neutral-700 flex flex-col items-center justify-center">
            <Globe className='' config={{
              width: 800,
              height: 800,
              onRender: () => { },
              devicePixelRatio: 2,
              phi: 0,
              theta: 0.1,
              dark: 1,
              diffuse: 0.2,
              mapSamples: 16000,
              mapBrightness: 1.2,
              baseColor: [1, 1, 1],
              markerColor: [90 / 255, 234 / 255, 56 / 255],
              glowColor: [0.2, 0.2, 0.7],
              markers: [
                { location: [14.5995, 120.9842], size: 0.03 },
                { location: [19.076, 72.8777], size: 0.1 },
                { location: [23.8103, 90.4125], size: 0.05 },
                { location: [30.0444, 31.2357], size: 0.07 },
                { location: [39.9042, 116.4074], size: 0.08 },
                { location: [-23.5505, -46.6333], size: 0.1 },
                { location: [19.4326, -99.1332], size: 0.1 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [34.6937, 135.5022], size: 0.05 },
                { location: [41.0082, 28.9784], size: 0.06 },
              ],
            }} />
          </div>
        </div>
        <Image src={FeaturesImage2} alt='Features Image 2' className='w-full col-span-1 my-auto block h-auto object-cover' width={720} height={720} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8'>
        {MAIN_FEATURES.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <div key={idx} className='p-6 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/70 transition' >
              <div className='flex items-center gap-3 mb-4'>
                <Icon className='w-5 h-5 text-blue-400' />
                <h4 className='font-semibold text-white'>{feature.title}</h4>
              </div>
              <p className='text-neutral-400 text-sm leading-relaxed'>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Features