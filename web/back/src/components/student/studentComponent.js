import React,{Component} from 'react'
import {connect} from 'react-redux'

import DatagridComponent from '../datagrid/datagridComponent'
import PageComponent from '../page/pageComponent'

export default class StudentComponent extends Component{
	state = {
		config: {
			url: 'backUsers',
			name: 'student',
			data: {page:1,limit:6}
		}
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