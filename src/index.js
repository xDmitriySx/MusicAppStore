import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './music.css';
import { Provider } from 'react-redux';
import MainMusicStoreContainer from './containers/MainMusicStoreContainer'
import createStore from './store';
const store = createStore();


ReactDOM.render(
<Provider store = {store}>
    <MainMusicStoreContainer />
</Provider>, document.getElementById('root'));