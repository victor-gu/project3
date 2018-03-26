import React,{Component} from 'react' 
import NavComponent from '../nav/NavComponent'
import '../../common/common.css'

import './MyselfComponent.css'
import './base.css'
import '../MyselfComponent/iconfont/lzffont/iconfont.css'
import MyselfHeaderComponent from './MyselfHeaderComponent/MyselfHeaderComponent.js'
import Nav from '../nav/NavComponent.js'

export default class MyselfComponent extends Component{
    // render(){
    //     return (
    //         <div className="home">             
    //            <div className="homeHeader"></div>
    //            <div className="homeContent">
    //                  <h1>梓峰的天下</h1>
    //            </div>
    //            <div className="homeFooter"><NavComponent /></div>
    //         </div>
    //     )
    // }
    
    render(){
        return (
            <div className="myself">

               
                <MyselfHeaderComponent/>
                
                <div className="lzf_mainbody">

                    <div id="lzf_topthree">
                        <ul>
                            <img className="userimg" src = {require('./iconfont/defaultface_user_after.png')} />
                            <li>
                                <span className="lzf_top0">
                                    <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/icon/icon_integral.png"/>
                                    <span>积分</span>
                                </span>
                                <p>--分</p>                           
                            </li>
                            <li>
                                <span className="lzf_top0">
                                    <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/icon/icon_coupon.png"/>
                                    <span>优惠券</span>
                                </span>
                                <p>--张</p>
                            </li>
                            <li>
                                <span className="lzf_top0">
                                    <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/icon/icon_voucher.png"/>
                                    <span>代金券</span>
                                </span>
                                <p>--元</p>
                            </li>
                        </ul>
                    </div>

                    <div id="lzf_orderlist">
                    
                        <div className="title">
                            <h3>我的订单</h3>
                            <h4>全部订单</h4>
                        </div>

                        <ul className="lzf_fivelist">
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_unpaid.png"/>
                                <span>待付款</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_receipt.png"/>
                                <span>待收货</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_estimate.png"/>
                                <span>待评价</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_returned.png"/>
                                <span>退换货</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_callback.png"/>
                                <span>回收单</span>
                            </li>
                        </ul>
                    </div>

                    <div id="lzf_myvmail" className="lzf_liststyle0">
                        <h3>我的Vmail</h3>
                        <ul>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_vip.png"/>
                                <span>会员频道</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_authentication.png"/>
                                <span>实名认证</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_address.png"/>
                                <span>收货地址</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_easyBuy.png"/>
                                <span>优享购</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_optimal.png"/>
                                <span>优惠码</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_appointment.png"/>
                                <span>预约记录</span>
                            </li>
                        </ul>
                    </div>

                    <div id="adpic">
                        <img src="https://res.vmallres.com/pimages//sale/2018-01/20180113000743883.jpg" />
                    </div>

                    <div id="lzf_service" className="lzf_liststyle0">
                        <h3>我的服务</h3>
                        <ul>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_exchange.png"/>
                                <span>以旧换新</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_prepaid.png"/>
                                <span>手机充值</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_network.png"/>
                                <span>服务网点</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_store.png"/>
                                <span>线下门店</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_FAQ.png"/>
                                <span>常见问题</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_feedback.png"/>
                                <span>意见反馈</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_agreement.png"/>
                                <span>服务协议</span>
                            </li>
                            <li>
                                <img src="https://res.vmallres.com/nwap/20180301/images/echannelWap/misc/icon_m_service.png"/>
                                <span>客服中心</span>
                            </li>
                        </ul>
                    </div>

                    <div id="lzf_mesbox">
                        <h3>我的消息</h3>

                        <ul>
                            <li>
                                <div className="title">
                                    <span>为您推荐</span>
                                    <span className="time">今天12:00</span>
                                </div>

                                <div className="prolist">
                                    <img src="https://res.vmallres.com/pimages//recommendmsg/2017122911347005.png"/>
                                    <div className="msglist">
                                        <span className="proname">荣耀九青春版</span>
                                        <span>每周一二三开枪</span>
                                    </div>                               
                                </div>
                            </li>
                            <li>
                                <div className="title">
                                    <span>为您推荐</span>
                                    <span className="time">今天12:00</span>
                                </div>

                                <div className="prolist">
                                    <img src="https://res.vmallres.com/pimages//recommendmsg/2018032611181867.png"/>
                                    <div className="msglist">
                                        <span className="proname">华为MATE10 PROJECT</span>
                                        <span>每周一二三开枪</span>
                                    </div>                               
                                </div>
                            </li>
                            <li>
                                <div className="title">
                                    <span>为您推荐</span>
                                    <span className="time">今天12:00</span>
                                </div>

                                <div className="prolist">
                                    <img src="https://res.vmallres.com/pimages//recommendmsg/2018032611172783.png"/>
                                    <div className="msglist">
                                        <span className="proname">华为畅玩lemon</span>
                                        <span>每周一二三开枪</span>
                                    </div>                               
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="loginnotice">
                        <span>登录即可查看全部动态消息</span>
                        <span className="loginlink">现在登录</span>
                    </div>

                    <div id="aboutus" className="lzf_liststyle0">
                        <div className="lzf_login1">
                            <p>
                                <span>登录</span>
                                <span>反馈</span>
                            </p>
                        </div>
                        <ul>
                            <li>
                                <i className="iconfont icon-app"></i>
                                <span>客户端</span>
                            </li>
                            <li>
                                <i className="iconfont">&#xe61e;</i>
                                <span>触屏版</span>
                            </li>
                            <li>
                                <i className="iconfont">&#xe600;</i>
                                <span>电脑版</span>
                            </li>                         
                        </ul>
                        <div className="lzf_license">
                            <p>隐私政策  用户协议  苏ICP备17040376号-6</p>
                            <p>苏公网安备32011402010009号    Copyright © 2012-2018 </p>
                            <p>VMALL.COM 版权所有</p>
                        </div>
                    </div>              
                </div>
                <Nav/>
                
            </div>
            
        )
    }
}