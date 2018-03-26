import React,{Component} from 'react'
import './header.scss'

export default class HeaderComponent extends Component{
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
							<select className="col-sm-4 form-control form-control-sm">
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