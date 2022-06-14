import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data';

function App() {
  console.log(Data);
  const cards = Data.map(singleData => (
    <Card 
      key = {singleData.id}
      coverImg = {`./images/${singleData.coverImg}`}
      rating = {singleData.stats.rating}
      location = {singleData.location}
      price = {singleData.price}
      reviewCount = {singleData.stats.reviewCount}
      title = {singleData.title}
    />
  ))
  return (
    <div className="App">
      <Navbar/>
      {/* <Hero/> */}
      <section className="cards--list">
        {cards}
      </section>
     
    </div>
  );
}

export default App;
