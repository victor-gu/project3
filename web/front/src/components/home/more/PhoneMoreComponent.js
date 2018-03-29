import React from 'react'
import {Link} from 'react-router'
import './PhoneMore.css'

export default class PhoneMoreComponent extends React.Component{
    render(){
        return(
            <div className="phoneMore">
                
                <div className="phoneMore_header">
                    <span>华为手机</span>
                    <Link to="/">
                        <button>返回首页</button>
                    </Link>

                </div>
                <div className="phoneMore_nav">
                    <ul>
                        <li>最新</li>
                        <li>人气</li>
                        <li>价格</li>
                        <li>评价数</li>
                    </ul>
                </div>
                <div className="phoneMore_content">
                    <div className="PhoneMore_content_header">
                        <div className="phoneMore_content_l"></div>
                        <div className="phoneMore_content_r">
                            <p className="phoneMore_content_rt">你i阿发放哈哈分iuahfiushisasdf</p>
                            <p className="phoneMore_content_rb"><span>￥</span>1009</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}