import React,{Component} from 'react' 
import {Link,hashHistory,browserHistory} from 'react-router'

//请求数据的二次封装函数http
import http from '../../utils/httpclient.js'

import './base.css'
import './confirmorder.css'
import '../../common/iconfont/iconfont.css'


export default class ConfirmOrderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataset: []
        }
    }

    componentWillMount(){
        http.get("userOrder", {userid: sessionStorage.getItem("userid"), status:0}).then((res)=>{
            if(res.status == true){
                this.setState({dataset:JSON.parse(res.data[0].products)})
            }
        })
    }

    //点击支付成功--查找条件为state为0的订单数据并将它的state变成1
    paid(){
        let arr = this.state.dataset;
        console.log(arr);

        http.get("UpdOrder", {userid:sessionStorage.getItem("userid"), condition:0, status:1, products:JSON.stringify(arr)}).then((res)=>{
            // 跳转到个人页面
            hashHistory.push('/mine');
        })    
    }
    

    render(){
        let baseurl = 'src/static/img/'
        let totalCost = 0;
        let userid = sessionStorage.getItem("userid");   

        return (
            <div className="lzf_confirm_all">

                <div className="lzf_confirm_header">
                    <Link to ="cart"><i className="iconfont lzf_confirm_left">&#xe61e;</i></Link>
                    <h3>
                        确认订单
                    </h3>
                </div>             

                <div className="lzf_confirm_main">

                    <div className="lzf_address">
                        <img src = {require('./lzfaddress.png')}/>
                    </div>

                    <div className="lzf_fapiao">
                        <img src = {require('./lzffapiao.png')}/>
                    </div>

                    <div className="lzf_transport confirm_main0">
                        <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_returned.png"/>
                        <span>华为商城配送</span>
                    </div>

                    <ul className="lzf_prolist">                   
                        {
                            this.state.dataset.map((item) =>{
                                
                                totalCost += Number(item.number) * Number(item.price);

                                return (
                                    <li key={Math.random()}><div className="lzf_prolist_white"><img  src={baseurl + item.img}/><h3 className="prolist_title">{item.title}</h3><h4>x{item.number}</h4><h5>￥{item.price}</h5></div><div className="lzf_prolist_gray"><span>配</span><h3>天翼通1GB全球通用流量套餐</h3><h4>x 1</h4></div></li>
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
                                <span>优惠：-￥0.00</span>
                                <span>小计：<i>￥{totalCost.toFixed(2)}</i></span>
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
                    <div>应付总额：<span>￥{totalCost.toFixed(2)}</span></div>
                    <div className="lzf_paid" onClick={this.paid.bind(this)}>提交订单</div>
                </div>
            </div>
        )     
    }
}