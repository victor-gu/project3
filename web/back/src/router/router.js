import React from 'react'
import {Route} from 'react-router'

import HomeComponent from '../components/home/homeComponent'
import ProductComponent from '../components/product/productComponent'
import LoginComponent from '../components/login/loginComponent'
import StudentComponent from '../components/student/studentComponent'
import AdminsComponent from '../components/admins/adminsComponent'
import OrderComponent from '../components/order/orderComponent'
import CarComponent from '../components/car/carComponent'

export default (
	<Route>
		<Route path="/" component={HomeComponent}>
			<Route path="/product" component = {ProductComponent}/>
			<Route path="/student" component = {StudentComponent}/>
			<Route path="/admin" component = {AdminsComponent}/>
			<Route path="/order" component = {OrderComponent}/>
			<Route path="/car" component = {CarComponent}/>

		</Route>
		<Route path="/login" component={LoginComponent}/>
	</Route>
)