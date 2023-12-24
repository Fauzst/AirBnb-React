import './App.css'
import Hero from './hero'
import Card from './Card'


function Navbar(){
  return (
    <div className='nav'>
      <img src="../images/Airbnb-logo.png" className='logo'/>
    </div>
  )
}

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className='scroll'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </>
  )
}

export default App
