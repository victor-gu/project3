import React,{Component} from 'react'
import {connect} from 'react-redux'
import './home.scss'

import HeaderComponent from './header/headerComponent'
import NavComponent from './nav/navComponent'
import AdminComponent from './admin/adminComponent'
import http from '../../utils/httpclient'

class HomeComponent extends Component{
	
	componentWillMount(){
		http.get('backproducts').then((res)=>{
			// console.log(res);
			if(res.error && !res.status){
				// console.log(this)
				this.props.router.push('/login')
			}
		})
	}

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

const mapPro = (state)=>{
	// console.log(state)
	return {
		proData: state.datagrid,
		txt: state.dictionary.txt,
		error: state.datagrid.error
	}
}
export default connect(mapPro)(HomeComponent)