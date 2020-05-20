import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../client/src/components/Carousel.jsx'


describe('<Carousel />', () => {
  it('Renders recommended Products in Carousel', () => {
    const recommendedProducts = [{"_id":"5eace4c4d5c7ef4196fe1a3b","name":"Utilitarian Goretex Pants","price":45.86,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+6.jpg"},{"_id":"5eace4c4d5c7ef4196fe1a3c","name":"Futuristic Goretex Pants","price":48.49,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+8.jpg"},{"_id":"5eace4c4d5c7ef4196fe1a3d","name":"Parachute Heat-tech Pants","price":73.78,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+6.jpg"},{"_id":"5eace4c4d5c7ef4196fe1a3e","name":"Multi-purpose Goretex Pants","price":19.92,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+8.jpg"},{"_id":"5eace4c4d5c7ef4196fe1a3f","name":"Multi-purpose Heat-tech Pants","price":42.22,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+9.jpg"},{"_id":"5eace4c4d5c7ef4196fe1a40","name":"Futuristic Summer Pants","price":51.76,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+4.jpg"},{"_id":"5eace4c4d5c7ef4196fe1a41","name":"Utility Fire Pants","price":57.18,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+9.jpg"},{"_id":"5eace4c4d5c7ef4196fe1a42","name":"Utilitarian Ripstop Pants","price":21.82,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+6.jpg"},{"_id":"5eace4c4d5c7ef4196fe1a43","name":"Utility Summer Pants","price":17.97,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+6.jpg"},{"_id":"5eace4c4d5c7ef4196fe1a44","name":"Multi-purpose Summer Pants","price":40.64,"recImage":"https://targetrecombucket.s3-us-west-1.amazonaws.com/PANTS+2.jpg"}]
    const wrapper = shallow(<Carousel recommendedProducts={recommendedProducts} />);

    //interface:
   //input - array of recommended products
   //output - some jsx containing Recoms
    expect(wrapper.find(Recoms).length).toEqual(10);
  });
});
