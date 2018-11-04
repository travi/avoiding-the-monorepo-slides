import React from 'react';
import {mount} from 'enzyme';
import AvoidingTheMonorepo from '../src/presentation';

suite('smoke tests for the react-in-isolation presentation', () => {
  test('that the presentation renders', () => {
    const wrapper = mount(<AvoidingTheMonorepo />);

    wrapper.unmount();
  });
});
