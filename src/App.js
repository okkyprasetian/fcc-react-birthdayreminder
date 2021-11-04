import Header from './components/Header'
import Lists from './components/Lists'
import Footer from './components/Footer'
import './App.css'
import { useState } from 'react'

function App() {

  const [lists, setLists] = useState([
    {
      id: 1,
      name: "Anthonio Baroteli",
      age: 63
    },
    {
      id: 2,
      name: "Nannie Jennie",
      age: 22
    },
    {
      id: 3,
      name: "Maradona",
      age: 11
    },
    {
      id: 4,
      name: "Matthew Anderson",
      age: 25
    },
    {
      id: 5,
      name: "Olivia Ceres",
      age: 20
    }
  ])

  return (
    <div className="App">
      <div id="main">
        <Header />
        <Lists />
        <Footer />
      </div>
    </div>
  );
}

export default App;
