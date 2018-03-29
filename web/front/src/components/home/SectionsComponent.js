import React from 'react'

export default class SectionsComponent extends React.Component{
    render(){
    var i=8;
    return (
        <div>
            <div className="sections_top">
                <p className="sections_header">
                    <span>{this.props.allproduct[1]}</span>
                    <span>更多<i className ="iconfont icon-arrow_right"></i></span>
                </p>
            </div>
            <div className="section">
                <div className="section_son">
                    <ul>
            {
                this.props.allproduct[0].map((item)=>{
                    i--;

                    if(i>=0){
                            console.log(item.category)
                            console.log(this.props.allproduct[1])
                            console.log("props:"+this.props)

                        if(item.category == this.props.allproduct[1]){
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