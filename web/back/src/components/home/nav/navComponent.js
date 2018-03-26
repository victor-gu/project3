import React,{Component} from 'react'
import {Link} from 'react-router'

import './nav.scss'

export default class NavComponent extends Component{
	render(){
		return (
			<div className="con-nav-box">
				<ul className="">
		            <li className="">
		                <Link to='/product' className="tza">product</Link>
		            </li>
		            <li className="">
		           		<Link to='/student' className="tza">student</Link>
		            </li>
		            <li className="">
		                <Link to='/order' className="tza">order</Link>
		            </li>
		            <li className="">
		            	<Link to='/admin' className="tza">admin</Link>
		            </li>
		        </ul> 
			</div>
		)
	}
}