import React from 'react'

import http from '../../utils/httpclient'
import './login.scss'

export default class LoginComponent extends React.Component{
	login(n){
		if(n==1 || n.keyCode === 13){
			// console.log(document.getElementById('username').value);
			// console.log(document.getElementById('pwd').value);
			let username = document.getElementById('username').value;
			let password = document.getElementById('pwd').value;
			http.get('admin',{username,password}).then((res)=>{
				// console.log(res)
				if(res.status){
					// console.log(12312313);
					window.sessionStorage.setItem('lxtoken',res.data)
					this.props.router.push('/');
				}else{
					alert('登录信息错误！');
					
				}
			})
		}

		// http.get('admin',)
		// this.props.router.push('/');
	}
	render(){
		return (
			<div>
				<div className="shadow"></div>
				<div className="bigBox">
					<div className="login-box">
						<div className="login-header">
							<h1>华为商城后台管理系统</h1>
						</div>
						<div className="login-content">
							<div>
								<label htmlFor="username">用户名：</label><input type="text" id="username" onKeyUp={this.login.bind(this)}/>
							</div>
							<div>
								<label htmlFor="pwd">密码：</label><input type="password" id="pwd" onKeyUp={this.login.bind(this)}/>
							</div>
						</div>
						<div className="login-footer">
							<input type="button" value="登录" className="ld" onClick={this.login.bind(this,1)}/>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}