import React from 'react'

export function Post({ title, description}) {
  return (
    <>
        <h2>{title}</h2>
        <p>{description}</p>
        <hr/>
    </>
  )
}
