import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular.js'
import FanceyScroller from './components/FancyScroller.js'
import Viewpager from './components/Viewpager.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Popular/>
        <FanceyScroller/>
        <Viewpager/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)