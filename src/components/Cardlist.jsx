import React from 'react'
import Card from './Card'
import '../../src/index.css'



const Cardlist = ({ robots }) => {
  const cardsArray = robots.map((robot, i) => {
    return <Card
      key={i}
      className="card"
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email} />
  })

  return (
    <div className='df'>
      {cardsArray}
    </div>
  )
}

export default Cardlist