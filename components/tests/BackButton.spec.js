import React from 'react';
import { shallow } from 'enzyme';
import BackButton from '../BackButton';

const emptyComments = jest.fn();

describe('BackButton', () => {
  it('should call emptyComments when it is clicked ', () => {
    const component = shallow(<BackButton emptyComments={emptyComments} />);
    component.find('Icon').at(0).simulate('press');
    expect(component.find('Icon').length).toBe(1);
    expect(emptyComments).toHaveBeenCalledTimes(1);
  });
});
