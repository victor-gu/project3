import React from 'react'
import {Link,hashHistory} from 'react-router'
import http from '../../../utils/httpclient.js'

export default class JxComponent extends React.Component{

    //组件通信-----传递产品id到商品详情页
    gotodet(id){
        console.log(id);
        var path = '/goods/' + id; 
        hashHistory.push(path);
        window.sessionStorage.setItem("goodsid", id);
    }

    render(){
        var a = 28;
        return (
            <div className="Jxproduct">
                <ul>
                    {
                        this.props.jingxuan.map((item,index)=>{
                            a--;
                            if(a>=0){
                                if (item.hot=="hot") {
                                    return (
                                        <li key={item._id} onClick={this.gotodet.bind(this,item._id)}>
                                            <p className="imgp">
                                                <img src="./src/components/home/img/1495546164782.jpg" />
                                            </p>
                                            
                                            <h6>{item.name}</h6>
                                            <p className="Jxp">{item.title}</p>
                                            <p className="money"><span>￥</span><span>{item.price}</span></p>
                                        </li> 
                                    )
                                }
                                
                            }
                        })
                    } 
                </ul>
            </div>
        )
    }

}