import React,{Component} from 'react' 
import NavComponent from '../nav/NavComponent'
import '../../common/common.css'

export default class SortComponent extends Component{
    render(){
        return (
            <div className="home">             
               <div className="homeHeader"></div>
               <div className="homeContent">
                     <h1>祖来鼻毛很长</h1>
               </div>
               <div className="homeFooter"><NavComponent /></div>
            </div>
        )
    }
}