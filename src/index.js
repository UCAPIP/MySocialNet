import store from './Redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let reRenderTree = (state) => {
root.render(
  <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)} />
  </React.StrictMode>
);
}

reRenderTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  reRenderTree(state);
});