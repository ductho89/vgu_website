import { sans } from "../../ui/fonts"

export default function HeroSection() {
    return (
        <div className={`${sans.className}`}>
            <div className="relative max-w-full mb8">
                <img
                    src="/cs.jpg"
                    className="w-full h-full brightness-75 filter"
                    alt="CS Program Image"
                />
                <div className=" w-1/2 absolute inset-0 py-16 text-center mx-auto my-auto h-auto">
                    <h1 className=" mb-8 text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                        COMPUTER{' '}
                        <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                            SCIENCE
                        </mark>{' '}
                    </h1>
                    <div>
                        <p className='text-white'>
                            The power to change the world
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}