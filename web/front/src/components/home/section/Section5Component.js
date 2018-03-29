import React from 'react'

export default class Section5Component extends React.Component{
    render(){
    var d=8;
    return (
        <div>
            <div className="sections_top">
                <p className="sections_header">
                    <span>{this.props.Section5[1]}</span>
                    <span>更多<i className ="iconfont icon-arrow_right"></i></span>
                </p>
            </div>
            <div className="section">
                <div className="section_son">
                    <ul>
                        {
                            this.props.Section5[0].map((item)=>{
                                if(item.category == this.props.Section5[1]){
                                        d--;
                                    if(d>=0){
                                        return(
                                            <li key={item._id}>
                                                <img src="../../../src/components/home/img/1507711722757.jpg" />
                                                <h6>{item.name}</h6>
                                                <p>{item.title}</p>
                                                <p className="money"><span>￥</span><span>{item.price}</span></p>
                                            </li>
                                        )
                                    }
                                }    
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
                    
        )
    }

}