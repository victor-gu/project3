import React,{Component} from 'react'

import DatagridComponent from '../datagrid/datagridComponent'
import PageComponent from '../page/pageComponent'
import http from '../../utils/httpclient'


export default class OrderComponent extends Component{
	state = {
		config: {
			url: 'selectCart',
			name: 'order',
			data: {page: 1, limit:6}
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