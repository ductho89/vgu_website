/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { Carousel } from '@material-tailwind/react';
import directus from '@/lib/directus';

export default function HeroSection({ carouselData }: { carouselData: any }) {
  if (!carouselData) {
    console.error('Invalid carouselData format:', carouselData);
    return null;
  }
  return (
    <Carousel
      className="content-fit"
      transition={{ type: 'tween', duration: 1 }}
    >
      {carouselData.carousel_image.map((item: { carousel_image_id: { image: { filename_disk: any; }; }; }) => {
          if (!item.carousel_image_id || !item.carousel_image_id.image) {
            console.error('Invalid image data:', item);
            return null;
          }
          return (
            <Image
              key={item.carousel_image_id.image.filename_disk}
              height={799}
              width={1761}
              src={`${directus.url}assets/${item.carousel_image_id.image.filename_disk}`}
              className="h-auto w-full object-cover"
              alt="carousel image"
            />
          );
        })}
    </Carousel>
  );
}
