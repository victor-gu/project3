import React,{Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'

import * as action from './datagridaction'
import SpinnerComponent from '../../spinner/SpinnerComponent'
import ModalComponent from '../modal/modalComponent'
import http from '../../utils/httpclient'
import TcComponent from '../tanchuang/tcComponent'

import './datagrid.scss'

class DatagridComponent extends Component{
	state = {
		filler:['name','title','price','Oprice','number','category','hot','username','password','phone','email','gender','age'],
		show:false,
		currentData:[],
		showTc: false
	}

	componentWillMount(){
		// console.log(this.props)
		this.props.refresh(this.props.config);
	}

	 // componentWillReceiveProps(newProps){
  //       console.log('Component WILL RECEIVE PROPS!', newProps)
  //       this.props.refresh(this.props.config)
  //   }
  	componentDidUpdate(){

  		if(this.props.error){
  			console.log(this.props.error)
			return this.props.router.push('/login')
		}
  		if(this.props.config.name == 'student' || this.props.config.name == 'admins'){
			// console.log($('.delBtn'));
			for(let i=0;i<$('.delBtn').length;i++){
				$($('.delBtn')[i]).addClass('yincang')
			}

		}else{
			// console.log(231)
		}
  	}
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
		// let ds = this.deCommon(this);
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
		// console.log(ds[idx]._id);
		// this.setState({
		// 	showTc: true
		// })
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
		let del = null;
		
		// del = <input type="button" className="btn btn-danger btn-sm" value={this.props.txt.del} onClick={this.delTr.bind(this,idx)}/>

		return (
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							{
								this.getKeys(ds[0]).map((key,idx) =>{
									if(this.state.filler.indexOf(key)> -1){
										// console.log(key);
										return <th key= {Math.random()}>{this.props.txt[key] || key}</th>
									}
									
								})
							}
							<th>{this.props.txt.handle}</th>
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
										<td className="last-td">
											<input type="button" className="btn btn-secondary btn-sm" value={this.props.txt.compile} onClick={this.compile.bind(this,idx)}/>
											<input type="button" className="btn btn-danger btn-sm delBtn" value={this.props.txt.del} onClick={this.delTr.bind(this,idx)}/>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
				<SpinnerComponent show={this.props.show}/>
				<TcComponent show={this.state.showTc}/>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	// console.log(state.datagrid)
	return {
		dataset: state.datagrid,
		show: state.datagrid.show,
		txt: state.dictionary.txt,
		error:state.datagrid.error
	}
}


export default connect(mapStateToProps,action)(DatagridComponent)