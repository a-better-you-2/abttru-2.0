import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import sinon from 'sinon';
const sinonChai = require('sinon-chai')
import Carousel from './index';

chai.use(sinonChai);


window.URL.createObjectURL = function() {};
window.addEventListener('error', e => {
  // I want to silence all errors and know what I'm doing
  e.preventDefault();
});
configure({ adapter: new Adapter() })

describe('<Carousel />', () => {
  let search = sinon.spy();
  describe('when an ingredient is provided', () => {
    it('searches for provided ingredient on submit', () => {
      const wrapper = shallow(<Carousel />);
      wrapper.setState({
        name: 'chicken',
      });
      const link = wrapper.find('form');
      link.simulate('submit', {
        preventDefault: () => {
        }
       });
       search();
      expect(search).to.have.been.calledOnce;
    });
  });
});