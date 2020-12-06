import React from 'react'

import './App.css'

import NoteList from './components/NoteList'
import NoteArea from './components/NoteArea'

function App() {
  return (
    <div className="App">
      <NoteList />
      <NoteArea />
    </div>
  )
}


export default App
