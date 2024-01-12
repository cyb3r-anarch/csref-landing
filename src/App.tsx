import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainText from './components/MainText'
import Card from './components/Card'

function App() {

  const [theme, setTheme] = useState("student")

  const themeChange = () => {
    setTheme(theme === 'student' ? 'engineer' : 'student');
  }

  return (
    <>
    <Navbar onThemeChange={themeChange}/>
    {theme=="student" && <h1>Student</h1>}
    {theme=="engineer" && <h1>Engineer</h1>}
    <MainText />
    <Card />
    </>
  )
}

export default App