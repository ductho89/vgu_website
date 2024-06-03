import Image from 'next/image';
import Link from 'next/link';
import { sans } from '../ui/fonts';

export default function VguLogo() {
  return (
    <div
      className={`${sans.className} flex flex-row items-center leading-none text-black`}
    >
      <Link href={'/home'}>
        {' '}
        <Image
          src="/vgu-logo.png"
          width={261}
          height={89}
          className="hidden md:block"
          alt="VGU Logo"
        />
      </Link>
    </div>
  );
}
