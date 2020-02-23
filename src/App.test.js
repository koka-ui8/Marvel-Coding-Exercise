import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Header from './HeaderContainer';
import Cards from './Cards';

configure({adapter: new Adapter()});

const wrapper = shallow(<App />);
describe('renders Header and Cards', () => {
  
  it('should render header', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  })

  it('should render Cards', () => {
    expect(wrapper.find(Cards)).toHaveLength(1);
  })

});
