import React from 'react';
import { shallow } from 'enzyme';
import Zipcode from '../client/src/components/Zipcode.jsx'


describe('<Zipcode />', () => {
  it('Renders recommended Products in Carousel', () => {
    const wrapper = shallow(<Zipcode recommendedProducts={recommendedProducts} />);

    //interface:
   //input - array of recommended products
   //output - some jsx containing Recoms
    expect(wrapper.find().length).toEqual();
  });
});



