import React from 'react';
import { shallow } from 'enzyme';
import ControlPanel from '.';

describe('ControlPanel', () => {
  it('renders without crashing', () => {
    shallow(<ControlPanel />);
  });
});
