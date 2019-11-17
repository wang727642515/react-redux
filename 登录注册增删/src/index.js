import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import "./mock/mock";
import "./assets/index.scss";
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
