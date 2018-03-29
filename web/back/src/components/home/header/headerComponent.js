import React,{Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'

import * as action from './headeraction'
import './header.scss'


class HeaderComponent extends Component{
	state = {
		en: {
			add: 'Add',
			product: 'Product',
			search: 'Search',
			name: 'Name',
			title: 'Title',
			price: 'Price',
			oprice: 'Oprice',
			number: 'Number',
			category: 'Category',
			hot: 'Hot',
			handle: 'Handle',
			compile: 'Compile',
			del: 'Delete',
			sure: 'Sure',
			cancel: 'Cancel',
			student: 'Student',
			order: 'Order',
			admin: 'Admin',
			username: 'Username',
			password: 'Password',
			phone: 'Phone',
			email: 'Email',
			gender: 'Gender',
			age: 'Age',

		},
		cn: {
			add: '添加',
			product: '商品管理',
			search: '搜索',
			name: '名称',
			title: '简介',
			price: '现价',
			oprice: '原价',
			number: '库存',
			category: '类型',
			hot: '热卖',
			handle: '操作',
			compile: '编辑',
			del: '删除',
			sure: '确定',
			cancel: '取消',
			student: '用户管理',
			order: '订单管理',
			admin: '管理员',
			username: '用户名',
			password: '密码',
			phone: '电话',
			email: '邮件',
			gender: '性别',
			age: '年龄',
		}
	}
	componentWillMount(){

		this.props.getDictionary(this.state.en)
	}
	changeTxt(){
		// console.log($(':selected').val())
		let val = $(':selected').val();
		this.props.getDictionary(this.state[val])
	}
	render(){
		return (
			<div>
				<div className="home-header">
					<div className="header-l">
						华为商城后台管理系统
					</div>
					<div className="header-r">
						<div className="admin">
							欢迎您：<strong>admin</strong>
						</div>
						<div className="lan">
							<select className="col-sm-4 form-control form-control-sm" onClick={this.changeTxt.bind(this)}>
								<option value="en">en</option>
								<option value="cn">cn</option>
							</select>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

const mapDictionary = (state)=>{
	// console.log(state);
	return {
		txt: state.dictionary.txt
	}
} 

export default connect(mapDictionary,action)(HeaderComponent)