import { sans } from '../ui/fonts';

export default function VirtualTour() {
  return (
    <div className={`${sans.className}`}>
      <div className="relative">
        <img
          src="/vgu_campus.jpeg"
          className="h-auto max-w-full brightness-75 filter"
          alt="VGU Campus Image"
        />

        {/* <video
          className="h-auto w-full max-w-full brightness-75 filter"
          autoPlay
          playsInline
          controls
          muted
          loop
          src="/VGU_NewCampus.mp4"
        ></video> */}

        <div className="absolute inset-0 mx-auto my-auto h-32 w-auto">
          <h1 className="mb-4 text-center text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Explore our new campus
          </h1>

          <div>
            <div className="flex w-full justify-center space-x-12 px-6 py-6 ">
              <button className=" text-l inline-block rounded-full bg-white px-5 py-2 font-extrabold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue ">
                VIRTUAL TOUR
              </button>

              <button className=" text-l inline-block rounded-full bg-white px-5 py-2 font-extrabold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue ">
                CAMPUS TOUR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
