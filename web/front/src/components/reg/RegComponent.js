import React,{Component} from 'react'
import '../../common/common.css'
import './RegComponent.css'

export default class SortComponent extends Component{
    render(){
        return (          
               <div id="reg">
                    <div className="reg-head">
                        <h1>华为帐号-注册</h1>
                        <p>华为帐号适用于访问所有华为服务。您可注册后登录该帐号，访问云服务、华为商城、华为/荣耀官网、花粉俱乐部及更多服务。</p>
                    </div>
                    <div className="reg-body">
                        <div>
                            <label htmlFor="username">用户名 :</label>
                            <input type="text" id="username" placeholder="6-12位,不能包含空格"/>
                        </div>
                        <div>
                            <label htmlFor="password">设置密码 :</label>
                            <input type="text" id="password" placeholder="请输入8-20位密码"/>
                        </div>
                        <div>
                            <label htmlFor="password2">确认密码 :</label>
                            <input type="text" id="password2" placeholder="请再次输入密码"/>
                        </div>
                        <div>
                            <label htmlFor="phone">手机 :</label>
                            <input type="text" id="phone" placeholder="请输入11位合法手机号"/>
                        </div>
                        <div>
                            <label htmlFor="email">邮箱 :</label>
                            <input type="text" id="email" placeholder="请输入正确邮箱地址"/>
                        </div>
                        <div id="gender">
                            <label>性别 :</label>
                            <input type="radio" name="gender" value="男"/>男
                            <input type="radio" name="gender" value="女"/>女
                        </div>
                        <div>
                            <label htmlFor="age">年龄 :</label>
                            <input type="text" id="age" placeholder="请输入您的年龄"/>
                        </div>
                        <div>
                            <label htmlFor="birthday">生日 :</label>
                            <input type="date" id="birthday"/>
                        </div>
                        <div>
                            <input type="button" id="btn-reg" value="立即注册"/>
                        </div>
                    </div>
                </div>
        )
    }
}