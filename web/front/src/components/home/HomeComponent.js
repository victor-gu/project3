import React,{Component} from 'react'
import {Link} from 'react-router'
import NavComponent from '../nav/NavComponent'
import SectionsComponent from './SectionsComponent'
import LunboComponent from '../home/lunbo/LunboComponent'
import JxComponent from '../home/jingxuan/JxComponent'
import TetuiComponent from '../home/tetui/TetuiComponent'
import http from '../../utils/httpclient'
import SpinnerComponent from '../../spinner/SpinnerComponent'

import '../../common/common.css'
import './home.css'
export default class HomeComponent extends Component{
    state = {
        wayslData:[],
        spinnerShow:false,
    }
    componentWillMount(){
        this.setState({spinnerShow:true})
        http.get('frontApoproducts',{}).then((res)=>{
            this.setState({
                wayslData: res.data,
                spinnerShow:false, 
            })
        })
    }
    render(){
        return (
            <div className="home homepage">
                <SpinnerComponent spinnerShow={this.state.spinnerShow}/>
                <div className="homeHeader">
                    <div className="homeHeader_1">
                        <div className="homeInput">
                            <input type="button" value="HUAWEI nova 2s 荣耀V10"/>
                            <i className="iconfont icon-search"></i>
                        </div>
                        <i className="iconfont icon-qunfengxiaoxitishilingdang"></i>
                        <span>登录</span>
                    </div>
                </div>

                <div className="homeContent wayslContent">
                    <div className="lunbo">
                        <LunboComponent config={["src/components/home/img/lunbo1.jpg","src/components/home/img/lunbo2.jpg","src/components/home/img/lunbo3.jpg","src/components/home/img/lunbo4.jpg","src/components/home/img/lunbo5.jpg","src/components/home/img/lunbo6.jpg","src/components/home/img/lunbo7.jpg","src/components/home/img/lunbo8.jpg"]}></LunboComponent>
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
                    
                    <div className="tetui">
                        <TetuiComponent></TetuiComponent>
                    </div>
                    
                    <div className="news">
                        <h5>公告</h5>
                        <ul>
                            <li>【318周年庆】AI荣耀 芯生活</li>
                            <li>【318周年庆】AI荣耀 芯生活</li>
                            <li>【318周年庆】AI荣耀 芯生活</li>
                            <li>【318周年庆】AI荣耀 芯生活</li>
                        </ul>
                       <span>更多<i className="iconfont icon-arrow_right"></i></span>
                    </div>

                    <div className="Zhuanqu">
                        <div className="huawei">
                            <img src="../../../src/components/home/img/20170923212136748.jpg" />
                        </div>
                        <div className="rongyao">
                            <img src="../../../src/components/home/img/20170923212139427 (1).jpg" />
                        </div>
                    </div>

                    <div className="wayslJxproduct">
                        <div>
                            <p>
                                <span>超值精选</span>
                            </p>
                        </div>
                       <JxComponent jingxuan={this.state.wayslData}></JxComponent>
                    </div>

                    <div className="wayslPhoneproduct Sections">
                        <SectionsComponent allproduct = {[this.state.wayslData,"华为手机"]}></SectionsComponent>
                    </div>

                    <div className="wayslPbproduct Sections">
                        <div className="Rx_heard">
                            <p>
                                <span>精品平板</span>
                                <span>更多<i className="iconfont icon-arrow_right"></i></span>
                            </p>
                        </div>
                         <div className="section">
                            
                        </div>
                    </div>

                    <div className="wayslCdproduct Sections">
                        <div className="Cd_heard">
                            <p>
                                <span>智能穿戴</span>
                                <span>更多<i className="iconfont icon-arrow_right"></i></span>
                            </p>
                        </div>
                         <div className="section">
                            
                        </div>
                    </div>

                    <div className="wayslJjproduct Sections">
                        <div className="Jj_heard">
                            <p>
                                <span>智能家居</span>
                                <span>更多<i className="iconfont icon-arrow_right"></i></span>
                            </p>
                        </div>
                         <div className="section">
                            
                        </div>
                    </div>

                    <div className="wayslRxproduct Sections">
                        <div className="Rx_heard">
                            <p>
                                <span>热销配件</span>
                                <span>更多<i className="iconfont icon-arrow_right"></i></span>
                            </p>
                        </div>
                         <div className="section">
                            
                        </div>
                    </div>

                    <div className="wayslStproduct Sections">

                        <div className="St_heard">
                            <p>
                                <span>生态产品</span>
                                <span>更多<i className="iconfont icon-arrow_right"></i></span>
                            </p>
                        </div>
                         <div className="section">
                            
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