'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  start_time: string;
  end_time: string;
  image: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  image: string; // Added image field to match the event structure
}

interface SearchResult {
  events: Event[];
  posts: Post[];
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<SearchResult>({ events: [], posts: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        setIsLoading(true);
        try {
          const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
          if (response.ok) {
            const data = await response.json();
            setResults(data);
          } else {
            console.error('Search failed');
          }
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Events</h2>
          {results.events.length > 0 ? (
            <div
              id="Upcoming-events"
              className="mx-auto mb-12 w-8/12 rounded border p-10 drop-shadow-lg"
            >
              <h1 className="mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-darkblue duration-200 hover:text-vgu-orange md:text-3xl lg:text-4xl">
                Upcoming Events
              </h1>

              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.events.map((event) => (
                  <div key={event.id} className="max-w-xs overflow-hidden rounded shadow-lg duration-200 hover:scale-105">
                    <div className="mb-2 text-2xl font-bold px-6 pt-4">{event.title}</div>
                    <div className="relative h-48 w-full">
                      <Image
                        src={`/girl1.jpeg`}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                        onError={(e) => {
                          e.currentTarget.src = '/girl2.jpeg';
                        }}
                      />
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-base text-gray-700">
                        Start Time: {event.start_time}
                      </p>
                      <p className="text-base text-gray-700">
                        End Time: {event.end_time}
                      </p>
                    </div>
                    <div className="p-6">
                      <span className="inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue">
                        Learn more
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No events found.</p>
          )}

          <h2 className="text-xl font-semibold mt-6 mb-2">Posts</h2>
          {results.posts.length > 0 ? (
            <div
              id="Recent-posts"
              className="mx-auto mb-12 w-8/12 rounded border p-10 drop-shadow-lg"
            >
              <h1 className="mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-darkblue duration-200 hover:text-vgu-orange md:text-3xl lg:text-4xl">
                Recent Posts
              </h1>

              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.posts.map((post) => (
                  <div key={post.id} className="max-w-xs overflow-hidden rounded shadow-lg duration-200 hover:scale-105">
                    <div className="mb-2 text-2xl font-bold px-6 pt-4">{post.title}</div>
                    <div className="relative h-48 w-full">
                      <Image
                        src={`/girl1.jpeg`}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        onError={(e) => {
                          e.currentTarget.src = '/girl2.jpeg';
                        }}
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div 
                        className="post-content text-base text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content.substring(0, 100) + '...' }}
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue">
                        Read more
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      )}
    </div>
  );
}