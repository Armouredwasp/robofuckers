import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Cardlist from './cardlist.js';
import 'tachyons';
import { robots } from './robots';
import App from './app.js'


ReactDOM.render(
            <div>
                    <App/>
            </div>                
                
                
                
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
