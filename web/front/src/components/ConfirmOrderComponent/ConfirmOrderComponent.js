import React,{Component} from 'react' 
import {Link,hashHistory,browserHistory} from 'react-router'

import './base.css'
import './confirmorder.css'
import '../../common/iconfont/iconfont.css'


export default class ConfirmOrderComponent extends Component{
    render(){
        return (
            <div className="lzf_confirm_all">

                <div className="lzf_confirm_header">
                    <i className="iconfont lzf_confirm_left">&#xe61e;</i>
                    <h3>
                        确认订单
                    </h3>
                </div>             

                <div className="lzf_confirm_main">

                    <div className="lzf_address">
                        <img src = {require('./lzfaddress.png')}/>
                    </div>

                    <div className="lzf_fapiao">
                        <p>
                            电子普通发票
                        </p>
                        <h4>
                            <span>个人</span>
                            <i className="iconfont" >&#xe633;</i>
                        </h4>
                    </div>

                    <div className="lzf_transport">
                        <img src=""/>
                        <span>华为商城配送</span>
                    </div>

                    <ul>
                        <li>
                            <div>
                                <img src=""/>
                                <p>荣耀V10 全网通高配版 6GB+64GB 魅力红</p>
                                <p>x"item.qty"</p>
                                <p>￥"item.price"</p>
                            </div>

                            <div>
                                <img src=""/>
                                <p>荣耀V10 全网通高配版 6GB+64GB 魅力红</p>
                                <p>x"item.qty"</p>
                                <p>￥"item.price"</p>
                            </div>

                            <div>
                                <h3>
                                    配送费
                                </h3>
                                <h4>￥"item.price2"</h4>
                            </div>
                        </li>
                    </ul>

                    <div className="lzf_totalcost">
                        <div>
                            <span>配送费</span>
                            <span>￥"item.price"</span>
                        </div>
                        <div>
                            <span>优惠：-￥item.price</span>
                            <span>小计：-￥item.price</span>
                        </div>
                    </div>

                    <div>
                        <div>优惠和抵用（仅适用于自营实物商品）</div>
                        <div><img src=""/>使用优惠券</div>
                        <div><input type="cheackbox"/>积分余额为0，不足100不可以使用</div>
                    </div>
                </div>

                <div className="lzf_confirm_footer">
                    <div>应付总额：<span>￥item.price</span></div>
                    <div>提交订单</div>
                </div>

            </div>
        )
        
    }
}