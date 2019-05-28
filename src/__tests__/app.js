import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/header/header';
import Display from '../components/display/display';
import Numpad from '../components/numpad/numpad';

describe('when loading the app', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders header', () => {
    shallow(<Header />);
  });

  it('renders the calculator display', () => {
    shallow(<Display />);
  });

  it('renders the number pad', () => {
    shallow(<Numpad />);
  })

  it('should have a state object', () => {
    expect(wrapper.state).toHaveLength(1);
  });

});
