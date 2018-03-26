import React from 'react'
import './login.scss'

export default class LoginComponent extends React.Component{
	login(){
		this.props.router.push('/');
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
								<label htmlFor="username">用户名：</label><input type="text" id="username"/>
							</div>
							<div>
								<label htmlFor="pwd">密码：</label><input type="text" id="pwd"/>
							</div>
						</div>
						<div className="login-footer">
							<input type="button" value="登录" className="ld" onClick={this.login.bind(this)}/>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}