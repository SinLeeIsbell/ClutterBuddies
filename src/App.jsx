import { useState } from 'react'
import './App.css'
import { appInit } from './firebaseConfig'
import AddActivityForm from './components/AddActivityForm'
import ActivitiesList from './components/ActivitiesList'
import CompletedList from './components/CompletedList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="appContainer">
      <h1>Activities List</h1>
      <AddActivityForm />
      <ActivitiesList />
      <CompletedList />
      </div>
  )
}

export default App
