// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="min-h-full">
      <div className="py-10">
        <h1 className="text-3xl text-center font-bold underline">
          Hello world!
        </h1>

        <div className="flex justify-center space-x-10 my-6">
          <div className="flex flex-col items-center gap-2">
            <img
              src={reactLogo}
              className="h-20"
              alt="react logo"
            />
            <a
              className="text-lg"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src={viteLogo}
              className="h-20"
              alt="vite logo"
            />
            <a
              className="text-lg"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </div>
        </div>

        <p className="text-center mt-6">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    </div>
  );
}

export default App
