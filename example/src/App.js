import React from 'react'
import { useMyHook } from 'simple-react-search'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App