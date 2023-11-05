import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Canvas from './Components/TestComponents/Canvas'
import KonvaCanvas from './Components/TestComponents/KonvaCanvas'
import FabricCanvas from './Components/TestComponents/FabricCanvas'
import Toolbar from './Components/TestApp/Toolbar'

function App() {

  return (
    <div>
      {/* <Canvas /> */}
      <KonvaCanvas />
      {/* <FabricCanvas /> */}
      {/* <Toolbar /> */}
    </div>
  )
}

export default App
