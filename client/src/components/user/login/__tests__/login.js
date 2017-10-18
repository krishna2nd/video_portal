import React from 'react';
import Login from '../';
import renderer from 'react-test-renderer';

test('Login component snapshot check', () => {
  const component = renderer.create(
    <Login></Login>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});