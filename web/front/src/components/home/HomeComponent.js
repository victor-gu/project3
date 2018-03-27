import React,{Component} from 'react'
import {Link} from 'react-router'
import NavComponent from '../nav/NavComponent'

import '../../common/common.css'
import './home.css'
export default class HomeComponent extends Component{
    render(){
        return (
            <div className="home">
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

    
                <div className="homeContent">
                    
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

                </div>

                <div className="homeFooter"><NavComponent /></div>
            </div>
        )
    }
}