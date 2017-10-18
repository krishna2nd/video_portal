import React from 'react';
import List from '../';
import renderer from 'react-test-renderer';

export const list = {
  "status": "success",
  "data": [
      {
          "_id": "59e1e40e100dd646feae337a",
          "name": "[1] Google Cardboard Assembly",
          "description": "Google Cardboard Assembly Step by Step Instructions [HD]",
          "url": "videos/Google_Cardboard_Assembly.mp4",
          "__v": 3,
          "ratings": [
              4,
              5,
              5,
              5,
              3,
              5,
              4,
              5,
              4,
              4,
              4
          ]
      },
      {
          "_id": "59e1e40e100dd646feae337b",
          "name": "[2] How Does AngularJS Work Beginners Angular Tutorial",
          "description": "What you will learn in this course. How to use Angular.js to save time, create better projects and give your users a better experience. We’ll create a full SPA from scratch (client side). How to cloud-enable your SPA so that you can connect it to any kind of backend. Fully commented source code of the course project. Learn how to architecture a SPA: modules, controllers, services Learn how to add URL routes to your client-side SPA. We’ll be using Angular.js version 1.3.2. Access live examples at the end of each coding lesson. Learn how to use other great tools such as Boostrap 3, UnderscoreJS and Google Chrome’s Developer Tools!",
          "url": "videos/How_Does_AngularJS_Work_Beginners_Angular_Tutorial.mp4",
          "__v": 3,
          "ratings": [
              2,
              4,
              2,
              2,
              3,
              1,
              2,
              5,
              4,
              4,
              5
          ]
      },
      {
          "_id": "59e1e40e100dd646feae337c",
          "name": "[3] How does Node.js work",
          "description": "New to Node.js? Check out this video that explains \"How does Node work?\"",
          "url": "videos/How_does_Node.js_work.mp4",
          "__v": 2,
          "ratings": [
              3,
              3,
              3,
              3,
              3,
              3,
              3,
              3,
              5,
              4
          ]
      },
      {
          "_id": "59e1e40e100dd646feae337d",
          "name": "[4] iPhone 7 Trailer 2016",
          "description": "iPhone 7 concept trailer 2016! with Bluetooth AirPods by Beats and ChargingPad, and much more!",
          "url": "videos/iPhone_7_Trailer_2016.mp4",
          "ratings": [
              4,
              3,
              4,
              3,
              4,
              3,
              4,
              3
          ]
      },
      {
          "_id": "59e1e40e100dd646feae337e",
          "name": "[5] What is the MEAN Stack",
          "description": "Do you know what the MEAN stack is? Watch our short intro video and get ready to kick your learning into shape with this full-stack development toolkit. Then head on over and play through our MEAN-related courses now.",
          "url": "videos/What_is_the_MEAN_Stack.mp4",
          "ratings": [
              1,
              5,
              5,
              5,
              3,
              4,
              5,
              5
          ]
      },
      {
          "_id": "59e1e40e100dd646feae337f",
          "name": "[6] Getting Started With ReactJs",
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
      },
      {
          "_id": "59e1e40e100dd646feae3380",
          "name": "[7] Google Cardboard Assembly",
          "description": "Google Cardboard Assembly Step by Step Instructions [HD]",
          "url": "videos/Google_Cardboard_Assembly.mp4",
          "ratings": [
              4,
              5,
              5,
              5,
              3,
              5,
              4,
              5
          ]
      },
      {
          "_id": "59e1e40e100dd646feae3381",
          "name": "[8] How Does AngularJS Work Beginners Angular Tutorial",
          "description": "What you will learn in this course. How to use Angular.js to save time, create better projects and give your users a better experience. We’ll create a full SPA from scratch (client side). How to cloud-enable your SPA so that you can connect it to any kind of backend. Fully commented source code of the course project. Learn how to architecture a SPA: modules, controllers, services Learn how to add URL routes to your client-side SPA. We’ll be using Angular.js version 1.3.2. Access live examples at the end of each coding lesson. Learn how to use other great tools such as Boostrap 3, UnderscoreJS and Google Chrome’s Developer Tools!",
          "url": "videos/How_Does_AngularJS_Work_Beginners_Angular_Tutorial.mp4",
          "ratings": [
              2,
              4,
              2,
              2,
              3,
              1,
              2,
              5
          ]
      },
      {
          "_id": "59e1e40e100dd646feae3382",
          "name": "[9] How does Node.js work",
          "description": "New to Node.js? Check out this video that explains \"How does Node work?\"",
          "url": "videos/How_does_Node.js_work.mp4",
          "ratings": [
              3,
              3,
              3,
              3,
              3,
              3,
              3,
              3
          ]
      },
      {
          "_id": "59e1e40e100dd646feae3383",
          "name": "[10] iPhone 7 Trailer 2016",
          "description": "iPhone 7 concept trailer 2016! with Bluetooth AirPods by Beats and ChargingPad, and much more!",
          "url": "videos/iPhone_7_Trailer_2016.mp4",
          "ratings": [
              4,
              3,
              4,
              3,
              4,
              3,
              4,
              3
          ]
      }
  ]
}
test('components/videos/video/list', () => {
  const component = renderer.create(
    <List
    items={list.data}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});