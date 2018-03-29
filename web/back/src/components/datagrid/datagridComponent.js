import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as action from './datagridaction'
import SpinnerComponent from '../../spinner/SpinnerComponent'

class DatagridComponent extends Component{
	componentWillMount(){
		// console.log(this.props)
		this.props.refresh(this.props.config);
	}

	 // componentWillReceiveProps(newProps){
  //       console.log('Component WILL RECEIVE PROPS!', newProps)
  //       this.props.refresh(this.props.config)
  //   }

	getKeys(item){
		// console.log(item);
		return item ? Object.keys(item) : [];
	}
	render(){
		// console.log(111)
		let ds = this.props.dataset;
		let name = this.props.config.name;
		if(name){
			ds = ds[name] ? ds[name].dataset : []
		}else{
			ds = ds.dataset || [];
		}

		// let html = (
		// 	<div>
		// 		<table className="table table-striped">
		// 			<thead>
		// 				<tr>
		// 					<th>
		// 						<input type="checkbox"/>
		// 						<span>全选</span>
		// 					</th>
		// 					<th>编号</th>
		// 					<th>手机号</th>
		// 					<th>商品信息</th>
		// 					<th>热卖</th>
		// 					<th>订单状态</th>
		// 					<th>操作</th>
		// 				</tr>
		// 			</thead>
		// 			<tbody>
		// 				<tr>
		// 					<td>
		// 						<input type="checkbox" />
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						<input type="button" value="编辑" className="btn btn-primary"/>
		// 						<input type="button" value="删除" className="btn btn-danger"/>
		// 					</td>
		// 				</tr>
		// 				<tr>
		// 					<td>
		// 						<input type="checkbox" />
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						<input type="button" value="编辑" className="btn btn-primary"/>
		// 						<input type="button" value="删除" className="btn btn-danger"/>
		// 					</td>
		// 				</tr>
		// 				<tr>
		// 					<td>
		// 						<input type="checkbox" />
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						<input type="button" value="编辑" className="btn btn-primary"/>
		// 						<input type="button" value="删除" className="btn btn-danger"/>
		// 					</td>
		// 				</tr>
		// 				<tr>
		// 					<td>
		// 						<input type="checkbox" />
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						<input type="button" value="编辑" className="btn btn-primary"/>
		// 						<input type="button" value="删除" className="btn btn-danger"/>
		// 					</td>
		// 				</tr>
		// 				<tr>
		// 					<td>
		// 						<input type="checkbox" />
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						<input type="button" value="编辑" className="btn btn-primary"/>
		// 						<input type="button" value="删除" className="btn btn-danger"/>
		// 					</td>
		// 				</tr>
		// 				<tr>
		// 					<td>
		// 						<input type="checkbox" />
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						<input type="button" value="编辑" className="btn btn-primary"/>
		// 						<input type="button" value="删除" className="btn btn-danger"/>
		// 					</td>
		// 				</tr>
		// 				<tr>
		// 					<td>
		// 						<input type="checkbox" />
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						001
		// 					</td>
		// 					<td>
		// 						<input type="button" value="编辑" className="btn btn-primary"/>
		// 						<input type="button" value="删除" className="btn btn-danger"/>
		// 					</td>
		// 				</tr>
		// 			</tbody>
		// 		</table>
		// 	</div>
		// )
		return (
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							{
								this.getKeys(ds[0]).map((key,idx) =>{
									return <th key= {Math.random()}>{key}</th>
								})
							}
						</tr>
					</thead>
					<tbody>
						{
							ds.map((item,idx)=>{
								return (
									<tr key={item._id || Math.random()}>
										{
											this.getKeys(item).map((key)=>{
												return <td key={Math.random()}>{item[key]}</td>
											})
										}
									</tr>
								)
							})
						}
					</tbody>
				</table>
				<SpinnerComponent show={this.props.show}/>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	// console.log(state.datagrid)
	return {
		dataset: state.datagrid,
		show: state.datagrid.show,
	}
}


export default connect(mapStateToProps,action)(DatagridComponent)