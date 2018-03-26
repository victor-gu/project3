import React,{Component} from 'react'
import {Link} from 'react-router'
import './nav.css'
export default class NavComponent extends Component{
    render(){
        return (
           <div className="nav">
                <ul>
                    <li> 
                        <Link to="/">
                        <i className="iconfont icon-shouye"></i>
                        <span>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sort">
                            <i className="iconfont icon-liebiaofenlei"></i>
                            <span>分类</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <i className="iconfont icon-gouwuche-01"></i>
                            <span>购物车</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mine">
                            <i className="iconfont icon-wodedongtai"></i>
                            <span>我的</span>
                        </Link>
                    </li>
                </ul>
           </div>
        )
    }
}