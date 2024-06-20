import Image from 'next/image';
import { sans } from '../ui/fonts';
import directus from '@/lib/directus';
import { getStudyPrograms } from '../lib/utils';


export default async function StudyPrograms() {
  const studyPrograms = await getStudyPrograms();
  return (
    <div className={`${sans.className} mt-12`}>
      <div className="mb-12">
        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
          Explore{' '}
          <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
            Our Program
          </mark>{' '}
        </h1>
      </div>

      {/* ---PROGRAMS LIST--- */}

      <div id="programlist" className="mx-auto grid w-9/12 grid-cols-4 gap-6 ">
        {studyPrograms.map((item:any) => (
          <div className=" max-w-xs overflow-hidden rounded shadow-lg">
            <Image
              src={`${directus.url}assets/${item.thumbnail.filename_disk}`}
              width={300}
              height={300}
              alt="Placeholder image"
              className="card-image border-b-vgu-orange block w-full border-b-2"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{item.name}</div>
              <p className="text-base text-gray-700">
                This is a description for a study program.
              </p>
            </div>
            <div className="px-6 pb-2 pt-4">
              <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
              Learn more
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
