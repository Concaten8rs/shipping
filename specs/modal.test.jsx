import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../client/src/components/ModalOne.jsx';


describe('<Modal />', () => {
  it('Modal functional and correctly rendering', () => {
   const wrapper = shallow(<Modal />);
   expect(wrapper).toMatchSnapshot();
  });


  it('Displays current product', () => {
    const wrapper = shallow(<Modal/>);
    expect()
  })
});
