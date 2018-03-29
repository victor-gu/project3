import React, {Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'


import http from '../../utils/httpclient'
import * as action from '../datagrid/datagridaction'

import './modal.scss'

class ModalComponent extends Component{
	getKeys(item){
		return item ? Object.keys(item) : [];
	}
	shutdown(){
		this.props.cb();
	}
	componentDidUpdate(){
		// console.log($('.pagination'),this.props.config.show);
		if(this.props.config.show){
			$('.pagination').addClass('pagination-hidden')
		}else{
			$('.pagination').removeClass('pagination-hidden')
		}
	}
	updproduct(){
		// console.log($('.showPar'));
		let objGood = {};
		for(let i=0;i<$('.showPar').length;i++){
			objGood[this.props.config.filler[i]] = $('.showPar')[i].value || $('.showPar')[i].placeholder;
		}
		// console.log(objGood);
		// 更新后的数据
		var final = Object.assign({},this.props.config.currentData,objGood);
		if(this.props.config.type == 'compile'){
			http.get('backUpdproduct',final).then((res)=>{
				// console.log(res);
				if(res.status){
					alert('更新成功！');
					this.shutdown();
					this.props.refresh(this.props.upt);
					// console.log(this.props.upt)
				}
			})
		}else if(this.props.config.type == 'add'){
			http.get('backAddproduct',objGood).then((res)=>{
				if(res.status){
					alert('添加成功');
					this.shutdown();
					this.props.refresh(this.props.upt)
				}
			})
		}

	}
	render(){
		let currentData = this.props.config.currentData;
		let content = null;
		// if(this.props.config.type == 'compile'){
			content = this.getKeys(currentData).map((key)=>{
				if(this.props.config.filler.indexOf(key) > -1){
					return (
						<div className="ipt" key={Math.random()}>
							<label htmlFor={this.props.txt[key] || key}>{this.props.txt[key] || key}:</label>
							<input type="text" placeholder={currentData[key]} className="showPar"/>
						</div>
					)
				}
			})	
		// }
		// else{
		// 	content= <div>content</div>
		// }
		let html = (
			<div>
				<div className="shade">
					<div className="showBox" ref="showBox">
						<h2>ModalComponent</h2>
						{content}
						<p className="showBox_b">
							<input type="button" className="btn btn-success" value={this.props.txt.sure} onClick={this.updproduct.bind(this)}/>
							<input type="button" className="btn btn-danger" value={this.props.txt.cancel} onClick={this.shutdown.bind(this)} />
						</p>
						<span className="cancel" onClick={this.shutdown.bind(this)}>&times;</span>
					</div>
					
				</div>
			</div>
		)



		return this.props.config.show ? html : null;
	}
}
const mapModal = (state)=>{
	return {
		dataset: state.datagrid,
		show:state.datagrid.show,
		txt: state.dictionary.txt
	}
}


export default connect(mapModal,action)(ModalComponent)