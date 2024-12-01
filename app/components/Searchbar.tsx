import React from 'react'
import Form from 'next/form'
import Searchformreset from './Searchformreset'
const Searchbar = ({query}:{query?:string}) => {
  
  return (
    <>
    <Form action="/" scroll={false} className="search-form" >
    <input
         name="query"
         className="search-input"
         defaultValue={query}
         placeholder="Search Startup"/>
         
         <div className="flex gap-2" >
         {query && query.trim() !== '' && <Searchformreset />}
            <button type="submit" className="search-btn text-white">S</button>
         </div>

    </Form>
    </>
  )
}

export default Searchbar
