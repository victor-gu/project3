import React from 'react'
import {Link,hashHistory} from 'react-router'
export default class Section6Component extends React.Component{
      //组件通信-----传递产品id到商品详情页
    gotodet(id){
        // console.log(id);
        var path = '/goods/' + id; 
        hashHistory.push(path);
        window.sessionStorage.setItem("goodsid", id);
    }
    render(){
    var e=8;
    return (
        <div>
            <div className="sections_top">
                <p className="sections_header">
                    <span>{this.props.Section6[1]}</span>
                    <span>更多<i className ="iconfont icon-arrow_right"></i></span>
                </p>
            </div>
            <div className="section">
                <div className="section_son">
                    <ul>
                        {
                            this.props.Section6[0].map((item6)=>{
                                
                                if(item6.category == this.props.Section6[1]){
                                    e--;
                                    if(e>=0){        

                                        return(
                                            <li key={item6._id} onClick={this.gotodet.bind(this,item6._id)}>
                                                <img src="../../../src/components/home/img/1507711722757.jpg" />
                                                <h6>{item6.name}</h6>
                                                <p>{item6.title}</p>
                                                <p className="money"><span>￥</span><span>{item6.price}</span></p>
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