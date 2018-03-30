import React,{Component} from 'react'
import {connect} from 'react-redux'

import DatagridComponent from '../datagrid/datagridComponent'
import PageComponent from '../page/pageComponent'
import http from '../../utils/httpclient'


class CarComponent extends Component{
	state = {
		config: {
			url: 'selectCart',
			name: 'car',
			data: {page: 1, limit:6}
		}
	}
	// componentWillMount(){
	// 	http.get('backproducts').then((res)=>{
	// 		// console.log(res);
	// 		if(res.error && !res.status){
	// 			// console.log(this)
	// 			this.props.router.push('/login')
	// 		}
	// 	})
	// }
	componentDidUpdate(){
		// console.log(this);
		if(this.props.error){
			console.log(this.props.error)
			return this.props.router.push('/login')
		}
	}


	render(){
		return (
			<div>
				<DatagridComponent config = {this.state.config}/>
				<PageComponent config={this.state.config}/>
			</div>
		)
	}
}
const mapCar = (state)=>{
	return {
		error: state.datagrid.error
	}
}


export default connect(mapCar)(CarComponent)