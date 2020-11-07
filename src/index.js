import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import Message from './Message';
import Welcome from './Welcome';
import Counter from './Counter';
import Hello from './TodoItem';
import FunctionClick from './FunctionClick'
import ClassClick from './ClassClick'
import EventBind from './EventBind'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Welcome name="Bruce" heroName='Acidic'/>
  <Welcome name="Edu" heroName='Xtera'/>
  <Welcome name="Chioma" heroName='Mister'/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  // <Ball/>,
  <div className="myApp">
  <Hello name="Test"/>
  <Message/>
  <Counter/>
  </div>,
  document.getElementById('ball')
);

ReactDOM.render(
  // <Ball/>,
  <div className="myAp">
  <FunctionClick/>
  <ClassClick/>
  <EventBind/>
  </div>,
  document.getElementById('checkbox')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
