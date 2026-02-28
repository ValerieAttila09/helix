import React from 'react';
import { Button } from '../ui/button';
import { CogIcon } from 'lucide-react';
import { ABOUT_SECTION } from '@/lib/constants/EN';
import Image from 'next/image';
import AboutImage from "../../assets/images/sandro-katalina-k1bO_VTiZSs-unsplash.jpg";

const AboutSection = () => {
  return (
    <div className="w-full min-h-screen px-6 sm:px-8 md:px-[8%] lg:px-[12%] py-12 sm:py-16 md:py-20 flex items-center justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-5">
          <div className="bg-neutral-900 w-full h-80 md:h-[480px]">
            <Image src={AboutImage} alt={"Landing Image"} width={720} height={720} className='w-full h-full object-cover'/>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between items-start md:items-center gap-8 md:gap-10">
          <div className="space-y-4 w-full">
            <h1 className="text-4xl lg:text-5xl text-white font-medium">{ABOUT_SECTION.heading}</h1>
            <p className="text-base md:text-md text-neutral-300 font-normal">{ABOUT_SECTION.description}</p>
            <br />
            <Button variant={'secondary'} className='rounded-none'>
              <span className="text-base md:text-md">{ABOUT_SECTION.ctaButton}</span>
            </Button>
          </div>
          <div className="w-full flex flex-col sm:flex-row items-start gap-6 md:gap-10">
            {ABOUT_SECTION.features.map((feature, idx) => (
              <div key={idx} className="w-full space-y-4">
                <CogIcon className='size-5 text-teal-400' />
                <h3 className="text-lg text-white font-medium">{feature.title}</h3>
                <p className="text-sm text-neutral-300 font-normal">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection
