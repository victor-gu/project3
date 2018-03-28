import React,{Component} from 'react'
import '../../common/common.css'
import './RegComponent.css'

export default class SortComponent extends Component{
    toreg(){

        if(!/^[a-z][a-z0-9\-]{5,19}$/.test(this.refs.user.value)){
                   // * 不能为空，
                   // * 不能使用特殊字符（数字、字母、横杠），
                   // * 必须以字母开头，
                   // * 长度6-20
                alert('用户名不合法');
                this.refs.user.value=null;
                this.refs.user.focus();
                return false;
            }

        if(!/^[^\s]{6,20}$/.test(this.refs.pass.value)){
                //   长度6-20 
                //   不能包含空格
                alert('密码不合法');
                this.refs.pass.value=null;
                this.refs.pass.focus();
                return false;
            }
        if(this.refs.pass.value!=this.refs.pass2.value){
                alert('两次密码输入不一致');
                this.refs.pass2.value=null;
                this.refs.pass2.focus();
                return false;
            }
        if(!/^1[34578]\d{9}$/.test(this.refs.phone.value)){
                alert('手机号码不合法');
                this.refs.phone.value=null;
                this.refs.phone.focus();
                return false;
        }
        if(!/^[a-z0-9_\-\.]{2,}@[a-z\d\-]{1,63}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(this.refs.email.value)){
            alert('请输入正确邮箱地址');
            this.refs.email.value=null;
            this.refs.email.focus();
            return false;
        }else{
            alert('登录成功')
            location.href ='/'
        }
        
    }
    render(){
        return (          
               <div id="reg">
                    <div className="reg-head">
                        <h1>华为帐号-注册</h1>
                        <p>华为帐号适用于访问所有华为服务。您可注册后登录该帐号，访问云服务、华为商城、华为/荣耀官网、花粉俱乐部及更多服务。</p>
                    </div>
                    <form className="reg-body" action="/">
                        <div>
                            <label htmlFor="username">用户名 :</label>
                            <input type="text" id="username" placeholder="6-12位,不能包含空格" required  ref="user"/>
                        </div>
                        <div>
                            <label htmlFor="password">设置密码 :</label>
                            <input type="password" id="password" placeholder="请输入8-20位密码" required ref="pass"/>
                        </div>
                        <div>
                            <label htmlFor="password2">确认密码 :</label>
                            <input type="password" id="password2" placeholder="请再次输入密码" required ref="pass2"/>
                        </div>
                        <div>
                            <label htmlFor="phone">手机 :</label>
                            <input type="phone" id="phone" placeholder="请输入11位合法手机号" required ref="phone"/>
                        </div>
                        <div>
                            <label htmlFor="email">邮箱 :</label>
                            <input type="text" id="email" placeholder="请输入正确邮箱地址" ref="email"/>
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
                            <input type="button" id="btn-reg" value="立即注册" onClick={this.toreg.bind(this)}/>
                        </div>
                    </form>
                </div>
        )
    }
}