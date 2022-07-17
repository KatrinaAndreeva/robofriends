import React from 'react';


const SearchInput = ({ searchfield, searchChange }) => {
  return (
    <div style={{ padding: '5px', textAlign: 'center', marginBottom: '10px', fontSize: '20px' }}>
      <input style={{ backgroundColor: 'lightgray', padding: '5px', borderRadius: '5px' }} type="serach" placeholder="Search robots" onChange={searchChange}></input>
    </div>
  )
}

export default SearchInput