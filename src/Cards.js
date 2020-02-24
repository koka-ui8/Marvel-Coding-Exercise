import React, {useState, useEffect} from 'react';
import Card from './card';


function Cards(props) {
    const [searchString, setSearchString] = useState('');
    const [sortedResults, setSortedResults] = useState([]);
    /**  Used this useEffect to set sortedResults when marvelCharacters props are changed,
     * and when there is a change in searchString
    */
    useEffect(() => {
        if(searchString) {
            // Filtering the characters if name includes the search string
            const filteredResults = props.marvelCharacters.filter(item => {
                return item.name.toLowerCase().includes(searchString.toLowerCase());
            })
            setSortedResults(filteredResults);
        } else {
            setSortedResults(props.marvelCharacters);
        }
    }, [props.marvelCharacters, searchString])
    
    // Rendering the cards with character image and name from the list of characters.
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