import Image from 'next/image';
import { sans } from '../ui/fonts';

export default function Test() {
  return (
    <div className={`${sans.className} mt-12`}>
      <div className="mb-12">
        <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="rounded bg-vgu-orange px-2 text-white">
            In Figures
          </mark>{' '}
        </h1>
      </div>

      <div className="mx-auto grid w-8/12 grid-cols-7 ">
        <div className="h-500 relative col-span-5">
          <Image
            src="/vgulibrary.jpeg"
            alt="VGU Library Image"
            width={750}
            height={750}
          />
        </div>
        <div className="col-span-2 mx-6 flex flex-col justify-between">
          <div>
            {/*<p className="text-6xl font-semibold text-vgu-darkblue">1700</p>*/}
            <span className="text-6xl font-semibold text-vgu-darkblue" id="state1" countTo="1700"></span>
            
            <p className="text-xl">approximate number of students</p>
          </div>
          <div>
            <p className="text-6xl font-semibold text-vgu-darkblue">200</p>
            <p>millions of dollars investment in infrastructure</p>
          </div>
          <div>
            <p className="text-6xl font-semibold text-vgu-darkblue">71</p>
            <p>technical laboratories</p>
          </div>
          <div>
            <p className=" text-6xl font-semibold text-vgu-darkblue">20</p>
            <p>study programs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
