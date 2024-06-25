import Image from 'next/image';
import { sans } from '../../ui/fonts';
import Link from 'next/link';
import { getAllDepartments } from '@/app/lib/utils';
import directus from '@/lib/directus';

export default async function Departments() {
  // const organizationData = [
  //   {
  //     label: 'PRESIDENTIAL BOARD',
  //     content:
  //       'Vietnamese - German University is governed by the executive board',
  //     imageUrl: '/girl1.jpeg',
  //     url: 'presidential-board',
  //   },
  //   {
  //     label: 'FALCUTIES',
  //     content:
  //       'Vietnamese - German University is governed by the executive falcuties',
  //     imageUrl: '/girl2.jpeg',
  //     url: 'falcuties',
  //   },
  //   {
  //     label: 'CENTRAL UNITS',
  //     content:
  //       'Vietnamese - German University is governed by the central units',
  //     imageUrl: '/girl3.jpeg',
  //     url: 'central-units',
  //   },
  //   // {
  //   //   label: 'ADMISSIONS',
  //   //   content: 'Learn about admissions at Vietnamese - German University.',
  //   //   imageUrl: '/girl3.jpeg',
  //   //   url: 'admission',
  //   // },
  //   // {
  //   //   label: 'ACADEMICS',
  //   //   content: 'Explore academic programs at Vietnamese - German University.',
  //   //   imageUrl: '/girl1.jpeg',
  //   //   url: 'academics',
  //   // },
  //   // {
  //   //   label: 'RESEARCH',
  //   //   content:
  //   //     'Discover research opportunities at Vietnamese - German University.',
  //   //   imageUrl: '/girl2.jpeg',
  //   //   url: 'research',
  //   // },
  // ];
  var departmentsData = await getAllDepartments();

  if (!departmentsData) {
    return null;
  }

  return (
    <div className={`${sans.className} my-12`}>
      <div className="mb-12">
        <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
            Organization
          </mark>{' '}
        </h1>
      </div>

      {/* ---PROGRAMS LIST--- */}

      <div className="mx-auto w-8/12">
        <div className="grid grid-cols-1 gap-6 rounded pb-6 md:grid-cols-2 lg:grid-cols-3">
          {departmentsData.map((item: any) => (
            <div key={item.id}>
              <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                <div className="width-full h-auto shadow-lg">
                  <Image
                    src={`${directus.url}assets/${item.thumbnail.filename_disk}`}
                    height={533}
                    width={800}
                    alt="Placeholder image"
                    className="card-imageblock w-full h-auto border-b-vgu-orange border-b-2"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="mb-2 text-2xl font-bold">{item.name}</div>
                  <p className="text-base text-gray-700">{item.description}</p>
                </div>
                <div className="px-6 py-6 ">
                  <Link href={`/organization/${item.id}`}>
                    <button className="inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue ">
                      Learn more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
