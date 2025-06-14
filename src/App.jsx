// App.jsx - Component Showcase Ready
import { Welcome } from './components/Welcome'
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen bg-gray-50">
      <Welcome />
       {/* Demo Counter für Testing */}
       <div className="component-showcase max-w-md mx-auto mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🧮 Interactive Counter
          </h2>
          <div className="text-center">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Count: {count}
            </button>
            <p className="text-gray-600 mt-4">
              Click to test live updates in Canvas! 🎨
            </p>
          </div>
        </div>
    </div>
  )
}

export default App