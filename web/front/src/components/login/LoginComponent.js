import React,{Component} from 'react' 
import '../../common/common.css'
import './LoginComponent.css'
import http from '../../utils/httpclient'
import {Link} from 'react-router'

export default class SortComponent extends Component{
    name(){
        this.refs.name.style.background="#EFEFEF"
    }
    pass(){
        this.refs.pass.style.background="#EFEFEF"
    }
    tologin(){
        if(this.refs.name.value==''){
                this.refs.name.style.background="#FFBFBF"
            }else if(this.refs.pass.value==''){
                this.refs.pass.style.background="#FFBFBF"
            }else{
            http.get('login',{username:this.refs.name.value,password:this.refs.pass.value}).then((res) => {
                    if(res.status){
                        window.sessionStorage.setItem('xxtoken',res.data)
                        window.sessionStorage.setItem('userid',res.data1[0]._id)

                        window.sessionStorage.setItem('username',this.refs.name.value)
                        location.href ='/'
                    }else{
                        this.refs.name.style.background="#FFBFBF"
                        this.refs.name.value=null;
                        this.refs.name.focus();
                        this.refs.pass.value=null;
                    }
                })
            }
    }
    render(){
        return (          
               <div id="login">
               <Link to="/"><i className="tomain">返回主页</i></Link>
                    <div className="login-head">
                        <h1>华为帐号-登录</h1>
                        <p>华为帐号适用于访问所有华为服务。您可登录该帐号，访问云服务、华为商城、华为/荣耀官网、花粉俱乐部及更多服务。</p>
                    </div>
                    <div className="login-body">
                        <div>
                            <input type="text" placeholder="用户名" ref="name" onBlur={this.name.bind(this)}/>
                        </div>
                        <div>
                            <input type="password" placeholder="密码" ref="pass" onBlur={this.pass.bind(this)}/>
                        </div>
                        <div>
                            <input type="button" value="登录" className="btn" onClick={this.tologin.bind(this)}/>
                        </div>
                        <div>
                            <input type="checkbox" className="rem"/><span>记住密码</span>
                        </div>
                        <div className="goto">
                            <a href="#/reg" className="a-reg">注册帐号</a><a href="#">忘记密码?</a>
                        </div>
                    </div>
                    <div className="login-foot">
                        <div className="other">
                            <span>其他登录方式</span>
                        </div>
                        <div className="foot">
                            <span className="qq"><img src={'./src/components/sort/imgs/qq.png'}/></span>
                            <span className="alipay"><img src={'./src/components/sort/imgs/alipay.png'}/></span>
                        </div>
                    </div>
                </div>
        )
    }
}