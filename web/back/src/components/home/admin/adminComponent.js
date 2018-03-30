import React,{Component} from 'react'
import './admin.scss'

export default class AdminComponent extends Component{
	
	render(){
		return (
			<div>
				<div className="con-admin">用户：<strong>admin</strong></div>
				<div className="bgs clearfix">
					<div className="con-admin-box">
						<div className="fl">
							<div className="pic">
								<img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=f807d243193853438ccf8027ab28d743/0e2442a7d933c8951c6eb954d81373f082020088.jpg"/>
								
							</div>
							<input type="button" value="上传照片" className="btn-update-pic btn-info btn"/>
						</div>
						<div className="infor fl">
							<div className="infor-row">
								<div className="infor-name fl ">姓名：</div>
								<div className="infor-value fl ">admin</div>						
							</div>
							<div className="infor-row">
								<div className="infor-name fl ">电话：</div>
								<div className="infor-value fl ">10086</div>						
							</div>
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}