import './App.css'
import Hero from './hero'
import Card from './Card'
import data from './data'

function Navbar(){
  return (
    <div className='nav'>
      <img src="../images/Airbnb-logo.png" className='logo'/>
    </div>
  )
}

function App() {
  let cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

 console.log(cards)
  return (
    <>
      <Navbar />
      <Hero />
      <section className='scroll'>
        {cards}
      

      </section>
    </>
  )
}

export default App
