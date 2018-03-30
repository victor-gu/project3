import React from 'react'
import {Link} from 'react-router'

export default class TetuiComponent extends React.Component{
    gotodet(id){
        location.href="#/goods"
        window.sessionStorage.setItem("goodsid", id);
    }

    render(){
        var i = 0;
        var j = 0;
        var k = 0;
        return (
           <div>
                <ul>
                    <li>
                        <Link to="/tetui">
                            <div className="tetui_1">
                                <img src="./src/static/img/c0.jpg"/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        {
                            this.props.tetui.map((item)=>{
                                i++;
                                if(i<3){
                                    if(item.name ="荣耀V10"){
                                        return (
                                            <div className="tetui_2" key={item._id} onClick={this.gotodet.bind(this,item._id)}>
                                                <img src={'./src/static/img/c'+(i+1)+'.jpg'}/>    
                                            </div>
                                        )
                                    }
                                }
                            })
                        }
                        
                       
                    </li>
                </ul>
                <ul>
                    <li>
                        {
                            this.props.tetui.map((item)=>{
                                j++;
                                if(j<3){
                                    if(item.name ="荣耀V10"){
                                        return (
                                            <div className="tetui_2" key={item._id} onClick={this.gotodet.bind(this,item._id)}>
                                                <img src={'./src/static/img/c'+(j+3)+'.jpg'}/>    
                                            </div>
                                        )
                                    }
                                }
                            })
                        }
                        
                    </li>
                    <li>
                        {
                            this.props.tetui.map((item)=>{
                                k++;
                                if(k<3){
                                    if(item.category == "华为手机"){
                                        return (
                                            <div className="tetui_2" key={item._id} onClick={this.gotodet.bind(this,item._id)}>
                                                <img src={'./src/static/img/c'+(k+5)+'.jpg'}/>    
                                            </div>
                                        )
                                    }
                                }
                            })
                        }
                        
                    </li>
                </ul>
           </div>
        )
    }

}