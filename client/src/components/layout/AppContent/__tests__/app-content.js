import React from 'react';
import AppContent from '../';
import renderer from 'react-test-renderer';

test('components/AppContent', () => {
  const component = renderer.create(
    <AppContent >
      <p>Content..</p>
    </AppContent>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});