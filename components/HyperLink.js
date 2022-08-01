import React from 'react'

function HyperLink({text="Hyperlink", url=""}) {
  return (

    <a href={url}>{text}</a>
  )
}

export default HyperLink