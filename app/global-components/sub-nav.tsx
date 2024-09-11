'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { subNavLinks } from '../lib/data';

export default function SubNav() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="mb-2 flex items-center justify-end bg-vgu-orange px-4 py-1">
      <div className="pr-4">
        <ul className="hidden text-white md:flex">
          {subNavLinks.map(({ name, path }) => (
            <Link href={path} key={name}>
              <li className="nav-links link-underline align-items-middle capitalizetext-white flex cursor-pointer px-4 font-medium duration-200 hover:scale-105">
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="pr-4">
        <form className="align-center flex" onSubmit={handleSearch}>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-vgu-darkblue focus:border-vgu-darkblue focus:ring-blue-500"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
        </form>
      </div>

      <div className="pr-4">
        <form className="mx-auto max-w-sm">
          <select
            id="countries"
            className="w-150 rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-vgu-darkblue focus:ring-blue-500"
          >
            <option value="EN">English</option>
            <option value="VIE">Vietnamese</option>
            <option value="DE">German</option>
          </select>
        </form>
      </div>
    </div>
  );
}