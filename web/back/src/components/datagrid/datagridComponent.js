import React,{Component} from 'react'

export default class DatagridComponent extends Component{
	render(){
		let html = (
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>
								<input type="checkbox"/>
								<span>全选</span>
							</th>
							<th>编号</th>
							<th>手机号</th>
							<th>商品信息</th>
							<th>热卖</th>
							<th>订单状态</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								<input type="button" value="编辑" className="btn btn-primary"/>
								<input type="button" value="删除" className="btn btn-danger"/>
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								<input type="button" value="编辑" className="btn btn-primary"/>
								<input type="button" value="删除" className="btn btn-danger"/>
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								<input type="button" value="编辑" className="btn btn-primary"/>
								<input type="button" value="删除" className="btn btn-danger"/>
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								<input type="button" value="编辑" className="btn btn-primary"/>
								<input type="button" value="删除" className="btn btn-danger"/>
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								<input type="button" value="编辑" className="btn btn-primary"/>
								<input type="button" value="删除" className="btn btn-danger"/>
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								<input type="button" value="编辑" className="btn btn-primary"/>
								<input type="button" value="删除" className="btn btn-danger"/>
							</td>
						</tr>
						<tr>
							<td>
								<input type="checkbox" />
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								001
							</td>
							<td>
								<input type="button" value="编辑" className="btn btn-primary"/>
								<input type="button" value="删除" className="btn btn-danger"/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
		return html;
	}
}