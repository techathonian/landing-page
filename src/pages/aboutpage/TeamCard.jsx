import React from 'react'

export const TeamCard = ({track, name,  profession, bgImg}) => {
  return (
    <div style={{backgroundImage:`url(${bgImg})`}}>
        <h2>{track}</h2>
        <p>{name}</p>
        <p>{profession}</p>


    </div>
  )
}
