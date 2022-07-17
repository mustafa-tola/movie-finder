import React from 'react'

export const MoviePoster = ({ movie }) => {
  return (
    <a href={movie[1].imdb} ><div>
      <img src={movie[1].image} width={200} height={200} />
      <h4>{movie[0]}</h4>
      <p>{movie[1].desc}</p>
    </div></a>
  )
}
