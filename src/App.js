import React from 'react';
import { Route } from 'react-router-dom'
import Offers from './components/offers/Offers'
import data from './components/data/data'
import './App.css';

function App() {
  return (
    <div className="App">
     <Route exact path='/' render={() => (
      <div>
        {data.data.map(offer => (
          <Offers
            key={offer.id}
            name={offer.name}
            price={offer.price}
            img={offer.img}
            id={offer.id}
            discount={offer.discount}
          />
        ))}
      </div>
    )}
    />
    </div>
  );
}

export default App;
