import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as action from './datagridaction'
import SpinnerComponent from '../../spinner/SpinnerComponent'
import ModalComponent from '../modal/modalComponent'
import http from '../../utils/httpclient'

class DatagridComponent extends Component{
	state = {
		filler:['name','title','price','Oprice','number','category','hot'],
		show:false,
		currentData:[]
	}

	componentWillMount(){
		// console.log(this.props)
		this.props.refresh(this.props.config);
	}

	 // componentWillReceiveProps(newProps){
  //       console.log('Component WILL RECEIVE PROPS!', newProps)
  //       this.props.refresh(this.props.config)
  //   }
  	deCommon(){
  		let ds = this.props.dataset;
		let name = this.props.config.name;
		if(name){
			ds = ds[name] ? ds[name].dataset : []
		}else{
			ds = ds.dataset || [];
		}
		return ds;
  	}

	getKeys(item){
		// console.log(item);
		return item ? Object.keys(item) : [];
	}
	compile(idx){
		let ds = this.deCommon(this);
		let type= 'compile';
		// console.log(ds[idx]);引用
		// this.setState({
		// 	show:true,
		// 	currentData: ds[idx] || ds[0],
		// 	type:'compile'
		// },()=>{
		// 	// console.log(this.state)
		// })
		// console.log(this.props.add)
		// 调用父组件的方法
		this.props.add(idx,type);
	}
	delTr(idx){
		// console.log('delTr,backDelproduct');
		let ds = this.deCommon(this);
		console.log(ds[idx]._id);
		http.get('backDelproduct',{id: ds[idx]._id}).then((res)=>{
			console.log(res);
			if(res.status){
				alert('删除成功！');
			}
		})
	}
	fillState(){
		// 引用父元素方法
		this.setState({
			show: false
		})
	}
	render(){
		// let ds = this.props.dataset;
		// let name = this.props.config.name;
		// if(name){
		// 	ds = ds[name] ? ds[name].dataset : []
		// }else{
		// 	ds = ds.dataset || [];
		// }
		let ds = this.deCommon(this);

		return (
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							{
								this.getKeys(ds[0]).map((key,idx) =>{
									if(this.state.filler.indexOf(key)> -1){
										// console.log(key);
										return <th key= {Math.random()}>{key}</th>
									}
									
								})
							}
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{
							ds.map((item,idx)=>{
								return (
									<tr key={item._id || Math.random()}>
										{
											this.getKeys(item).map((key)=>{
												if(this.state.filler.indexOf(key) >-1){
													return <td key={Math.random()}>{item[key]}</td>
												}
											})
										}
										<td>
											<input type="button" className="btn btn-secondary btn-sm" value="编辑" onClick={this.compile.bind(this,idx)}/>
											<input type="button" className="btn btn-danger btn-sm" value="删除" onClick={this.delTr.bind(this,idx)}/>
										</td>
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