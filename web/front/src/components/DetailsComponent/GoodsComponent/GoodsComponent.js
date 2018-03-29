import React from "react";

import "./GoodsComponent.scss";

export default class CartComponent extends React.Component{
    render(){
        return (
            <div className="goods">
                <img src="./src/components/DetailsComponent/img/1.jpg"/>
                <p className="title">荣耀V10 全网通高配版 6GB+64GB（魅丽红）</p>
                <div className="price">
                    <img src="./src/components/DetailsComponent/img/details29.png"/>
                    <p className="price">￥<span>2799</span></p>
                    <p className="Oprice">￥<span>2099</span></p>
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
                    <dd>沙滩金</dd>
                    <dd>极光蓝</dd>
                    <dd>幻夜黑</dd>
                </dl>
                <dl>
                    <dt>制式</dt>
                    <dd>全网通标配版</dd>
                    <dd>全网通高配版</dd>
                </dl>
                <dl>
                    <dt>容量</dt>
                    <dd>4GB+64GB</dd>
                    <dd>6GB+64GB</dd>
                </dl>
                <dl>
                    <dt>套餐</dt>
                    <dd>官方标配</dd>
                </dl>
                <dl>
                    <dt>定制</dt>
                    <dd>无定制</dd>
                    <dd>后壳定制</dd>
                </dl>
                <div className="num">
                    <p>数量</p>
                    <div>
                        <input className="up" type="button" value="+"/>
                        <input className="text" defaultValue="1" type="text"/>
                        <input className="down" type="button" value="-"/>
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