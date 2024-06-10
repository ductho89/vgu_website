import Image from 'next/image';
export default function Page() {
  return (
    <div className="max-w-xs overflow-hidden rounded shadow-lg">
      <Image
        src="/opengraph-image.png"
        width={300}
        height={435}
        alt="Placeholder image"
        className="card-image block w-full"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pb-2 pt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          Learn more
        </span>
      </div>
    </div>
  );
}
