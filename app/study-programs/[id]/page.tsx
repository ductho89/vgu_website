import { getMajor } from '@/app/lib/utils';
import directus from '@/lib/directus';
import Image from 'next/image';
export default async function Page({params}: any) {
  const majorData = await getMajor(params.id);
    if (!majorData) {
        return null;
    }
    
  var majorName = majorData.name;
  var nameArray = majorName.split(' ');
  var nameFirstWord = nameArray[0];
  var nameRest = majorName.substring( majorName.indexOf(" ") + 1, majorName.length );
  return (
    <main>
      {/* <Header /> */}
      <div className="h-auto w-full">
        <div className="relative mb-8 max-w-full">
          <Image
            src={`${directus.url}assets/${majorData.thumbnail.filename_disk}`}
            height="370"
            width="1024"
            className="w-full h-auto brightness-50 filter"
            alt="VGU Campus Image"
          />
          <div className="absolute inset-0 flex h-full w-full items-center justify-center text-center">
            <h1 className=" mb-8 text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
              {nameFirstWord}{' '}
              <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
                {nameRest}
              </mark>{' '}
            </h1>
          </div>
        </div>

        <div className="m-4 mx-auto grid w-9/12 grid-flow-row-dense grid-cols-8 gap-12 rounded border-2 p-6">
          <div className="col-span-2">
            <div id="quote" dangerouslySetInnerHTML={{ __html: majorData.tagline }}></div>
            <hr className="my-6" />

            <div id="accreditation">
              <h1 className="text-2xl font-bold text-vgu-orange">
                Accreditation
              </h1>
              <div className="text-vgu-darkblue" dangerouslySetInnerHTML={{ __html: majorData.accreditation }}></div>
              <hr className="mt-6" />
            </div>

            <div id="contact">
              {/* <hr className="h-px my-4 bg-vgu-darkblue border-0"></hr> */}
              <h1 className="text-2xl font-bold text-vgu-orange">Contact</h1>
              <div className="text-vgu-darkblue" dangerouslySetInnerHTML={{ __html: majorData.contact }}></div>
            </div>
          </div>

          <div className="col-span-6" dangerouslySetInnerHTML={{ __html: majorData.description }}>
            
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
