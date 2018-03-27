import React,{Component} from 'react'
import {Link} from 'react-router'
import NavComponent from '../nav/NavComponent'

import '../../common/common.css'
import './home.css'
export default class HomeComponent extends Component{
    render(){
        return (
            <div className="home homepage">
                <div className="homeHeader">

                    <div className="homeHeader_1">
                        <div className="homeInput">
                            <input type="text" placeholder="HUAWEI nova 2s 荣耀V10"/>
                            <i className="iconfont icon-search"></i>
                        </div>
                        <i className="iconfont icon-qunfengxiaoxitishilingdang"></i>
                        <span>登录</span>

                    </div>

                </div>

    
                <div className="homeContent wayslContent">
                    
                    <div className="lunbo">
                        
                    </div>

                    <div className="contenBanner">
                        <ul>
                            <li>

                                <div><img src="../../../src/components/home/img/nav1.jpg" /></div>
                                <span>优选配件</span>
                            </li>
                            <li>
                                <div><img src="../../../src/components/home/img/nav2.jpg" /></div>
                                <span>会员领劵</span>
                            </li>
                            <li>
                                <div><img src="../../../src/components/home/img/nav3.jpg" /></div>
                                <span>新品预定</span>
                            </li>
                            <li>
                                <div><img src="../../../src/components/home/img/nav4.jpg" /></div>
                                <span>以旧换新</span>
                            </li>
                            <li>
                                <div><img src="../../../src/components/home/img/nav5.jpg"/></div>
                                <span>数码特惠</span>
                            </li>
                           
                        </ul>
                    </div>
                    
                    <section className="conentList_1">
                        
                    </section>
                    
                    <div className="wayslRxproduct Sections">
                        <div className="Rx_heard">
                            <p>
                                <span>热销配件</span>
                                <span>更多<i className="iconfont icon-arrow_right"></i></span>
                            </p>
                        </div>
                    </div>

                    <div className="wayslStproduct Sections">

                        <div className="St_heard">
                            <p>
                                <span>生态产品</span>
                                <span>更多<i className="iconfont icon-arrow_right"></i></span>
                            </p>
                        </div>
                    </div>

                    <div className="wayslContent_buttom">
                        <div className="content_buttom_1">
                            <span>登录</span>
                            <span>反馈</span>
                        </div>
                        <div className="content_buttom_2">
                            <ul>
                                <li>
                                    <i className="kehu"></i>
                                    <span>客户端</span>
                                </li>
                                <li>
                                    <i className="chuping"></i>
                                    <span>触屏版</span>
                                </li>
                                <li>
                                    <i className="diannao"></i>
                                    <span>电脑版</span>
                                </li>
                                
                            </ul>
                        </div>
                        


                        <div className="content_buttom_3">      
                            <ul>
                                <li>隐私政策</li>
                                <li>用户协议</li>
                                <li>苏ICP备17040376号-6</li>
                            </ul>
                            <p className="waysl_content_p">
                                <span>苏公网安备32011402010009号</span>
                                <span>Copyright © 2012-2018 </span>
                            </p>
                            <p>VMALL.COM 版权所有</p>
                        </div>
                    </div>

                </div>

                <div className="homeFooter wayslFooter"><NavComponent /></div>
            </div>
        )
    }
}