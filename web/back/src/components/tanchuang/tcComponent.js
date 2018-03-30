import React,{Component} from 'react'
import {connect} from 'react-redux'

import './tc.scss'

class TcComponent extends Component{
	cancel(){
		this.props.cb();
	}
	del(){
		// console.log('del',this.props.show.delIdx);
		let idx =this.props.show.delIdx;
		this.props.del(idx);
		this.props.cb();
	}
	render(){
		// console.log(this.props.show)
		let html = (
			<div>
				<div className="modal modal-box" tabIndex="-1" role="dialog">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true" onClick={this.cancel.bind(this)}>&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <p>确定要删除吗？</p>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-primary" onClick={this.del.bind(this)}>{this.props.txt.sure}</button>
				        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.cancel.bind(this)}>{this.props.txt.cancel}</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		)
		return this.props.show.showTc ? html : null;
		
	}
}

const mapTc = (state)=>{
	return {
		dataset: state.datagrid,
		txt: state.dictionary.txt
	}
}

export default connect(mapTc)(TcComponent)