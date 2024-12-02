import React from 'react';
import Searchbar from '../components/Searchbar';

export default async function Home({searchParams}:{searchParams:{query?:string}}) {
  const query = (await searchParams).query||'';
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
        <ul className="card_grid mt-7"></ul>

      </section>
    </>
  );
}
