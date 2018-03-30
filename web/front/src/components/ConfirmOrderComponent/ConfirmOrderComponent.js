import React,{Component} from 'react' 
import {Link,hashHistory,browserHistory} from 'react-router'

//请求数据的二次封装函数http
import http from '../../utils/httpclient.js'

import './base.css'
import './confirmorder.css'
import '../../common/iconfont/iconfont.css'


export default class ConfirmOrderComponent extends Component{
    state = {
        dataset:[]
    }
    componentWillMount(){
        let userid = sessionStorage.getItem("userid");
        http.get("userOrder", {userid: userid, status:0}).then((res)=>{
            console.log(res.data);       
            this.setState({
                dataset: res.data || []
            })
        })
    }
    render(){
        let baseurl = 'src/static/img/'
        return (
            <div className="lzf_confirm_all">

                <div className="lzf_confirm_header">
                    <Link to ="mine"><i className="iconfont lzf_confirm_left">&#xe61e;</i></Link>
                    <h3>
                        确认订单
                    </h3>
                </div>             

                <div className="lzf_confirm_main">

                    <div className="lzf_address">
                        <img src = {require('./lzfaddress.png')}/>
                    </div>

                    <div className="lzf_fapiao confirm_main0">
                        <p>
                            电子普通发票
                        </p>
                        <h4 className="lzf_fapiao_right">
                            <span>个人</span>
                            <i className="iconfont">&#xe633;</i>
                        </h4>
                    </div>

                    <div className="lzf_transport confirm_main0">
                        <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_returned.png"/>
                        <span>华为商城配送</span>
                    </div>

                    <ul className="lzf_prolist">                   
                        {
                            this.state.dataset.map((item) =>{
                                return (
                                    <li key={Math.random()}><div className="lzf_prolist_white"><img  src={baseurl + item.products.img}/><h3 className="prolist_title">{item.products.title}</h3><h4>x{item.products.qty}</h4><h5>￥{item.products.price}</h5></div><div className="lzf_prolist_gray"><span>配</span><h3>天翼通1GB全球通用流量套餐</h3><h4>x 1</h4></div></li>
                                )                           
                            })
                        }                      
                    </ul>


                    <div className="lzf_totalcost">
                        <div className="lzf_transport_price confirm_main0">
                            <h3>配送费</h3>
                            <h4>￥0.00</h4>
                        </div>

                        <div className="lzf_account confirm_main0">
                            <div  className="lzf_account_child">
                                <span>优惠：-￥item.price</span>
                                <span>小计：<i>￥item.price</i></span>
                            </div>
                           
                        </div>
                    </div>

                    <div className="lzf_discount">
                        <div className="lzf_discount1 confirm_main0">优惠和抵用(仅适用于自营实物商品)</div>
                        <div className="lzf_discount2 confirm_main0"><img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/icon/icon_coupon.png"/>使用优惠券</div>
                        <div className="lzf_discount3 confirm_main0">
                            <input type="checkbox"/>积分余额为0，不足100不可以使用
                        </div>
                    </div>
                </div>

                <div className="lzf_confirm_footer">
                    <div>应付总额：<span>￥item.price</span></div>
                    <div className="lzf_paid">提交订单</div>
                </div>

            </div>
        )
        
    }
}