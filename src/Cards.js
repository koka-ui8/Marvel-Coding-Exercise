import React, {useState, useEffect} from 'react';
import Card from './card';


function Cards(props) {
    const [searchString, setSearchString] = useState('');
    const [sortedResults, setSortedResults] = useState([]);
    useEffect(() => {
        if(searchString) {
            const filteredResults = props.marvelCharacters.filter(item => {
                return item.name.toLowerCase().includes(searchString.toLowerCase());
            })
            setSortedResults(filteredResults);
        } else {
            setSortedResults(props.marvelCharacters);
        }
    }, [props.marvelCharacters, searchString])
    
    return (
    <div className="content">
        <div className="search">
          <input type="text" placeholder="Search Characters by Name" value={searchString} onChange={e=> setSearchString(e.target.value)}/>
          <span>{sortedResults.length} results</span>
        </div>
        <div className="row">
          {sortedResults && sortedResults.map((character) => {
              const imgSrc = `${character.thumbnail.path}.${character.thumbnail.extension}`;
              return <Card key={character.id} characterName={character.name} imageSrc={imgSrc} />
            })
          }
        </div>
    </div>
    );
}

export default Cards;