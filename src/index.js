import state, { subscribe } from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let reRenderTree = (state) => {
root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>
  </React.StrictMode>
);
}

reRenderTree(state);

subscribe(reRenderTree);