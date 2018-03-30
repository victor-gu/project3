import React from 'react'
import {Link} from 'react-router'
import http from '../../../utils/httpclient'

import './PhoneMore.css'

export default class PhoneMoreComponent extends React.Component{
    componentWillMount(){
        http.get('frontApoproducts',{category:'华为手机'}).then((res)=>{
            this.setState({
                moredata:res.data,
            }) 
        })
    }
    state={
        moredata:[]
    }
    gotodet(id){
        location.href="#/goods"
        window.sessionStorage.setItem("goodsid", id);
    }
    render(){
        console.log(this.state.moredata)
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
                    {
                        this.state.moredata.map((item)=>{
                            return (
                                <div className="PhoneMore_content_header" key={item._id}>
                                    <div className="phoneMore_content_l" onClick = {this.gotodet.bind(this,item._id)}>
                                        <img src={"./src/static/img/"+item.img} />
                                    </div>
                                    <div className="phoneMore_content_r">
                                        <p className="PhoneMore_content_rt">{item.title}</p>
                                        <p className="phoneMore_content_rb"><span>￥</span>{item.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}