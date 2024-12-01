import React from 'react';
import Searchbar from '../components/Searchbar';

export default function Home() {
  return (
    <>
      <section className="yellow_container">
        <h1 className="heading">Pitch Your Startup Ideas,<br/>Connect with Like-minded Entrepreneurs</h1>
        <p className="sub-heading">Collaborate, Innovate, and Grow Together in a Thriving Community</p>
        <br/>
        <Searchbar/>
      </section>

    </>
  );
}
