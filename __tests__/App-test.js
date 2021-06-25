import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IC2 from '../Components/IC2';
import {expect} from 'chai';

import App from '../App';

Enzyme.configure({adapter: new Adapter()});

describe('<App>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('Number of text components', () => {
    expect(wrapper.find(IC2)).to.have.lengthOf(1);
  });
});
