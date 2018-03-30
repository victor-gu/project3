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
		filler:['name','title','price','Oprice','number','category','hot','username','password','phone','email','gender','age','userid','status','products'],
		show:false,
		currentData:[],
		showTc: false,
		delIdx: 0
	}

	componentWillMount(){
		// console.log(this.props)
		this.props.refresh(this.props.config);
	}

  	componentDidUpdate(){
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
		let type= 'compile';
		// console.log(idx,'compile')
		
		this.props.add(idx,type);
	}
	delTr(idx){
		// console.log('delTr,backDelproduct');
		let ds = this.deCommon(this);
		// console.log(this.props.config.name);
		if(this.props.config.name === 'product'){
			
			http.get('backDelproduct',{id: ds[idx]._id}).then((res)=>{
				// console.log(res);
				if(res.status){
					alert('删除成功！');
					this.props.refresh(this.props.config);
				}
			})
		}
	}

	tanchuangDown(){
		this.setState({
			showTc: false
		})
	}
	tanchuangUp(idx){
		// console.log(idx)
		this.setState({
			showTc: true,
			delIdx: idx
		})
		
	}
	fillState(){
		// 引用父组件方法
		this.setState({
			show: false
		})
	}
	render(){
		let ds = this.deCommon(this);
		// console.log(ds[0])
		if(ds[0]){
			if(ds[0].products){
				// console.log(ds[0].products)
			}
			
		}
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
											<input type="button" className="btn btn-danger btn-sm delBtn" value={this.props.txt.del} onClick={this.tanchuangUp.bind(this,idx)}/>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
				<SpinnerComponent show={this.props.show}/>
				<TcComponent show={this.state} cb={this.tanchuangDown.bind(this)} del={this.delTr.bind(this)} tc={this.tanchuangUp.bind(this)}/>
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