import React from 'react';
import { shallow } from 'enzyme';
import { FormattedText } from '.';

const mockStoreProps = {
  parts: [],
  partIsWord: [],
};

describe('FormattedText', () => {
  it('renders without crashing', () => {
    shallow(<FormattedText {...mockStoreProps} />);
  });
});
