import React from 'react';
import FieldError from '../';
import renderer from 'react-test-renderer';

test('components/AppContent', () => {
  const component = renderer.create(
    <FieldError error="Some errorr..." ></FieldError>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});