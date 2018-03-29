import React from 'react'
import {connect} from 'react-redux'
import {Link,hashHistory,browserHistory} from 'react-router'
// import cs from 'classnames';

import '../iconfont/lzffont/iconfont.css'
import './lzfheader.css'

export default class MyselfComponent extends React.Component{
    render(){
        let logincontent;
        let username = sessionStorage.getItem("username");

        let beforehtml = (
            <div className="left_topnav">
                <Link to ="login"><p className="lzf_loginbtn">
                    登录 / 注册   登录更多优惠
                    </p></Link>
            </div>
        )

        let afterhtml = (
            <div className="left_topnav">
                <p className="lzf_loginbtn">
                    欢迎您，亲爱的{username}
                </p>
            </div>
        )

        logincontent = username ? afterhtml : beforehtml;

        return(
            
            <div className = "lzf_topnavfixed" ref="lzf_header">

                <div>
                    {logincontent}
                </div>

                <div className="right_topnav">
                    <i className="iconfont icon-bell"></i>
                </div>
            </div>
        )
    }
}