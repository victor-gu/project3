import React,{Component} from 'react'
import {connect} from 'react-redux'

import DatagridComponent from '../datagrid/datagridComponent'
import PageComponent from '../page/pageComponent'
import http from '../../utils/httpclient'

export default class StudentComponent extends Component{
	state = {
		config: {
			url: 'backUsers',
			name: 'student',
			data: {page:1,limit:6}
		}
	}
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
				<DatagridComponent config={this.state.config}/>
				<PageComponent config={this.state.config}/>
			</div>
		)
	}
} 