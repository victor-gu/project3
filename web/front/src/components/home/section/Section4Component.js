import React from 'react'
import {Link,hashHistory} from 'react-router'
export default class Section4Component extends React.Component{
      //组件通信-----传递产品id到商品详情页
    gotodet(id){
        // console.log(id);
        var path = '/goods/' + id; 
        hashHistory.push(path);
        window.sessionStorage.setItem("goodsid", id);
    }
    render(){
    var d=8;
    return (
        <div>
            <div className="sections_top">
                <p className="sections_header">
                    <span>{this.props.Section4[1]}</span>
                    <span>更多<i className ="iconfont icon-arrow_right"></i></span>
                </p>
            </div>
            <div className="section">
                <div className="section_son">
                    <ul>
                        {
                            this.props.Section4[0].map((item)=>{

                                    if(item.category == this.props.Section4[1]){
                                d--;

                                if(d>=0){
                                        
                                        return(
                                            <li key={item._id} onClick={this.gotodet.bind(this,item._id)}>
                                                <img src="../../../src/components/home/img/1507711722757.jpg" />
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