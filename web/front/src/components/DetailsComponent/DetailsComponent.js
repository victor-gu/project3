import React from "react";
import {Link} from "react-router";

import "./DetailsComponent.scss";

export default class DetailsComponent extends React.Component{
    componentWillMount(){
        this.props.router.push({pathname:'goods'})
    }

    back(){
        history.back();
    }

    shou(){
        this.props.router.push({pathname:"/"});
    }
    cart(){
        this.props.router.push({pathname:"/cart"});
    }

    
    render(){
        return (
            <div className="details">
                <ul className="top">
                    <li><i className="iconfont icon-fanhui" onClick={this.back}></i></li>
                    <li><Link to="goods">商品</Link></li>
                    <li><Link to="picture">详情</Link></li>
                    <li><Link to="params">参数</Link></li>
                    <li><Link to="evaluate">评价</Link></li>
                    <li><i className="iconfont icon-icon-"></i></li>
                </ul>

                <div className="content">
                    {this.props.children}
                </div>

                <div className="bottom">
                    <p className="one" onClick={this.shou.bind(this)}>
                        <i className="iconfont icon-shouye"></i>
                        首页
                    </p>
                    <p className="one" onClick={this.cart.bind(this)}>
                        <i className="iconfont icon-gouwuche"></i>
                        购物车
                    </p>
                    <p className="two">加入购物车</p>
                    <p className="three">立即购买</p>
                </div>
            </div>


        )
    }
}