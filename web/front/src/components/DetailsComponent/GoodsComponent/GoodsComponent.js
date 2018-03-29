import React from "react";

import "./GoodsComponent.scss";
import http from "../../../utils/httpclient";

export default class CartComponent extends React.Component{

    state = {
        dataset:{},
        url:"./src/static/img/",
        num:1
    }

    componentWillMount(){
        http.get("frontIdproduct", {id:"5ab77f4cbc7aad6eaa65a8a0"}).then((res)=>{
            this.setState({
                dataset:res.data[0]
            })
            // console.log(this.state.dataset);
            
        })
    }

    
        // window.sessionStorage.setItem("products", JSON.stringify({img:this.state.dataset.img, title:this.state.dataset.title, price:this.state.dataset.price, number:$(".text").val()}));
    

    up(){
        this.setState({
            num:this.refs.text.value*1>=this.state.dataset.number ? this.state.dataset.number : ++this.refs.text.value
        })
    }

    down(){
        this.setState({
            num:this.refs.text.value*1<=1 ? 1 : --this.refs.text.value
        })
    }

    componentDidMount(){
        $("dl").on("click", "dd", function(e){
            $(this).siblings().attr({class:""});
            this.className = "active";
        })
        
    }

    render(){
        var dataset=this.state.dataset.img?this.state.dataset.img:"";
        console.log(666)
        console.log(this.state.dataset);
        return (
            <div className="goods">
                <img src={this.state.url+dataset}/>
                <p className="title">{this.state.dataset.title}</p>
                <div className="price">
                    <img src="./src/components/DetailsComponent/img/details29.png"/>
                    <p className="price">￥<span>{this.state.dataset.price}</span></p>
                    <p className="Oprice">￥<span>{this.state.dataset.Oprice}</span></p>
                </div>
                <p className="des"><span>【限时优惠200元+赠百元读书券，现货速发】</span>麒麟970人工智能芯片 全面屏旗舰新品 (3.6-31日店庆活动期间购买碎屏险，享7折优惠）</p>
                <div className="pei">
                    <div className="pei1">
                        配
                        <img src="./src/components/DetailsComponent/img/details30.jpg"/>
                    </div>
                    <div>
                        选择
                        <i className="iconfont icon-xiangyou"></i>
                    </div>
                </div>
                <ul className="ico">
                    <li>
                        <i className="icon-wancheng iconfont"></i>
                        限时报价
                    </li>
                    <li>
                        <i className="icon-wancheng iconfont"></i>
                        支持分期
                    </li>
                    <li>
                        <i className="icon-wancheng iconfont"></i>
                        赠送积分
                    </li>
                    <li>
                        <i className="te icon-xiangyou iconfont"></i>
                    </li>
                </ul>
                <dl>
                    <dt>颜色</dt>
                    <dd className="active">沙滩金</dd>
                    <dd>极光蓝</dd>
                    <dd>幻夜黑</dd>
                </dl>
                <dl>
                    <dt>制式</dt>
                    <dd>全网通标配版</dd>
                    <dd className="active">全网通高配版</dd>
                </dl>
                <dl>
                    <dt>容量</dt>
                    <dd className="active">4GB+64GB</dd>
                    <dd>6GB+64GB</dd>
                </dl>
                <dl>
                    <dt>套餐</dt>
                    <dd className="active">官方标配</dd>
                </dl>
                <dl>
                    <dt>定制</dt>
                    <dd>无定制</dd>
                    <dd className="active">后壳定制</dd>
                </dl>
                <div className="num">
                    <p>数量</p>
                    <div>
                        <input ref="up" onClick={this.up.bind(this)} className="up" type="button" value="+"/>
                        <input ref="text" className="text" defaultValue={this.state.num} type="text" />
                        <input ref="down" onClick={this.down.bind(this)} className="down" type="button" value="-"/>
                    </div>
                </div>
                <div className="fuwu">
                    <div>
                        <i className="fuwu1 iconfont icon-wancheng"></i>
                        <span>保障服务</span>
                        <span>为商品保驾护航</span>
                    </div>
                    <i className="iconfont icon-xiangyou"></i>
                </div>
            </div>
            )
    }
}