import React from 'react'
import {connect} from 'react-redux'
import {Link,hashHistory,browserHistory} from 'react-router'
// import cs from 'classnames';

import '../iconfont/lzffont/iconfont.css'
import './lzfheader.css'

export default class MyselfComponent extends React.Component{

    render(){
        return(
            <div className = "lzf_topnavfixed" ref="lzf_header">

                <div className="left_topnav">
                    <Link to ="login"><p className="lzf_loginbtn">
                        登录 / 注册 
                        </p></Link>
                    <h5 className="lzf_profit">登录更多优惠
                    </h5>
                </div>

                <div className="right_topnav">
                    <i className="iconfont icon-bell"></i>
                </div>
            </div>
        )
    }
}