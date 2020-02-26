import React, {useState} from 'react';
import Card from './card';
import Pagination from './Pagination';
import SearchInput from './Input';

function Cards(props) {
  const [searchString, setSearchString] = useState('');
  /* onChange function takes the input value, update new search string and
  pass it to parent component.
  */
  const onChange = (value) => {
  setSearchString(value);
  props.onSearch(value);
  }

  // Rendering the cards with character image and name from the list of characters.
  return (
  <div className="content">
    <div className="search">
      <SearchInput 
        type="text"
        placeholder="Search by Name"
        value={searchString}
        onChange={onChange} />
      <span>{props.marvelCharacters.length} results</span>
    </div>
    <div className="row">
      {props.marvelCharacters &&
      <Pagination defaultItemCountOption={7}>
        {props.marvelCharacters.map((character) => {
          const imgSrc = `${character.thumbnail.path}.${character.thumbnail.extension}`;
          return <Card key={character.id} characterName={character.name} imageSrc={imgSrc} />
        })
        }
        </Pagination>
      }
      
    </div>
  </div>
  );
}

export default Cards;