import React,{Component} from 'react' 
import '../../common/common.css'
import './LoginComponent.css'
import http from '../../utils/httpclient'

export default class SortComponent extends Component{
    tologin(){
        http.get('login',{username:this.refs.name.value,password:this.refs.pass.value}).then((res) => {
                if(res.status){
                    location.href ='/'
                }else{
                    alert("用户名或密码有误")
                }
            })
    }
    render(){
        return (          
               <div id="login">
                    <div className="login-head">
                        <h1>华为帐号-登录</h1>
                        <p>华为帐号适用于访问所有华为服务。您可登录该帐号，访问云服务、华为商城、华为/荣耀官网、花粉俱乐部及更多服务。</p>
                    </div>
                    <div className="login-body">
                        <div>
                            <input type="text" placeholder="用户名" ref="name"/>
                        </div>
                        <div>
                            <input type="password" placeholder="密码" ref="pass"/>
                        </div>
                        <div>
                            <input type="button" value="登录" className="btn" onClick={this.tologin.bind(this)}/>
                        </div>
                        <div>
                            <input type="checkbox" className="rem"/><span>记住密码</span>
                        </div>
                        <div className="goto">
                            <a href="#" className="a-reg">注册帐号</a><a href="#">忘记密码?</a>
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