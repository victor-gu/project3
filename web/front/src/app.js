import React from 'react'
import ReactDOM from 'react-dom'
import {Router,hashHistory,Link} from 'react-router'

import routes from './router/router'

import './common/common.css'

ReactDOM.render(
   <Router history={hashHistory} routes={routes}/>,
    document.getElementById('app')
)