import React from 'react';
import { shallow } from 'enzyme';
import BackButton from '../BackButton';

const testProps = {
  navigation: {
    goBack: jest.fn(),
  },
};

describe('BackButton', () => {
  it('should be called when it is clicked ', () => {
    const component = shallow(<BackButton navigation={testProps.navigation} />);
    component.find('Icon').at(0).simulate('press');
    expect(component.find('Icon').length).toBe(1);
    expect(testProps.navigation.goBack).toHaveBeenCalledTimes(1);
  });
});
