import React,{Component} from 'react'

import './tc.scss'

export default class TcComponent extends Component{
	cancel(){

	}
	render(){
		// console.log(this.props.show)
		let html = (
			<div>
				<div className="modal modal-box" tabIndex="-1" role="dialog">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title">Modal title</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true" onClick={this.cancel.bind(this)}>&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <p>确定要删除吗？</p>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-primary">确定</button>
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">取消</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		)
		return this.props.show ? html : null;
		
	}
}