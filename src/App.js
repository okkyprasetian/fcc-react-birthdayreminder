import Header from './components/Header'
import Lists from './components/Lists'
import Footer from './components/Footer'
import './App.css';

function App() {
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
