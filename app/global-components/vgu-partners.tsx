import { sans } from '../ui/fonts';

export default function VguPartners() {
  return (

    <div className={`${sans.className} mb-20`}>


      <div className="mb-16">
        <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
            PARTNERS
          </mark>{' '}
        </h1>
      </div>

      <div
        x-data="{}"
        x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >

        <ul

          x-ref="logos"
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          <li>
            <img className='w-170 h-auto' src="./frankfurt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./darmstadt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./karlsruhe.png" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./hfu.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./goethe.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./heilbronn.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./stuttgart.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./rub.jpg" alt="frankfurt" />
          </li>
        </ul>


        <ul
          x-ref="logos"
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          <li>
            <img className='w-170 h-auto' src="./frankfurt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./darmstadt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./karlsruhe.png" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./hfu.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./goethe.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./heilbronn.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./stuttgart.jpg" alt="frankfurt" />
          </li>
          <li>
            <img className='w-170 h-auto' src="./rub.jpg" alt="frankfurt" />
          </li>
        </ul>
      </div>
    </div>
  );
}
