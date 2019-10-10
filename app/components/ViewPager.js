import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import './styles.css'

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

export default class Viewpager extends React.Component {


  render(){

  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
    const bind = useDrag(({ down, delta }) => {
      set({ xy: down ? delta : [0, 0] })
    })

    return(
      <b>Hi</b>
      )
  }




}







