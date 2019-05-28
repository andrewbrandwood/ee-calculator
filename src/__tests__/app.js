import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/header/header';

describe('when loading the app', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders header', () => {
    shallow(<Header />);
  });

});
