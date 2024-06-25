'use client';
import React from 'react';
import CountUp from 'react-countup';
import Image from 'next/image';
import { sans } from '../../ui/fonts';
import directus from '@/lib/directus';

export default function VguInFigures({ figureData }: { figureData: any }) {
  if (!figureData) {
    console.error('Invalid carouselData format:', figureData);
    return null;
  }

  return (
    <div className={`${sans.className}`}>
      <div className="mb-12 ">
        <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="rounded bg-vgu-orange px-2 text-white">
            In Figures
          </mark>{' '}
        </h1>
      </div>

      <div className="mx-auto grid h-auto w-8/12 grid-cols-7 ">
        <div className="relative col-span-5 ">
          <Image
            src={`${directus.url}assets/e9e22c0a-3cb8-43cc-94bf-e9f8cbfaa9ff`}
            alt="VGU Library Image"
            width={1000}
            height={750}
            className="h-auto rounded"
          />
        </div>
        <div className="col-span-2 mx-6 flex flex-col justify-between">
          {figureData.map((item: any) => (
            <div key={item.content}>
              <CountUp
                start={0}
                end={item.figure}
                delay={0}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={false}
                className="text-6xl font-semibold text-vgu-darkblue"
              />
              <p className="text-xl">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          src="/dot.jpg"
          width={100}
          height={100}
          alt="Placeholder image"
          className="card-image mx-auto my-16 block duration-200 hover:scale-105"
        />
      </div>
    </div>
  );
}
