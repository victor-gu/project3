import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router,hashHistory} from 'react-router'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import routes from './router/router'
import store from './redux/configStore'
import './common/common.css'


ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes}/>
	</Provider>,
	document.getElementById('app')
)