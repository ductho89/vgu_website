import directus from '@/lib/directus';
import { sans } from '../../ui/fonts';
import Image from 'next/image';
export default function HeroSection() {
  return (
    <div className={`${sans.className}`}>
      <div className="relative mb-8 max-w-full">
        <Image
          src={`${directus.url}assets/fca24a6d-c6cc-406a-aab3-fdbdb39a2e3b`}
          height={1004}
          width={1924}
          className="w-full h-full brightness-75 filter"
          alt="VGU Campus Image"
        />

        <div className=" absolute inset-0 mx-auto my-auto h-auto w-1/2 py-16 text-center">
          <h1 className=" mb-8 text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
            EXPLORE{' '}
            <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
              VGU PROGRAMS
            </mark>{' '}
          </h1>
          <div>
            <p className="text-white">
              Choose from a range of majors and programs that will have you
              career-ready from day one.
            </p>
            <p className="text-white">
              {' '}
              There is a reason VGU graduates stand out from the crowd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
