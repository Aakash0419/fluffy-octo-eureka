import React from 'react';
import Searchbar from '../components/Searchbar';

export default function Home({searchparams}:{searchparams:{query?:string}}) {
  const query = searchparams?.query||'';
  return (
    <>
      <section className="yellow_container">
        <h1 className="heading">Pitch Your Startup Ideas,<br/>Connect with Like-minded Entrepreneurs</h1>
        <p className="sub-heading !text-red-700">Collaborate, Innovate, and Grow Together in a Thriving Community</p>
        <br/>
      <Searchbar query={query}/>
      </section>

    </>
  );
}
