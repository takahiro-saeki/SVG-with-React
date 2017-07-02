import React from 'react';
import xs from 'xstream';

const testArray = [
  {
    title: 'title1'
  },
  {
    title: 'title2'
  },
  {
    title: 'title3'
  }
]

let stream = xs.of(...testArray)
  .map(item => `this is ${item.title}` )
  .take(3);

stream.addListener({
  next: i => console.log(i),
  error: err => console.error(err),
  complete: () => console.log('completed'),
})

const App = () => (
  <div onClick={() => console.log('test')}>
    <div>App</div>
  </div>
)

export default App;
