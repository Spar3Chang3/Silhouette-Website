import './App.css'
import './components/Slideshow.jsx'
import Slideshow from './components/Slideshow.jsx'
import './components/Slideshow.css'
import QuickLinks from './components/QuickLinks.jsx'

function App() {
  return (
      <div className={"homepage"}>
          <Slideshow/>
          <QuickLinks/>
      </div>
  )
}

export default App
