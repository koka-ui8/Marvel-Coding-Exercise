import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cards from './Cards';
import Card from './card';

configure({adapter: new Adapter()});
describe('List of Cards', () => {
  let props;
  let wrapper;
  let useEffect;
  const marvelCharactersMock = [{id: 1, name: 'abc', thumbnail: {path: '/abc', extension: 'jpg'}}];

  let mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  
  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    
    props = {
      marvelCharacters: marvelCharactersMock,
    };
    
    mockUseEffect();
    wrapper = mount(<Cards {...props}/>);
  })
  it("renders the Cards", () => {
    expect(wrapper.find(Card)).toHaveLength(1);

    const firstCard = wrapper.find(Card).first();
    expect(firstCard.prop("characterName")).toEqual(marvelCharactersMock[0].name);
    expect(firstCard.prop("imageSrc")).toEqual(marvelCharactersMock[0].thumbnail.path+ '.' + marvelCharactersMock[0].thumbnail.extension );
  });
  it("renders the Cards with wrong data", () => {
    expect(wrapper.find(Card)).toHaveLength(1);

    const firstCard = wrapper.find(Card).first();
    expect(firstCard.prop("characterName")).not.toEqual(123);
    expect(firstCard.prop("imageSrc")).not.toEqual(marvelCharactersMock[0].thumbnail.path + marvelCharactersMock[0].thumbnail.extension );
  });
  describe("Search by character name", () => {
    props = {
        marvelCharacters: marvelCharactersMock,
      };
     
    wrapper = mount(<Cards {...props}/>);
    it("sets the searchString and filters the cards", () => {

      expect(wrapper.find("Card")).toHaveLength(1);

      const firstCard = wrapper.find("Card").first();
      expect(firstCard.prop("characterName").includes('a')).toEqual(marvelCharactersMock[0].name.includes('a'));
    });
    it("sets the searchString and filters the cards", () => {

      expect(wrapper.find("Card")).toHaveLength(1);

      const firstCard = wrapper.find("Card").first();
      expect(!firstCard.prop("characterName").includes('a')).toEqual(false);
      expect(firstCard.prop("imageSrc")).toEqual(marvelCharactersMock[0].thumbnail.path+ '.' + marvelCharactersMock[0].thumbnail.extension );
    });
  });
});
