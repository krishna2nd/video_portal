import React from 'react';
import StarRating from '../';
import renderer from 'react-test-renderer';
const item = {
  "status": "success",
  "data": {
      "_id": "59e1e40e100dd646feae3379",
      "name": "[0] Getting Started With ReactJs",
      "description": "React.js is a JavaScript library for building user interfaces. - Just the UI: Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, its easy to try it out on a small feature in an existing project. - Virtual DOM: React uses a virtual DOM diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required. - Data flow: React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.",
      "url": "videos/Getting_Started_With_React.js.mp4",
      "ratings": [
          1,
          5,
          5,
          4,
          3,
          4,
          2,
          5
      ]
  }
}

test('components/videos/video/rating', () => {
  const component = renderer.create(
    <StarRating
      key={item.data._id}
      id={item.data._id}
      ratings={item.data.ratings}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});