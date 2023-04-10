import { useState } from 'react'
import './App.css'
import SankeyDiagram from './components/SankeyDiagram'
import CircularSankey from './components/CircularSankey'

function App() {
  const [isCircular, setIsCircular] = useState(false)


  return (
    <div>
      <div className='button-container'>
        <button onClick={() => setIsCircular(false)} style={!isCircular ? {backgroundColor: '#646cff', color:  'white'} : {}}>Sankey Diagram</button>
        <button onClick={() => setIsCircular(true)} style={isCircular ? {backgroundColor: '#646cff', color:  'white'} : {}}>Sankey Circular Diagram</button>
      </div>
      {isCircular ? <CircularSankey /> : <SankeyDiagram />}
    </div>
  )
}

export default App