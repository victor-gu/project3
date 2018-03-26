import React,{Component} from 'react'
import './home.scss'

import HeaderComponent from './header/headerComponent'
import NavComponent from './nav/navComponent'
import AdminComponent from './admin/adminComponent'

export default class HomeComponent extends Component{
	render(){
		return (
			<div>
				<div>
					<HeaderComponent/>
				</div>
				<div className="body">
					<div className="nav">
						<NavComponent/>
					</div>
					<div className="containers">
						{this.props.children || <AdminComponent/>}
					</div>	
					<div className="footer"></div>
				</div>
				
				
			</div>
		)
	}
}