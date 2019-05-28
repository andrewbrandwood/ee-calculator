import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Button from '../components/button/button';

describe('when loading the app', () => {
  const wrapper = mount(<App />);
  const componentInstance = wrapper.instance();

  it('should render 17 <Button /> components', () =>{
    expect(wrapper.find(Button)).toHaveLength(17);
  });

  describe('and clicking a button', () => {

    it('should set state value to value of button', () =>{
      const button = wrapper.find(Button).first();
      const name = button.props().name;
      button.props().valuate(name);

      expect(wrapper.state().currentValue).toEqual(name);
    });
    
  });

});
