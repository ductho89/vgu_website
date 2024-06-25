import Image from 'next/image';
import { sans } from '../../ui/fonts';
import Link from 'next/link';
import { getStudyPrograms } from '@/app/lib/utils';
import directus from '@/lib/directus';

export default async function StudyPrograms() {
  const studyPrograms = await getStudyPrograms();
  return (
    <div className={`${sans.className} mt-12`}>
      <div className="mb-12">
        <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
          Explore{' '}
          <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
            Our Program
          </mark>{' '}
        </h1>
      </div>

      {/* ---PROGRAMS LIST--- */}

      <div id="programlist" className="mx-auto grid w-8/12 grid-cols-3 gap-6 ">
        {studyPrograms.map((item: any) => (
          <div
            key={item.name}
            className=" max-w-xs overflow-hidden rounded shadow-lg duration-200 hover:scale-105"
          >
            <Image
              src={`${directus.url}assets/${item.thumbnail.filename_disk}`}
              width={300}
              height={300}
              alt="Placeholder image"
              className="card-image block w-full border-b-2 border-b-vgu-orange"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{item.name}</div>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
            <div className="p-6">
              <Link href={`/studyprograms`}>
                <button className=" inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue ">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        ))}
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
