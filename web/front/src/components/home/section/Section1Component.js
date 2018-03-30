import React from 'react'
import {Link,hashHistory} from 'react-router'
export default class Section1Component extends React.Component{
    gotodet(id){
        location.href="#/goods"
        window.sessionStorage.setItem("goodsid", id);
    }
    render(){
        var i=8;
        return (
            <div>
                <div className="sections_top">
                    <p className="sections_header">
                        <span>{this.props.Section1[1]}</span>
                        <Link to="/phone">
                            <span>更多<i className ="iconfont icon-arrow_right"></i></span>
                        </Link>
                    </p>
                </div>
                <div className="section">
                    <div className="section_son">
                        <ul>
                            {
                                this.props.Section1[0].map((item)=>{
                                    if(item.category == this.props.Section1[1]){
                                        i--;
                                        if(i>=0){
                                            return(
                                                <li key={item._id} onClick = {this.gotodet.bind(this,item._id)}>
                                                    <img src={"./src/static/img/"+item.img} />
                                                    <h6>{item.name}</h6>
                                                    <p>{item.title}</p>
                                                    <p className="money"><span>￥</span><span>{item.price}</span></p>
                                                </li>
                                            )
                                        }
                                    }

                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}