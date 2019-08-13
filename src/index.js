// require('dotenv').config();

import React from 'react'
import {render} from 'react-dom'

require('./database');

import App from './App'

import './index.css'

render(<App/>, document.querySelector('#app'))
