import React from 'react';
import {startupsQuery} from '@/sanity/lib/queries'
import Searchbar from '../components/Searchbar';
import { client } from '@/sanity/client';
import StartupCard ,{ StartupTypeCard } from '../components/Startupcard';
export default async function Home({searchParams}:{searchParams:Promise<{query:string}>}) {
  const query = (await searchParams)?.query||'';
  const posts = await client.fetch(startupsQuery)
  console.log(JSON.stringify(posts))
  return (
    <>
      <section className="yellow_container">
        <h1 className="heading">Pitch Your Startup Ideas,<br/>Connect with Like-minded Entrepreneurs</h1>
        <p className="sub-heading !text-red-700">Collaborate, Innovate, and Grow Together in a Thriving Community</p>
        <br/>
      <Searchbar query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups' }
        </p>
        <ul className="card_grid mt-7">
        {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>

      </section>
    </>
  );
}
