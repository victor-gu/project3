import React,{Component} from 'react'
import {Link,hashHistory} from 'react-router'
import NavComponent from '../nav/NavComponent'

import Section1Component from './section/Section1Component'
import Section2Component from './section/Section2Component'
import Section3Component from './section/Section3Component'
import Section4Component from './section/Section4Component'
import Section5Component from './section/Section5Component'
import Section6Component from './section/Section6Component'
import Section7Component from './section/Section7Component'

import LunboComponent from '../home/lunbo/LunboComponent'
import JxComponent from '../home/jingxuan/JxComponent'
import TetuiComponent from '../home/tetui/TetuiComponent'
import http from '../../utils/httpclient'
import SpinnerComponent from '../../spinner/SpinnerComponent'

import '../../common/common.css'
import './home.css'
export default class HomeComponent extends Component{
    componentDidMount(){ 
        var username = window.sessionStorage.getItem('username');
        if(username == null){
            this.refs.zhuangtai.innerHTML = '登录';
        }else{
            this.refs.zhuangtai.innerHTML = username;
        }
      
    }
    
    dltz(){
        var username = window.sessionStorage.getItem('username');
        console.log(username)
        if(username == null){
            this.refs.zhuangtai.innerHTML = '登录';
            this.props.router.push({pathname:"/login"})
        }else{
            this.refs.zhuangtai.innerHTML = username;
            this.props.router.push({pathname:"/mine"})
        }
    }
    
    componentWillMount(){
        this.setState({spinnerShow:true})
        http.get('frontApoproducts',{}).then((res)=>{
            this.setState({
                wayslData: res.data,
                spinnerShow:true, 
            })
        })
    }
    state = {
        wayslData:[],
        moredata:[],
        spinnerShow:true,
    }

    zhuangtai(){
         var username = window.sessionStorage.getItem('username');
    }
    
    render(){
        return (
            <div className="home homepage">
                <SpinnerComponent spinnerShow={this.state.spinnerShow}/>
                <div className="homeHeader">
                    <div className="homeHeader_1">
                        <div className="homeInput">
                            <Link to="/search">
                            <input type="button" value="HUAWEI nova 2s 荣耀V10"/>
                            </Link>
                            <i className="iconfont icon-search"></i>
                        </div>
                        <i className="iconfont icon-qunfengxiaoxitishilingdang"></i>
                        <span ref="zhuangtai" className="dengluzt" onClick={this.dltz.bind(this)}>登录</span>
                    </div>
                </div>

                <div className="homeContent wayslContent" >
                    <div className="lunbo" ref="lunbo" id="userOrder">
                        <LunboComponent config={["./src/static/img/lunbo1.jpg","./src/static/img/lunbo2.jpg","./src/static/img/lunbo3.jpg","./src/static/img/lunbo4.jpg","./src/static/img/lunbo5.jpg","./src/static/img/lunbo6.jpg","./src/static/img/lunbo7.jpg","./src/static/img/lunbo8.jpg"]} ref="lbcomponent"></LunboComponent>
                    </div>

                    <div className="contenBanner">
                        <ul>
                            <li>
                                <Link to="/nav">
                                    <div><img src="./src/static/img/nav1.jpg" /></div>
                                    <span>优选配件</span>
                                </Link>   
                            </li>
                            <li><Link to="/nav">
                                <div><img src="./src/static/img/nav2.jpg" /></div>
                                <span>会员领劵</span></Link>
                            </li>
                            <li><Link to="/nav">
                                <div><img src="./src/static/img/nav3.jpg" /></div>
                                <span>新品预定</span></Link>
                            </li>
                            <li><Link to="/nav">
                                <div><img src="./src/static/img/nav4.jpg" /></div>
                                <span>以旧换新</span></Link>
                            </li>
                            <li><Link to="/nav">
                                <div><img src="./src/static/img/nav5.jpg"/></div>
                                <span>数码特惠</span></Link>
                            </li>
                           
                        </ul>
                    </div>
                    
                    <div className="tetui">
                        <TetuiComponent tetui={this.state.wayslData}></TetuiComponent>
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
                        <Section1Component Section1={[this.state.wayslData,"华为手机"]}></Section1Component>
                    </div>
    
                    <div className="wayslPbproduct Sections">
                        <Section2Component Section2={[this.state.wayslData,"荣耀手机"]}></Section2Component>
                    </div>

                    <div className="wayslCdproduct Sections">
                         <Section3Component Section3={[this.state.wayslData,"笔记本&平板"]}></Section3Component>
                    </div>

                    <div className="wayslJjproduct Sections">
                         <Section4Component Section4={[this.state.wayslData,"智能穿戴"]}></Section4Component>
                    </div>

                    <div className="wayslRxproduct Sections">
                         <Section5Component Section5={[this.state.wayslData,"智能家居"]}></Section5Component>
                    </div>

                    <div className="wayslStproduct Sections">
                         <Section6Component Section6={[this.state.wayslData,"生态产品"]}></Section6Component>
                    </div>

                    <div className="wayslStproduct Sections">
                         <Section7Component Section7={[this.state.wayslData,"通用配件"]}></Section7Component>
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