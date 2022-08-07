import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LeftSide from './LeftSide';
import { Provider } from 'react-redux';
import store from "./store/store";
import RightSide from './RightSide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div className='content'>
      <LeftSide />
      <RightSide />
    </div>
  </Provider>
);
