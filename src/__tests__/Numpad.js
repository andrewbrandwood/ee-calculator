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
  
});
