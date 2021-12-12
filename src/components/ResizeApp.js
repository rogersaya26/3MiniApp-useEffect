import React, { useState, useEffect } from 'react'

const ResizeApp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const isMobile = windowWidth < 768

useEffect(() => {
  const handlerResize = () => setWindowWidth(window.innerWidth)
  window.addEventListener('resize', handlerResize)

return () => {
window.removeEventListener('resize', handlerResize)
}

}, [])

  return (
    <div>
      <h1>ResizeApp</h1>
    {
      isMobile &&
      <h2>Show only mobile device</h2>
    }

      <h1>{windowWidth}</h1>
    </div>
  )
}

export default ResizeApp
