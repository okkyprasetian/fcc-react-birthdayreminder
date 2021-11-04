import { useState } from 'react'
import Header from './components/Header'
import Lists from './components/Lists'
import Footer from './components/Footer'
import anthonio from './image/anthonio.jpg'
import jennie from './image/jennie.jpg'
import maradona from './image/maradona.jpg'
import matthew from './image/matthew.jpg'
import olivia from './image/olivia.jpg'
import './App.css'

function App() {

  // state
  const [lists, setLists] = useState([
    {
      id: 1,
      name: "Anthonio Baroteli",
      age: 63,
      img: anthonio
    },
    {
      id: 2,
      name: "Nannie Jennie",
      age: 22,
      img: jennie
    },
    {
      id: 3,
      name: "Maradona",
      age: 11,
      img: maradona
    },
    {
      id: 4,
      name: "Matthew Anderson",
      age: 25,
      img: matthew
    },
    {
      id: 5,
      name: "Olivia Ceres",
      age: 20,
      img: olivia
    }
  ])

  // set state
  const handleClearLists = () => {
    setLists([])
  }

  return (
    <div className="app">
      <div id="main">
        <Header length={lists.length} />
        <Lists lists={lists} />
        <Footer onClearLists={handleClearLists} />
      </div>
    </div>
  );
}

export default App;
