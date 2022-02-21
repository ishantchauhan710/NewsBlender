import React from 'react'

const SearchNewsComponent = (props) => {
  return (
    <div className='search-container'>
        <input id="searchNewsInput" type="text" className='input-search-news' placeholder='Search' />
        <button onClick={() => props.searchFunction(document.getElementById('searchNewsInput').value)} className='button-search-news'><i class="material-icons">search</i></button>
    </div>
  )
}

export default SearchNewsComponent