import React,{Component} from 'react'
import {connect} from 'react-redux'
import './product.scss'

import DatagridComponent from '../datagrid/datagridComponent'
import PageComponent from '../page/pageComponent'
import ModalComponent from '../modal/modalComponent'
import * as action from '../datagrid/datagridaction'

class ProductComponent extends Component{
	state = {
		config: {
			url:'backproducts',
			name:"product",
			data:{page:1,limit:6}
		},
		pro: {
			filler:['name','title','price','Oprice','number','category','hot'],
			show:false,
			currentData:[]
		}
	}
	search(n,el){
		// console.log(this.refs['search-input'].value)
		if(n==1 || n.keyCode === 13){
			
			this.setState({
				config: {
					url: 'backproducts',
					name: 'product',
					data: {page:1,limit:6,title:this.refs['search-input'].value}
				}
			},()=>{
				// console.log(this.state.config);
				this.props.refresh(this.state.config);
			})
		}
		
	}
	add(idx,types){
		this.setState({
			pro: {
				show: true,
				currentData:this.props.proData.product.dataset[idx] || this.props.proData.product.dataset[0],
				type: types || 'add',
				filler:['name','title','price','Oprice','number','category','hot'],
			}
		})
	}
	fillState(){
		this.setState({
			pro: {
				show: false
			}
		})
	}
	render(){
		let html = (
			<div>
				<div className="pro-header">
					<div className="input-group fl pro-header-l top">
						<input type="text" placeholder={this.props.txt.search} className="form-control search-input" onKeyUp={this.search.bind(this)} ref="search-input"/>
						<button className="btn btn-primary" onClick={this.search.bind(this,1)}>{this.props.txt.search}</button>
					</div>
					<div className="top fr">
						<button className="btn btn-primary" onClick={this.add.bind(this)}>{this.props.txt.add}</button>
					</div>
				</div>
				<DatagridComponent config={this.state.config} ref="datagrid" add={this.add.bind(this)}/>
				<ModalComponent config = {this.state.pro} cb={this.fillState.bind(this)} upt={this.state.config}/>
				<PageComponent config={this.state.config}/>
			</div>
			
		)
		return html;
	}
}

const mapPro = (state)=>{
	// console.log(state.datagrid)
	return {
		proData: state.datagrid,
		txt: state.dictionary.txt
	}
}


export default connect(mapPro,action)(ProductComponent)