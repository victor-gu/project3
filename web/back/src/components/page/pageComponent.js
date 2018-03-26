import React,{Component} from 'react'
import './page.scss'

export default class PageComponent extends Component{
	render(){
		let html = (
			<div>
				<ul className="pagination">
				    <li className="page-item disabled">
				      	<span className="page-link" href="#" tabIndex="-1">Previous</span>
				    </li>
				    <li className="page-item"><span className="page-link" href="#">1</span></li>
				    <li className="page-item active">
				      	<span className="page-link" href="#">2 <span className="sr-only">(current)</span></span>
				    </li>
				    <li className="page-item"><span className="page-link" href="#">3</span></li>
				    <li className="page-item">
				      	<span className="page-link" href="#">Next</span>
				    </li>
				 </ul>
			</div>
		)
		return html;
	}
}