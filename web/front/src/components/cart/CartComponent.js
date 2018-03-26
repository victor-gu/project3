import React,{Component} from 'react' 
import NavComponent from '../nav/NavComponent'
import '../../common/common.css'

export default class CartComponent extends Component{
    render(){
        return (
            <div className="home">             
               <div className="homeHeader"></div>
               <div className="homeContent">
                     <h1>兴胜爱的海洋</h1>
               </div>
               <div className="homeFooter"><NavComponent /></div>
            </div>
        )
    }
}