// 'use client';

// import clsx from 'clsx';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// // Map of links to display in the side navigation.
// // Depending on the size of the application, this would be stored in a database.
// const links = [
//   { name: 'Organzation', href: '/organization' },
//   {
//     name: 'Presidential Boards',
//     href: '/organization/presidentialboard',
//   },
//   {
//     name: 'Falcuties',
//     href: '/organization/falcuties',
//   },

//   {
//     name: 'Central Units',
//     href: '/organization/centralunits',
//   },
// ];

// export default function NavLinks() {
//   const pathname = usePathname();
//   return (
//     <>
//       {links.map((link) => {
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className={clsx(
//               'hover:bg-sky-100 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//               {
//                 'bg-sky-100 text-blue-600': pathname === link.href,
//               },
//             )}
//           >
//             <p className="hidden md:block">{link.name}</p>
//           </Link>
//         );
//       })}
//     </>
//   );
// }
