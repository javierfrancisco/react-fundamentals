import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './styles.css'


export default function Viewpager() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  const bind = useDrag(({ down, delta }) => {
    set({ xy: down ? delta : [-100, 0] })
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    
    <div className='parent'>
      <animated.div
        {...bind()}
        style={{
          transform: xy.interpolate((x, y) => `translate3D(${x}px, ${y}px, 0)`)
        }}
        className='viewpager'
      />
    </div>
  )
}





