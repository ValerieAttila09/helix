import React from 'react';
import { Button } from '../ui/button';
import { CogIcon } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-[8%] lg:px-[12%] py-12 sm:py-16 md:py-20 flex items-center justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-5">
          <div className="bg-neutral-900 w-full h-64 sm:h-80 md:h-[480px]"></div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-between items-start md:items-center gap-8 md:gap-10">
          <div className="space-y-4 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-background font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className="text-sm sm:text-base md:text-md text-neutral-300 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officiis dolorem natus illum excepturi blanditiis distinctio unde. Sapiente eveniet labore inventore deleniti quasi perferendis aperiam.</p>
            <br />
            <Button variant={'secondary'} className='rounded-none'>
              <span className="text-sm sm:text-base md:text-md">Read the docs</span>
            </Button>
          </div>
          <div className="w-full flex flex-col sm:flex-row items-start gap-6 md:gap-10">
            <div className="w-full space-y-4">
              <CogIcon className='size-5 text-teal-400' />
              <h3 className="text-base sm:text-lg text-background font-medium">Lorem ipsum dolor</h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A distinctio doloribus quasi cupiditate officiis dolor repellat maxime.</p>
            </div>
            <div className="w-full space-y-4">
              <CogIcon className='size-5 text-teal-400' />
              <h3 className="text-base sm:text-lg text-background font-medium">Lorem ipsum dolor sit</h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eligendi similique blanditiis vel praesentium delectus ullam ex fuga?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection
