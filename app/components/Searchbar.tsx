import React from 'react'
import Form from 'next/form'
import Searchformreset from './Searchformreset'
const Searchbar = () => {
    
    const query = 'Test'
  return (
    <>
    <Form action="/" scroll={false} className="search-form" >
    <input
         name="query"
         className="search-input"
         defaultValue=""
         placeholder="Search Startup"/>
         <div className="flex gap-2" >
            {query &&(
                <Searchformreset/>
            )}
         </div>

    </Form>
    </>
  )
}

export default Searchbar
