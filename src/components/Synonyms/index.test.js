import React from 'react';
import { shallow } from 'enzyme';
import Synonyms from '.';

describe('Synonyms', () => {
  it('renders without crashing', () => {
    shallow(<Synonyms />);
  });

  it('renders the word', () => {
    const wrapper = shallow(<Synonyms word="abrakadabra" synonyms={[]} />);
    expect(wrapper.find('.header').text()).toContain('abrakadabra');
  });
});
