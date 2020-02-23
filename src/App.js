import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Header from './HeaderContainer';
import Cards from './Cards';

function App() {
  const [marvelCharacters, setMarvelCharacters] = useState([]);
  // const [searchString, setSearchString] = useState('');
  useEffect(() => {
    const url = "https://gateway.marvel.com/v1/public/characters?ts=" + process.env.REACT_APP_TS + "&apikey=" + process.env.REACT_APP_APIKEY + "&hash=" + process.env.REACT_APP_HASH;
    // const url ="/v1/public/characters";
    axios.get(url).then(res => {
      setMarvelCharacters(res.data.data.results || []);
    })
  }, [])
  return (
    <div className="App">
      <Header />
      <Cards marvelCharacters={marvelCharacters} />
    </div>
  );
}

export default App;
