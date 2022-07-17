import React from 'react'



const Card = ({ name, email, id }) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?200x200`} alt="photo" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card