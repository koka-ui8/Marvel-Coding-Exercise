import React, {useEffect, useState} from 'react';
// Importing required modules and components
import axios from 'axios';
import './App.css';
import Header from './HeaderContainer';
import Cards from './Cards';

function App() {
  //marvelCharacters state to store characters data
  const [marvelCharacters, setMarvelCharacters] = useState([]);
  const [searchString, setSearchString] = useState('');

  /*  Used Axios module and called the API to get the list of characters
      UseEffect is called once with [] second parameter.
  */
  useEffect(() => {
    // Used .env to store the environment variables
    let url = process.env.REACT_APP_BASEURL+"?ts=" + process.env.REACT_APP_TS + "&apikey=" + process.env.REACT_APP_APIKEY + "&hash=" + process.env.REACT_APP_HASH;
    if(searchString !== '') {
      url = url + '&nameStartsWith=' + searchString;
    }
    // Axios Get call and set the response to marvelCharacters State using useState() Hook
    axios.get(url).then(res => {
      setMarvelCharacters(res.data.data.results || []);
    })
  }, [searchString])
  
  // Rendered the Header and Cards Components with marvelCharacters as props.
  return (
    <div className="App">
      <Header />
      <Cards marvelCharacters={marvelCharacters} onSearch={value => setSearchString(value)} />
    </div>
  );
}

// Exporting the default App Component.
export default App;
