import React from 'react'

export default class Section6Component extends React.Component{
    render(){
        console.log(this.props.Section6)
    var e=8;
    return (
        <div>
            <div className="sections_top">
                <p className="sections_header">
                    <span>{this.props.Section6[1]}</span>
                    <span>更多<i className ="iconfont icon-arrow_right"></i></span>
                </p>
            </div>
            <div className="section">
                <div className="section_son">
                    <ul>
                        {
                            this.props.Section6[0].map((item6)=>{
                                
                                if(item6.category == this.props.Section6[1]){
                                    e--;
                                    if(e>=0){        

                                        return(
                                            <li key={item6._id}>
                                                <img src="../../../src/components/home/img/1507711722757.jpg" />
                                                <h6>{item6.name}</h6>
                                                <p>{item6.title}</p>
                                                <p className="money"><span>￥</span><span>{item6.price}</span></p>
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