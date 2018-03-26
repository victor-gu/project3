import React,{Component} from 'react'
import './product.scss'

import DatagridComponent from '../datagrid/datagridComponent'
import PageComponent from '../page/pageComponent'

export default class ProductComponent extends Component{
	render(){
		let html = (
			<div>
				<div className="pro-header">
					<div className="input-group fl pro-header-l top">
						<input type="text" placeholder="请输入搜索内容" className="form-control"/>
						<button className="btn btn-primary">搜索</button>
					</div>
					<div className="top fr">
						<button className="btn btn-primary">添加</button>
					</div>
				</div>
				<DatagridComponent/>
				<PageComponent/>
			</div>
			
		)
		return html;
	}
}