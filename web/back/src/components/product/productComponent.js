import React,{Component} from 'react'
import {connect} from 'react-redux'
import './product.scss'

import DatagridComponent from '../datagrid/datagridComponent'
import PageComponent from '../page/pageComponent'
import * as action from '../datagrid/datagridaction'

class ProductComponent extends Component{
	state = {
		config: {
			url:'products',
			name:"product",
			data:{page:1,limit:10}
		}
	}
	search(){
		// console.log(this.refs['search-input'].value)
		this.setState({
			config: {
				url: 'products',
				name: 'product',
				data: {page:1,limit:10,title:this.refs['search-input'].value}
			}
		},()=>{
			console.log(this.state.config);
			this.props.refresh(this.state.config);
		})
		
	}
	render(){
		let html = (
			<div>
				<div className="pro-header">
					<div className="input-group fl pro-header-l top">
						<input type="text" placeholder="请输入搜索内容" className="form-control" ref="search-input"/>
						<button className="btn btn-primary" onClick={this.search.bind(this)}>搜索</button>
					</div>
					<div className="top fr">
						<button className="btn btn-primary">添加</button>
					</div>
				</div>
				<DatagridComponent config={this.state.config} ref="datagrid"/>
				<PageComponent/>
			</div>
			
		)
		return html;
	}
}

const mapPro = (state)=>{
	// console.log(state)
	return {
		pro: state
	}
}


export default connect(mapPro,action)(ProductComponent)