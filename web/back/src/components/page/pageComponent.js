import React,{Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'
import './page.scss'

import * as action from '../datagrid/datagridaction'



class PageComponent extends Component{
	state = {
		num:3,

	}
	componentWillMount(){
		this.setState({
			page: this.props.config.data.page - 1
		})
		//这个钩子函数只执行一次
		// console.log('componentDidMount');
		// $('.p1').hide();
		// $('.p2').hide();
		// this.setState({
		// 	idx: 1
		// },()=>{
		// 	// console.log(this.state);
		// })
		// $('.one').addClass('active');

	}
	componentDidUpdate(prevPros,prevState){
		// console.log(prevState,'11',this.state.num);
		let ds = this.defaultInit(this,1);
		$('.mid').addClass('active').siblings().removeClass('active')
		if((prevState.idx || prevState.num) <= 3){
			$('.p1').hide();
			$('.p2').hide();
			if(!prevState.idx){
				$('.one').addClass('active').siblings().removeClass('active');
			}else{
				switch(prevState.idx){
					case 1:
						$('.one').addClass('active').siblings().removeClass('active');
						break;
					case 2:
						$('.two').addClass('active').siblings().removeClass('active');
						break;
				}
			}
		}else if(prevState.idx){
			switch(prevState.idx){
				case Math.ceil(ds/this.props.config.data.limit)*1-1:
					$('.third').addClass('active').siblings().removeClass('active');
					break;
				case Math.ceil(ds/this.props.config.data.limit)*1:
					$('.last').addClass('active').siblings().removeClass('active');
					break;
			}
		}
		
		// 第一页高亮
		if(prevState.page==0 && $('.search-input').val()){
			// console.log('gaoliang');
			$($('.page-li')[0]).addClass('active');
			
		}
		if(prevState.page>0){
			// $($('.page-li')[0]).addClass('active');
			$($('.page-li')[prevState.page - 1]).addClass('active').siblings().removeClass('active');
		}
		
		
	}
	pageChange(el){
		
		let idx = $(el.target).text()*1;
		// console.log(idx);
		// $(el.target.parentElement).addClass('active').siblings().removeClass('active');
		this.props.config.data.page = idx;
		// console.log(this.props.config.data.page)
		this.props.refresh(this.props.config);
		// if(idx>4){
			this.setState({
				num: idx,
				idx
			},()=>{
				$('.p1').show();
				$('.p2').show();
				$('.pls').show();
				$('.pla').show();
				// console.log(this.state.num)
				if(this.state.num == $('.pla').text()*1-3){
					$('.pls').hide();
					// console.log()
					// $('.pla').hide();
					
				}else if(this.state.num >= $('.pla').text()*1-2){
					// if(){
						$('.pls').hide();
						$('.pla').hide();
						this.setState({
							num: $('.pla').text()*1 - 2
						})
					// }
				}else if(this.state.num <= 3){
					$('.p1').hide();
					$('.p2').hide();
					this.setState({
						num: 3
					})
				}else if(this.state.num == 4){
					$('.p2').hide();
				}
			})
		// }
		

	}
	change(i,el){
		// console.log(el.target);
		$(el.target.parentElement).addClass('active').siblings().removeClass('active')
		this.props.config.data.page = i;
		this.props.refresh(this.props.config);
		this.setState({
			page: i
		},()=>{
			// console.log(this.state);
		})
	}
	defaultInit(el,kt){
		let ds = this.props.pageMent;
		let dp = null;
		let name = this.props.config.name;
		if(name){
			ds = ds[name] ? ds[name].count : 0
			dp = ds[name] ? ds[name].pageDefault :0
		}else{
			ds = ds.count || 0;
			dp = ds.defaultPage || 0;
		}
		// console.log(kt) 
		return kt ? ds : dp;
	}

	render(){
		// let html = (
		// 	<div>
		// 		<ul className="pagination">
		// 		    <li className="page-item disabled">
		// 		      	<span className="page-link" href="#" tabIndex="-1">Previous</span>
		// 		    </li>
		// 		    <li className="page-item"><span className="page-link" href="#">1</span></li>
		// 		    <li className="page-item active">
		// 		      	<span className="page-link" href="#">2 <span className="sr-only">(current)</span></span>
		// 		    </li>
		// 		    <li className="page-item"><span className="page-link" href="#">3</span></li>
		// 		    <li className="page-item">
		// 		      	<span className="page-link" href="#">Next</span>
		// 		    </li>
		// 		 </ul>
		// 	</div>
		// )
		// let ds = this.props.pageMent;
		// let name = this.props.config.name;
		// if(name){
		// 	ds = ds[name] ? ds[name].count : 0
		// }else{
		// 	ds = ds.count || 0;
		// }
		let ds = this.defaultInit(this,1);
		let pages = Math.ceil(ds/this.props.config.data.limit)
		// console.log(pages);
		let pageArr = [];
		// console.log(pages)
		for(let i=1;i<=pages;i++){
			pageArr.push(<li className="page-item page-li" key={Math.random()} onClick={this.change.bind(this,i)}><span className="page-link">{i}</span></li>)
		}
		let page1 = (
			<div>
				<ul className="pagination">
					<li className="page-item"><span onClick={this.pageChange.bind(this)} className="page-link p1" ref="p1">1</span></li>
					<li className="page-item"><span onClick={this.pageChange.bind(this)} className="page-link p2" ref="p2">...</span></li>
					<li className="page-item one"><span onClick={this.pageChange.bind(this)} className="page-link">{this.state.num-2}</span></li>
					<li className="page-item two"><span onClick={this.pageChange.bind(this)} className="page-link">{this.state.num-1}</span></li>
					<li className="page-item mid"><span onClick={this.pageChange.bind(this)} className="page-link">{this.state.num}</span></li>
					<li className="page-item third"><span onClick={this.pageChange.bind(this)} className="page-link">{this.state.num*1 + 1}</span></li>
					<li className="page-item last"><span onClick={this.pageChange.bind(this)} className="page-link">{this.state.num*1 + 2}</span></li>
					<li className="page-item"><span onClick={this.pageChange.bind(this)} className="page-link pls">...</span></li>
					<li className="page-item"><span onClick={this.pageChange.bind(this)} className="page-link pl pla">{pages}</span></li>
					<li className=""><span className="">共有{ds}条记录</span></li>
				</ul>
			</div>
		)
		let page2 = (
			<div>
				<ul className="pagination">
					{
						pageArr.map((item,idx)=>{
							return item;
						})
					}
					<li className="last"><span className="sa" style={{'display':'block'}}>共有{ds}条记录</span></li>
				</ul>
			</div>
		)

		return pages > 6 ? page1 : page2;
	}
}

const mapPageState = (state)=>{
	// console.log(state)
	return {
		pageMent:state.datagrid,
	}
}

export default connect(mapPageState,action)(PageComponent)