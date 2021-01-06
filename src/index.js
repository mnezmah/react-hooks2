import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


const App = (props) => {
  //state was always an object. Now it can be anything
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('')

  return (
    <div>
      <p>Current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset</button>
      <input type="text" vlaue={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

App.defaultProps = {
  count:0
}

ReactDOM.render(
  <React.StrictMode>
    <App count={2} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
