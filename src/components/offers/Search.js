import React from 'react'
import data from '../data/data'

function Search(){




return(
    <div>
        <input
        type="Text"
        placeholder="find your offer"
        value={searchItem}
        onChange={handleChange}/>
        
        
        
    </div>
)



}
export default Search;