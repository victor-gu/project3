import React from 'react'
import {connect} from 'react-redux'


import '../iconfont/lzffont/iconfont.css'
import './lzfheader.css'

export default class MyselfComponent extends React.Component{

    componentWillMount(){
        // 吸顶菜单功能
        window.addEventListener('scroll', ()=>{
            var header = this.refs.lzf_header;
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(scrollTop);
            // console.log(header.className);
            if(scrollTop > 120){
                header.className = 'lzf_topnavfixed';
            }else if(scrollTop<120){
                header.className = 'lzf_topnav';
            }
        })    
    }


    render(){
        return(
            <div className="lzf_topnav" ref="lzf_header">
                <div className="left_topnav">
                    <p>登录 / 注册 </p>
                    <h5 className="lzf_profit">享受更多会员权益</h5>
                </div>
                <div className="right_topnav">
                    <i className="iconfont icon-bell"></i>
                </div>
            </div>
        )
    }
}