import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './Input';

configure({adapter: new Adapter()});
describe('Render Input', () => {
    let props;
    let wrapper;
    props = {
        type: 'text',
        value: 'm',
        placeholder: 'Search by Name'
    };
    wrapper = shallow(<Input {...props} />)
    it("Renders the input", () => {
        expect(wrapper.find('input').prop('type')).toEqual('text');
        expect(wrapper.find('input').prop('value')).toEqual('m');
        expect(wrapper.find('input').prop('placeholder')).toEqual('Search by Name');
    });
    it("Not render the text input", () => {
        expect(wrapper.find('input').prop('type')).not.toEqual('number');
    }); 
});