import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('when loading the app', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    shallow(<App />);
  });

});
