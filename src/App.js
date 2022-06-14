import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data';

function App() {
  const cards = Data.map(singleData => (
    <Card 
      key = {singleData.id}
      item = {singleData}
      lor = "Hellop"
    />
  ))
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className="cards--list">
        {cards}
      </section>
     
    </div>
  );
}

export default App;
