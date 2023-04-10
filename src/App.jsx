import { useState } from 'react'
import './App.css'
import SankeyDiagram from './components/SankeyDiagram'
import CircularSankey from './components/CircularSankey'

function App() {
  const [isCircular, setIsCircular] = useState(true)


  return (
    <div>
      <div className='button-container'>
        <button onClick={() => setIsCircular(false)}>Sankey Diagram</button>
        <button onClick={() => setIsCircular(true)}>Sankey Circular Diagram</button>
      </div>
      {isCircular ? <CircularSankey /> : <SankeyDiagram />}
    </div>
  )
}

export default App