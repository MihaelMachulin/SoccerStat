import React from 'react'

export default function ({flag, name}) {
  // Добавить вывод картинки по условию для World и South America
  return (
      <figure>
        <img src={flag} height={'35px'}/>
        <figcaption>{name}</figcaption>
      </figure>
  )

}