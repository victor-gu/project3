import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import './nav.scss'

class NavComponent extends Component{
	render(){
		return (
			<div className="con-nav-box">
				<ul className="">
		            <li className="">
		                <Link to='/product' className="tza">{this.props.txt.product}</Link>
		            </li>
		            <li className="">
		           		<Link to='/student' className="tza">{this.props.txt.student}</Link>
		            </li>
		            <li className="">
		                <Link to='/order' className="tza">{this.props.txt.order}</Link>
		            </li>
		            <li className="">
		            	<Link to='/admin' className="tza">{this.props.txt.admin}</Link>
		            </li>
		        </ul> 
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

export default connect(mapDictionary)(NavComponent)