import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent'
import ProductComponent from '../components/product/productComponent'
import LoginComponent from '../components/login/loginComponent'

export default (
	<Route>
		<Route path="/" component={HomeComponent}>
			<Route path="/product" component={ProductComponent}/>
		</Route>
		<Route path="/login" component={LoginComponent}/>
	</Route>
)